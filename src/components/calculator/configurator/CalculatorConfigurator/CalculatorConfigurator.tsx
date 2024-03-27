import { useState, useContext, type Dispatch, type SetStateAction } from 'react'
import CalculatedModelDetails from '../CalculatedModelDetails/CalculatedModelDetails'
import CalculatorImagePreview from '../../CalculatorImagePreview/CalculatorImagePreview'
import CalculatorModelSelectors from '../modelPreview/CalculatorModelSelectors/CalculatorModelSelectors'
import CalculatorPriceItemsList from '../CalculatorPriceItemsList/CalculatorPriceItemsList'
import ConfiguratorFilesList from '../ConfiguratorFilesList/ConfiguratorFilesList'
import { DataContext } from '../../../../app/context/dataContext'
import styles from './CalculatorConfigurator.module.scss'
import Button from '@/components/common/Button'
import { SelectedContext } from '@/app/context/selectedContext'

interface CalculatorConfiguratorProps {
  filesArray: File[]
  setFilesArray: Dispatch<SetStateAction<File[]>>
}

interface SelectedItem {
  file: string
  material: string
  name: string
  quantity: number
  thickness: number
}

const CalculatorConfigurator: React.FC<CalculatorConfiguratorProps> = ({
  filesArray,
  setFilesArray,
}) => {
  const contextData = useContext(DataContext)
  const selectedContext = useContext(SelectedContext)
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<string>('')

  const formatFileName = (filename: string) =>
    filename
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

  const addNewConfiguration = () => {
    if (
      contextData?.data &&
      selectedContext &&
      contextData.data[selectedContext.index].fileName &&
      contextData.data[selectedContext.index].quantity &&
      contextData.data[selectedContext.index].thickness &&
      contextData.data[selectedContext.index].material
    ) {
      const duplicatedItemIndex = selectedItems.findIndex(
        (item) =>
          item.name ===
            formatFileName(contextData.data![selectedContext.index].fileName) &&
          item.material === contextData.data![selectedContext.index].material &&
          item.thickness === contextData.data![selectedContext.index].thickness
      )
      if (duplicatedItemIndex === -1) {
        setSelectedItems([
          ...selectedItems,
          {
            name: formatFileName(
              contextData.data[selectedContext.index].fileName
            ),
            quantity: contextData.data[selectedContext.index].quantity ?? 0,
            thickness: contextData.data[selectedContext.index].thickness ?? 0,
            material: contextData.data[selectedContext.index].material ?? '',
            file: contextData.data[selectedContext.index].path,
          },
        ])
      } else {
        const updatedItems = [...selectedItems]
        updatedItems[duplicatedItemIndex].quantity =
          Number(updatedItems[duplicatedItemIndex].quantity) +
          Number(contextData.data[selectedContext.index].quantity)
        setSelectedItems(updatedItems)
      }

      contextData.updateData({
        index: selectedContext.index,
        key: 'quantity',
        value: null,
      })
      contextData.updateData({
        index: selectedContext.index,
        key: 'material',
        value: null,
      })
      contextData.updateData({
        index: selectedContext.index,
        key: 'thickness',
        value: null,
      })
    } else {
      setIsModalOpen(true)
      setModalType('configuration')
    }
  }

  return (
    <div>
      <ConfiguratorFilesList
        filesArray={filesArray}
        setFilesArray={setFilesArray}
      />
      <div className={styles.chosenModelWrapper}>
        <CalculatorImagePreview />
        <CalculatorModelSelectors />
      </div>
      <Button
        content="Dodaj do zapytania"
        onClick={addNewConfiguration}
        className={styles.button}
      />
      <CalculatedModelDetails />

      <CalculatorPriceItemsList
        setFilesArray={setFilesArray}
        filesArray={filesArray}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalType={modalType}
        setModalType={setModalType}
      />
    </div>
  )
}

export default CalculatorConfigurator
