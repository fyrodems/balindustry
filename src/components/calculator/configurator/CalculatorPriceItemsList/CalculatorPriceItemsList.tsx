import { useState, type Dispatch, type SetStateAction } from 'react'
import axios from 'axios'
import { X } from 'lucide-react'
import CalculatorImagePreview from '../../CalculatorImagePreview/CalculatorImagePreview'
import CalculatorModalBox from '../../CalculatorModalBox/CalculatorModalBox'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import styles from './CalculatorPriceItemsList.module.scss'

interface CalculatorPriceItemsListProps {
  filesArray: File[]
  setFilesArray: Dispatch<SetStateAction<File[]>>
  selectedItems: SelectedItem[]
  setSelectedItems: Dispatch<SetStateAction<SelectedItem[]>>
}

interface SelectedItem {
  file: string
  material: string
  name: string
  quantity: number
  thickness: number
}
const CalculatorPriceItemsList: React.FC<CalculatorPriceItemsListProps> = ({
  filesArray,
  setFilesArray,
  selectedItems,
  setSelectedItems,
}) => {
  const [openModal, setOpenModal] = useState(false)
  const [modalType, setModalType] = useState()
  const [clientMail, setClientMail] = useState('')
  const [clientName, setClientName] = useState('')

  const toBase64 = async (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      // eslint-disable-next-line unicorn/prefer-add-event-listener
      reader.onload = () => {
        resolve(reader.result)
      }

      // eslint-disable-next-line unicorn/prefer-add-event-listener
      reader.onerror = reject
    })

  async function readFileContent(file: File) {
    const fullFileData = (await toBase64(file)) as string
    const searchTerm = 'base64,'
    const indexOfContent = fullFileData.indexOf(searchTerm)
    const fileContent = fullFileData.slice(indexOfContent + 7)

    return fileContent
  }

  const sendRequest = async () => {
    let files = []

    try {
      let fileContent
      let attachment

      if (filesArray?.length > 0) {
        for await (const file of filesArray) {
          fileContent = await readFileContent(file)

          attachment = {
            Name: file.name,
            Content: fileContent,
            ContentType: 'application/octet-stream',
          }

          files.push(attachment)
        }
      } else {
        files = []
      }

      /* const body = {
        From: 'info@balindustry.com',
        To: 'info@balindustry.com',
        Cc: `${clientMail}`,
        Bcc: 'info@balindustry.com',
        Subject: 'BAL Engineering - wiadomość z formularza wyceny cięcia',
        Tag: 'kalkulator',
        HtmlBody: `<h3>Wiadomość z formularza wyceny cięcia</h3>
        <p>Od: ${clientMail}</p>
        <p>Imię: ${clientName} </p>
        <p>Email: ${clientMail} </p>
      `,
        ReplyTo: 'info@balindustry.com',
        TrackOpens: false,
        TrackLinks: 'None',
        Attachments: files,
      }

      await axios.post('../api/contactForm', body) */
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async () => {
    const nameRegex = /^(?!\s*$).+/
    const emailRegex = /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]+$/

    const isItemsSelected = selectedItems.length > 0
    const isNameValid = nameRegex.test(clientName)
    const isEmailValid = emailRegex.test(clientMail)

    if (isItemsSelected && isNameValid && isEmailValid) {
      await sendRequest()
      setClientMail('')
      setOpenModal(true)
      setModalType('thanks')
    } else {
      setOpenModal(true)
      setModalType('contact')
    }
  }

  return (
    <div>
      <CalculatorModalBox
        openModal={openModal}
        setOpenModal={setOpenModal}
        setFilesArray={setFilesArray}
        type={modalType}
      />
      <>
        {selectedItems.length === 0 ? (
          <></>
        ) : (
          <>
            <div>
              {selectedItems.map((item, index) => (
                <div key={index}>
                  <div className={styles.itemWrapper}>
                    <div className={styles.numImgWrapper}>
                      {index + 1}.
                      <CalculatorImagePreview />
                    </div>
                    <div className={styles.detailsWrapper}>
                      <div className={styles.detailName}>{item.name}</div>
                      <div>
                        <p>
                          <span className={styles.detailName}>Materiał: </span>
                          {item.material}
                        </p>
                        <p>
                          <span className={styles.detailName}>Grubość:</span>{' '}
                          {item.thickness} mm
                        </p>
                        <p>
                          <span className={styles.detailName}>Liczba:</span>
                          {item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      setSelectedItems((selectedItem) =>
                        selectedItem.filter(
                          (item) => selectedItem.indexOf(item) !== index
                        )
                      )
                    }}
                  >
                    <X />
                  </Button>
                </div>
              ))}
            </div>

            <div>
              <p>Podaj nam swoje dane, abyśmy mogli się z Tobą skontaktować</p>
              <div>
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Jan Nowak"
                  value={clientName}
                  onChange={(e) => {
                    setClientName(e.target.value)
                  }}
                />
                <Label htmlFor="name">Imię i nazwisko *</Label>
                <Input
                  type="email"
                  id="mail"
                  placeholder="jannowak@gmail.com"
                  value={clientMail}
                  onChange={(e) => {
                    setClientMail(e.target.value)
                  }}
                />
              </div>
            </div>
            <Button content="Zapytaj o wycenę" onClick={handleSubmit} />
          </>
        )}
      </>
    </div>
  )
}

export default CalculatorPriceItemsList
