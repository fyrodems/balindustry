import { type Dispatch, type SetStateAction, useContext, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import arrowIcon from '../../../../public/icons/arrowUp.svg'
import styles from './ConfiguratorFilesList.module.scss'
import Button from '@/components/common/Button'

interface CalculatorConfiguratorProps {
  filesArray: File[]
  setFilesArray: Dispatch<SetStateAction<File[]>>
}

const ConfiguratorFilesList: React.FC<CalculatorConfiguratorProps> = ({
  filesArray,
  setFilesArray,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedContext = useContext(SelectedContext)
  const contextData = useContext(DataContext)

  const model = contextData.data[selectedContext.index]

  const handleClick = (e) => {
    contextData?.updateData({
      index: selectedContext?.index,
      key: 'quantity',
      value: null,
    })
    contextData?.updateData({
      index: selectedContext?.index,
      key: 'material',
      value: null,
    })
    contextData?.updateData({
      index: selectedContext?.index,
      key: 'thickness',
      value: null,
    })
    selectedContext?.changeIndex(+e.target.id)
    model.isReady = false

    // Warunek sprawdzający czy wszystkie dane są załadowane
    if (
      model.thickness !== null &&
      model.quantity !== null &&
      model.material !== null
    ) {
      model.isReady = true
    }
    setSelectedIndex(+e.target.id)
  }

  return (
    <div className={styles.filesList}>
      {filesArray.map((file, index) => {
        return (
          <div key={file.name} className={styles.fileWrapper}>
            <p
              id={index}
              onClick={handleClick}
              className={index === selectedIndex ? 'active' : null}
            >
              {file.name}
            </p>
            <Button
              disabled={false}
              className={styles.deleteFileButton}
              primary={false}
              size="XS"
              onClick={() => {
                setFilesArray((filesArray) =>
                  filesArray.filter(
                    (file) => filesArray.indexOf(file) !== index
                  )
                )
                if (index > 0) changeIndex(index - 1)
              }}
            >
              <X />
            </Button>
          </div>
        )
      })}
      <Button
        disabled={false}
        className={styles.addFilesButton}
        primary={false}
        size="L"
        onClick={() => {
          setFilesArray((filesArray) =>
            filesArray.filter(
              (file) => filesArray.indexOf(file) !== selectedContext.index
            )
          )
          if (selectedContext.index > 0) changeIndex(selectedContext.index - 1)
        }}
      >
        <Image src={arrowIcon as string} alt="Upload file" /> Dodaj pliki do
        wyceny
      </Button>
    </div>
  )
}

export default ConfiguratorFilesList
