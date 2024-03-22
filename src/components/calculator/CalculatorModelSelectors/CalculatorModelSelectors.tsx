import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import { useState, useContext, useEffect, useRef } from 'react'
import materials from '../materials.json'
import { Input } from '@/components/ui/input'
import Material from '../modelSelectors/MaterialSelector/MaterialSelector'
import Thickness from '../modelSelectors/ThicknessSelector/ThicknessSelector'
import Quantity from '../modelSelectors/QuantitySelector/QuantitySelector'

// const Quantity = ({ pageData }) => {
//   const [num, setNum] = useState('')
//   const { data, updateData } = useContext(DataContext)
//   const { index } = useContext(SelectedContext)

//   const model = data[index]

//   const handleChange = ({ target }) => {
//     const regex = /^(?!0)[0-9\b]+$/
//     if (regex.test(target.value)) {
//       setNum(target.value)
//       updateData({ index: index, key: 'quantity', value: target.value })
//     } else {
//       setNum('')
//       updateData({ index: index, key: 'quantity', value: 0 })
//     }
//   }

//   // Initialize the num state based on model.quantity and model.material
//   useEffect(() => {
//     if (model.material !== null) {
//       /*  setNum('');
//     } else {  */
//       setNum(model.quantity || '')
//     }
//     if (model.material === null) {
//       setNum(model.quantity || '')
//     }
//   }, [model.material, model.quantity])

//   return (
//     <Input
//       /*       classForInput="calcModelSelectors__quantity"
//       name="quantity" */
//       type="number"
//       /*       pattern="[0-9]*" */
//       placeholder={1} /* {pageData.fileData.quantity} */
//       setValueOnChange={({ target }) => handleChange({ target })}
//       value={num}
//     />
//   )
// }

function CalculatorModelSelectors({ pageData }) {
  const { updateData } = useContext(DataContext)
  const { index } = useContext(SelectedContext)

  const handleMaterialChange = (selectedMaterial) => {
    const defaultThick =
      materials.find((el) => el.name === selectedMaterial)?.defaultThickness ||
      null
    updateData({ index: index, key: 'material', value: selectedMaterial })
    updateData({ index: index, key: 'thickness', value: defaultThick })
  }

  return (
    <div>
      <Material
        pageData={pageData}
        onSelectMaterialChange={handleMaterialChange}
      />
      <Thickness pageData={pageData} />
      <Quantity pageData={pageData} />
    </div>
  )
}

export default CalculatorModelSelectors
