import { useState, useContext, useEffect, useRef } from 'react'
import { DataContext } from '../../../../app/context/dataContext'
import { SelectedContext } from '../../../../app/context/selectedContext'
import materials from '../../materials.json'

const Thickness = ({ pageData }) => {
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
    updateData({ index: index, key: 'thickness', value: e.target.value })
    updateData({ index: index, key: 'density', value: density })
  }

  useEffect(() => {
    selectRef.current.value = thickness || ''
  }, [thickness])

  return (
    <div>
      <select ref={selectRef} onChange={handleThicknessSelect}>
        <option value="">Grubość [mm]:</option>
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
