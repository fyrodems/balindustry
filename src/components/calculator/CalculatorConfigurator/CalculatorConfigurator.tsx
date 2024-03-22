import CalculatedModelDetails from '../CalculatedModelDetails/CalculatedModelDetails'
import CalculatorImagePreview from '../CalculatorImagePreview/CalculatorImagePreview'
import CalculatorModelSelectors from '../CalculatorModelSelectors/CalculatorModelSelectors'
import CalculatorPriceItemsList from '../CalculatorPriceItemsList/CalculatorPriceItemsList'
import ConfiguratorFilesList from '../ConfiguratorFilesList/ConfiguratorFilesList'
import styles from './CalculatorConfigurator.module.scss'

function CalculatorConfigurator({ data, filesArray, setFilesArray }) {
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
      <CalculatedModelDetails />

      <CalculatorPriceItemsList
        setFilesArray={setFilesArray}
        filesArray={filesArray}
      />
    </div>
  )
}

export default CalculatorConfigurator
