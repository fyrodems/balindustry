import Material from '../modelSelectors/MaterialSelector/MaterialSelector'
import Thickness from '../modelSelectors/ThicknessSelector/ThicknessSelector'
import Quantity from '../modelSelectors/QuantitySelector/QuantitySelector'
import styles from './CalculatorModelSelectors.module.scss'

function CalculatorModelSelectors() {
  return (
    <div className={styles.selectorsWrapper}>
      <div className={styles.calculatorModelSelectors}>
        <Material />
        <Thickness />
        <Quantity />
      </div>
    </div>
  )
}

export default CalculatorModelSelectors
