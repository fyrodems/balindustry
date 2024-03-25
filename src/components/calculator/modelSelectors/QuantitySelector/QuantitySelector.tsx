import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../../../app/context/dataContext'
import { SelectedContext } from '../../../../app/context/selectedContext'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import styles from './QuantitySelector.module.scss'

const Quantity = () => {
  const [num, setNum] = useState(1)
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
      setNum(model.quantity || 1)
    }
    if (model.material === null) {
      setNum(model.quantity || 1)
    }
  }, [model.material, model.quantity])

  return (
    <div className={styles.quantitySelector}>
      <Label className={styles.label} htmlFor="quantity">
        Liczba sztuk
      </Label>
      <Input
        name="quantity"
        type="number"
        placeholder={'Podaj docelową liczbę sztuk'}
        onChange={({ target }) => handleChange({ target })}
        value={num}
        className={styles.input}
      />
    </div>
  )
}

export default Quantity
