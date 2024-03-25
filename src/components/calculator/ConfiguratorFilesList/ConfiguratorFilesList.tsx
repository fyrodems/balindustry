import { type Dispatch, type SetStateAction, useContext, useState } from 'react'
import { X } from 'lucide-react'
import { type IDxf } from 'dxf-parser'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import DropInput from '../DropInput/DropInput'
import styles from './ConfiguratorFilesList.module.scss'
import Button from '@/components/common/Button'

interface CalculatorConfiguratorProps {
  filesArray: File[]
  setFilesArray: Dispatch<SetStateAction<File[]>>
}

interface Model {
  fileName: string
  fileContent: IDxf
  path: string
  units: string
  totalLength: string
  arrayLength: Array<{ type: string; length: number; elements?: number[] }>
  modelJson: null
  quantity: number | null
  material: string | null
  thickness: number | null
  density: number | null
  isReady: boolean
  totalArea: number
}

const ConfiguratorFilesList: React.FC<CalculatorConfiguratorProps> = ({
  filesArray,
  setFilesArray,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedContext = useContext(SelectedContext)
  const contextData = useContext(DataContext)

  const allModels = contextData?.data
  let selectedModel: Model | null = null
  if (allModels) {
    selectedModel = allModels[selectedContext?.index ?? 0]
  }

  const handleClick = (e: React.SyntheticEvent) => {
    if (!selectedModel) {
      return
    }

    if (selectedContext?.index) {
      contextData?.updateData({
        index: selectedContext.index,
        key: 'quantity',
        value: null,
      })
      contextData?.updateData({
        index: selectedContext.index,
        key: 'material',
        value: null,
      })
      contextData?.updateData({
        index: selectedContext.index,
        key: 'thickness',
        value: null,
      })
    }

    selectedContext?.changeIndex(Number((e.target as HTMLParagraphElement).id))
    selectedModel.isReady = false

    // Warunek sprawdzający czy wszystkie dane są załadowane
    if (
      selectedModel.thickness !== null &&
      selectedModel.quantity !== null &&
      selectedModel.material !== null
    ) {
      selectedModel.isReady = true
    }

    setSelectedIndex(+Number((e.target as HTMLParagraphElement).id))
  }

  return (
    <div className={styles.filesList}>
      {filesArray.map((file, index) => {
        return (
          <div key={file.name} className={styles.fileWrapper}>
            <p
              id={index.toString()}
              onClick={handleClick}
              className={index === selectedIndex ? styles.active : ''}
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
                if (index > 0) selectedContext?.changeIndex(index - 1)
              }}
            >
              <X />
            </Button>
          </div>
        )
      })}
      <DropInput filesArray={filesArray} setFilesArray={setFilesArray} />
    </div>
  )
}

export default ConfiguratorFilesList
