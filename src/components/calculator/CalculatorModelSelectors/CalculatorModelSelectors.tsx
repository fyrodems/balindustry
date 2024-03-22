import Material from '../modelSelectors/MaterialSelector/MaterialSelector'
import Thickness from '../modelSelectors/ThicknessSelector/ThicknessSelector'
import Quantity from '../modelSelectors/QuantitySelector/QuantitySelector'

function CalculatorModelSelectors() {
  return (
    <div>
      <Material />
      <Thickness />
      <Quantity />
    </div>
  )
}

export default CalculatorModelSelectors
