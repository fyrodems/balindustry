import { useContext } from 'react'
import Material from '../modelSelectors/MaterialSelector/MaterialSelector'
import Thickness from '../modelSelectors/ThicknessSelector/ThicknessSelector'
import Quantity from '../modelSelectors/QuantitySelector/QuantitySelector'
import { DataContext } from '../../../../../app/context/dataContext'
import { SelectedContext } from '../../../../../app/context/selectedContext'
import styles from './CalculatorModelSelectors.module.scss'

function CalculatorModelSelectors() {
  const contextData = useContext(DataContext)
  const selectedModel = useContext(SelectedContext)

  return (
    <div className={styles.selectorsWrapper}>
      <div className={styles.calculatorModelSelectors}>
        {!contextData || !selectedModel ? (
          <div>Ładowanie</div>
        ) : (
          <>
            <Material contextData={contextData} selectedModel={selectedModel} />
            <Thickness
              contextData={contextData}
              selectedModel={selectedModel}
            />
            <Quantity contextData={contextData} selectedModel={selectedModel} />
          </>
        )}
      </div>
    </div>
  )
}

export default CalculatorModelSelectors
