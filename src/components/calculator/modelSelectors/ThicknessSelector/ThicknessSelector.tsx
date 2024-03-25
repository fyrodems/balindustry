import { useState, useEffect, useRef } from 'react'
import { type FileContextType } from '../../../../app/context/dataContext'
import { type SelectedFileContextType } from '../../../../app/context/selectedContext'
import materials from '../../materials.json'
import styles from './ThicknessSelector.module.scss'
import { Label } from '@/components/ui/label'

interface ThicknessProps {
  contextData: FileContextType
  selectedModel: SelectedFileContextType
}

const Thickness: React.FC<ThicknessProps> = ({
  contextData,
  selectedModel,
}) => {
  const [thicknessArr, setThicknessArr] = useState<number[]>([])
  const [density, setDensity] = useState<number>()

  let material: string | null = null
  let thickness: number | null = null
  if (contextData.data) {
    material = contextData.data[selectedModel.index].material
    thickness = contextData.data[selectedModel.index].thickness
  }

  const selectRef = useRef(null)

  // Load all thicknesses for the selected material
  useEffect(() => {
    for (const el of materials) {
      if (el.name === material) {
        setThicknessArr(el.thickness)
        setDensity(el.density)
      }
    }
  }, [material])

  const handleThicknessSelect = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    contextData.updateData({
      index: selectedModel.index,
      key: 'thickness',
      value: (e.target as HTMLOptionElement).value,
    })
    contextData.updateData({
      index: selectedModel.index,
      key: 'density',
      value: density ?? null,
    })
  }

  /*   useEffect(() => {
    selectRef.current.value = thickness ?? ''
  }, [thickness]) */

  return (
    <div className={styles.thicknessSelector}>
      <Label className={styles.label} htmlFor="thicknessList">
        Grubość [mm]
      </Label>
      <select
        ref={selectRef}
        onChange={handleThicknessSelect}
        id="thicknessList"
        className={styles.selector}
      >
        <option value="">Podaj grubość materiału do cięcia</option>
        {material &&
          thicknessArr.map((thicknessElement, index) => (
            <option
              key={index}
              value={thicknessElement}
              className={thicknessElement === Number(thickness) ? 'active' : ''}
            >
              {thicknessElement}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Thickness
