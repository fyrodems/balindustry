import { type Dispatch, type SetStateAction } from 'react'
import CalculatedModelDetails from '../CalculatedModelDetails/CalculatedModelDetails'
import CalculatorImagePreview from '../CalculatorImagePreview/CalculatorImagePreview'
import CalculatorModelSelectors from '../CalculatorModelSelectors/CalculatorModelSelectors'
import CalculatorPriceItemsList from '../CalculatorPriceItemsList/CalculatorPriceItemsList'
import ConfiguratorFilesList from '../ConfiguratorFilesList/ConfiguratorFilesList'
import styles from './CalculatorConfigurator.module.scss'
import Button from '@/components/common/Button'

interface CalculatorConfiguratorProps {
  filesArray: File[]
  setFilesArray: Dispatch<SetStateAction<File[]>>
}

const CalculatorConfigurator: React.FC<CalculatorConfiguratorProps> = ({
  filesArray,
  setFilesArray,
}) => {
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
        onClick={() => {}}
        className={styles.button}
      />
      <CalculatedModelDetails />

      <CalculatorPriceItemsList
        setFilesArray={setFilesArray}
        filesArray={filesArray}
      />
    </div>
  )
}

export default CalculatorConfigurator
