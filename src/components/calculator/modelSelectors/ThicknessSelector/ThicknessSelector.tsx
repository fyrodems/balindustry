import { useState, useContext, useEffect, useRef } from 'react'
import { DataContext } from '../../../../app/context/dataContext'
import { SelectedContext } from '../../../../app/context/selectedContext'
import materials from '../../materials.json'
import { Label } from '@/components/ui/label'
import styles from './ThicknessSelector.module.scss'

const Thickness = () => {
  const [thicknessArr, setThicknessArr] = useState([])
  const [density, setDensity] = useState()
  const { data, updateData } = useContext(DataContext)
  const { index } = useContext(SelectedContext)
  const { material, thickness } = data[index]
  const selectRef = useRef(null)
  const language = localStorage.getItem('BAL_language')

  // Load all thicknesses for the selected material
  useEffect(() => {
    materials.forEach((el) => {
      if (el['name' + language] === material) {
        setThicknessArr(el.thickness)
        setDensity(el.density)
      }
    })
  }, [material, language])

  const handleThicknessSelect = (e) => {
    e.stopPropagation()
    console.log('sisiisis')
    console.log(density)
    updateData({ index: index, key: 'thickness', value: e.target.value })
    updateData({ index: index, key: 'density', value: density })
  }

  useEffect(() => {
    selectRef.current.value = thickness || ''
  }, [thickness])

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
              className={thicknessElement === +thickness ? 'active' : ''}
            >
              {thicknessElement}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Thickness
