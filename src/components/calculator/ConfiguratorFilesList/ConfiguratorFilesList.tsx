import { useContext, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import arrowIcon from '../../../../public/icons/arrowUp.svg'
import styles from './ConfiguratorFilesList.module.scss'
import Button from '@/components/common/Button'

const ConfiguratorFilesList = ({ filesArray, setFilesArray }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { index, changeIndex } = useContext(SelectedContext)
  const { data, updateData } = useContext(DataContext)

  /*   const model = data[index] */

  const handleClick = (e) => {
    updateData({ index: index, key: 'quantity', value: null })
    updateData({ index: index, key: 'material', value: null })
    updateData({ index: index, key: 'thickness', value: null })
    changeIndex(+e.target.id)
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
                /*  setFilesArray((filesArray) =>
                  filesArray.filter(
                    (file) => filesArray.indexOf(file) !== index
                  )
                )
                if (index > 0) changeIndex(index - 1) */
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
          /*  setFilesArray((filesArray) =>
                  filesArray.filter(
                    (file) => filesArray.indexOf(file) !== index
                  )
                )
                if (index > 0) changeIndex(index - 1) */
        }}
      >
        <Image src={arrowIcon} alt="Upload file" /> Dodaj pliki do wyceny
      </Button>
    </div>
  )
}

export default ConfiguratorFilesList
