import { useState, useEffect } from 'react'
import { type FileContextType } from '../../../../app/context/dataContext'
import { type SelectedFileContextType } from '../../../../app/context/selectedContext'
import { type FileData } from '../../../../../server/interfaces'
import styles from './QuantitySelector.module.scss'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface QuantityProps {
  contextData: FileContextType
  selectedModel: SelectedFileContextType
}

const Quantity: React.FC<QuantityProps> = ({ contextData, selectedModel }) => {
  const [num, setNum] = useState<number>(1)

  /*   const model = contextData.data[selectedModel.index]
   */

  let model: FileData | null = null

  if (contextData.data) {
    model = contextData.data[selectedModel.index]
  }

  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    const regex = /^(?!0)[\d\b]+$/
    if (regex.test(target.value)) {
      setNum(Number(target.value))
      contextData.updateData({
        index: selectedModel.index,
        key: 'quantity',
        value: target.value,
      })
    } else {
      setNum(1)
      contextData.updateData({
        index: selectedModel.index,
        key: 'quantity',
        value: 0,
      })
    }
  }

  // Initialize the num state based on model.quantity and model.material
  useEffect(() => {
    if (model) {
      if (model.material !== null) {
        setNum(model.quantity ?? 1)
      }

      if (model.material === null) {
        setNum(model.quantity ?? 1)
      }
    }
  }, [model?.material, model?.quantity])

  return (
    <div className={styles.quantitySelector}>
      <Label className={styles.label} htmlFor="quantity">
        Liczba sztuk
      </Label>
      <Input
        name="quantity"
        type="number"
        placeholder={'Podaj docelową liczbę sztuk'}
        onChange={({ target }) => {
          handleChange({ target })
        }}
        value={num}
        className={styles.input}
      />
    </div>
  )
}

export default Quantity
