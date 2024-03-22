import CalculatedModelDetails from '../CalculatedModelDetails/CalculatedModelDetails'
import CalculatorImagePreview from '../CalculatorImagePreview/CalculatorImagePreview'
import CalculatorModelSelectors from '../CalculatorModelSelectors/CalculatorModelSelectors'
import CalculatorPriceItemsList from '../CalculatorPriceItemsList/CalculatorPriceItemsList'
import ConfiguratorFilesList from '../ConfiguratorFilesList/ConfiguratorFilesList'

function CalculatorConfigurator({ data, filesArray, setFilesArray }) {
  return (
    <div>
      <ConfiguratorFilesList
        filesArray={filesArray}
        setFilesArray={setFilesArray}
      />
      <div className="calculatorConfigurator__wrapper">
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
