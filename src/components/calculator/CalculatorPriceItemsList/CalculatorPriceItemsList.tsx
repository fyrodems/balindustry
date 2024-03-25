import { useState, useContext } from 'react'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
/* import { formatFileName } from '../../../utils/utils' */
import axios from 'axios'
/* import CalcModalBox from '../../atoms/CalcModalBox/CalcModalBox'
import InputField from '../../atoms/InputField/InputField'
import Button from '../../atoms/Button/Button' */
import x from '../../../assets/icons/x-square.svg'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
/* import { apiLink } from '../../../apiData' */
import CalculatorImagePreview from '../CalculatorImagePreview/CalculatorImagePreview'
import { Button } from '@/components/common/Button'

const CalculatorPriceItemsList = ({ filesArray, setFilesArray }) => {
  const { data, updateData } = useContext(DataContext)
  const { index } = useContext(SelectedContext)
  const [selectedItems, setSelectedItems] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [modalType, setModalType] = useState()
  const [clientMail, setClientMail] = useState('')
  const [clientName, setClientName] = useState('')

  const formatFileName = (file) =>
    file
      .split('.')[0]
      .replace('â', '-')
      .replace('Ä', 'ą')
      .replace('Ä', 'ć')
      .replace('Ä', 'ę')
      .replace('Å', 'ł')
      .replace('Å', 'ń')
      .replace('Ã³', 'ó')
      .replace('Å', 'ś')
      .replace('Åº', 'ź')
      .replace('Å¼', 'ż')
      .replace('Å', 'ł')
      .toUpperCase()

  const sendRequest = async () => {
    let files = []

    try {
      const toBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = reject
        })

      async function readFileContent(file) {
        const fullFileData = await toBase64(file)

        const searchTerm = 'base64,'
        const indexOfContent = fullFileData.indexOf(searchTerm)

        const fileContent = fullFileData.slice(indexOfContent + 7)

        return fileContent
      }

      let fileContent
      let attachment

      if (filesArray?.length > 0) {
        for (let file of filesArray) {
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

      const body = {
        /*  From: 'info@balindustry.com',
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
        Attachments: files, */
      }

      await axios.post(`${apiLink}`, body)
    } catch (e) {
      console.log(e)
    }
  }

  const addNewConfiguration = () => {
    console.log(data[index])
    if (
      data[index].fileName &&
      data[index].quantity &&
      data[index].thickness &&
      data[index].material
    ) {
      const duplicatedItemIndex = selectedItems.findIndex(
        (item) =>
          item.name === formatFileName(data[index].fileName) &&
          item.material === data[index].material &&
          item.thickness === data[index].thickness
      )
      if (duplicatedItemIndex !== -1) {
        const updatedItems = [...selectedItems]
        updatedItems[duplicatedItemIndex].quantity =
          parseInt(updatedItems[duplicatedItemIndex].quantity) +
          parseInt(data[index].quantity)
        setSelectedItems(updatedItems)
      } else {
        setSelectedItems([
          ...selectedItems,
          {
            name: formatFileName(data[index].fileName),
            quantity: data[index].quantity,
            thickness: data[index].thickness,
            material: data[index].material,
            file: data[index].path,
          },
        ])
      }
      updateData({ index: index, key: 'quantity', value: null })
      updateData({ index: index, key: 'material', value: null })
      updateData({ index: index, key: 'thickness', value: null })
    } else {
      setOpenModal(true)
      setModalType('configuration')
    }
  }

  const handleSubmit = () => {
    const nameRegex = /^(?!\s*$).+/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/

    const isItemsSelected = selectedItems.length > 0
    const isNameValid = nameRegex.test(clientName)
    const isEmailValid = emailRegex.test(clientMail)

    if (isItemsSelected && isNameValid && isEmailValid) {
      sendRequest()
      setClientMail('')
      setOpenModal(true)
      setModalType('thanks')
    } else {
      setOpenModal(true)
      setModalType('contact')
    }
  }

  console.log(selectedItems)
  return (
    <div>
      {/*  <CalcModalBox
        openModal={openModal}
        setOpenModal={setOpenModal}
        setFilesArray={setFilesArray}
        pageData={pageData}
        type={modalType}
      /> */}
      <Button
        className="calcPriceItemsList__button"
        onClick={addNewConfiguration}
        content={'Dodaj do wyceny'}
      />
      <>
        {selectedItems.length === 0 ? (
          <></>
        ) : (
          <>
            <div className="calcPriceItemsList__container">
              {selectedItems.map((item, index) => (
                <div key={index} className="calcPriceItemsList__itemRow">
                  <div className="calcPriceItemsList__LpAndImgWrapper">
                    <div className="calcPriceItemsList__LpAndImg">
                      <div className="calcPriceItemsList__itemLp">
                        {index + 1}.
                      </div>
                      <div className="calcPriceItemsList__imgMiniature">
                        <CalculatorImagePreview />
                      </div>
                    </div>
                    <div className="calcPriceItemsList__itemContent">
                      <div className="calcPriceItemsList__itemName">
                        {item.name}
                      </div>
                      <div className="calcPriceItemsList__itemDetails">
                        <span>Materiał: {item.material}</span>
                        <span>Grubość: {item.thickness} mm</span>
                        <span>Liczba: {item.quantity}</span>
                      </div>
                    </div>
                  </div>

                  {/*   <Button
                    isInvisible
                    name="Usuń plik"
                    isDefault={false}
                    content={<img src={x} alt="Delete file" />}
                    className="calcPriceItemsList__dateleConfigButton"
                    callback={() => {
                      setSelectedItems((selectedItem) =>
                        selectedItem.filter(
                          (item) => selectedItem.indexOf(item) !== index
                        )
                      )
                    }}
                  /> */}
                </div>
              ))}
            </div>

            <div className="calcPriceItemsList__contactDetails">
              {/* <span>{pageData.fileHeaders.contactForm}</span> */}
              {/*  <InputField
                type="text"
                name="Name"
                placeholder={pageData.namePlaceholder}
                id="name"
                value={clientName}
                setValueOnChange={(e) => setClientName(e.target.value)}
              /> */}
              {/*  <InputField
                type="email"
                name="Email"
                placeholder={pageData.emailPlaceholder}
                id="mail"
                value={clientMail}
                setValueOnChange={(e) => setClientMail(e.target.value)}
              /> */}
            </div>
            {/*  <Button
              className="calcPriceItemsList__button"
              content={pageData.buttons.sendAsk}
              callback={handleSubmit}
            /> */}
          </>
        )}
      </>
    </div>
  )
}

export default CalculatorPriceItemsList
