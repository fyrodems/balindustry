import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../../../app/context/dataContext'
import { SelectedContext } from '../../../../app/context/selectedContext'
import { Input } from '@/components/ui/input'

const Quantity = ({ pageData }) => {
  const [num, setNum] = useState('')
  const { data, updateData } = useContext(DataContext)
  const { index } = useContext(SelectedContext)

  const model = data[index]

  const handleChange = ({ target }) => {
    const regex = /^(?!0)[0-9\b]+$/
    if (regex.test(target.value)) {
      setNum(target.value)
      updateData({ index: index, key: 'quantity', value: target.value })
    } else {
      setNum('')
      updateData({ index: index, key: 'quantity', value: 0 })
    }
  }

  // Initialize the num state based on model.quantity and model.material
  useEffect(() => {
    if (model.material !== null) {
      /*  setNum('');
      } else {  */
      setNum(model.quantity || '')
    }
    if (model.material === null) {
      setNum(model.quantity || '')
    }
  }, [model.material, model.quantity])

  return (
    // <Input
    //   /*       classForInput="calcModelSelectors__quantity"
    //     name="quantity" */
    //   type="number"
    //   /*       pattern="[0-9]*" */
    //   placeholder={1} /* {pageData.fileData.quantity} */
    //   setValueOnChange={({ target }) => handleChange({ target })}
    //   value={num}
    // />
    <div>tutuaj input number!</div>
  )
}

export default Quantity
