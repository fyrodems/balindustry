import { DataContext } from '../../../../app/context/dataContext'
import { SelectedContext } from '../../../../app/context/selectedContext'
import { useState, useContext, useEffect, useRef } from 'react'
import materials from '../../materials.json'

const Material = ({ onSelectMaterialChange }) => {
  const { updateData, data } = useContext(DataContext)
  const { index } = useContext(SelectedContext)
  const { material } = data[index]

  const list = materials.map((el) => el.name)

  const defaultThickness = (material) => {
    const defaultMaterial = materials.find((el) => el.name === material)
    if (defaultMaterial) {
      return defaultMaterial.defaultThickness
    }
    return null
  }

  const handleChange = (e) => {
    const selectedMaterial = e.target.value
    onSelectMaterialChange(selectedMaterial)
  }

  useEffect(() => {
    const defaultThick = defaultThickness(material)
    if (material === null) {
      setInputValue('')
    } else {
      setInputValue(material)
      updateData({ index: index, key: 'thickness', value: defaultThick })
    }
    // eslint-disable-next-line
  }, [material])

  const [inputValue, setInputValue] = useState('')

  const materialsList = list.map((material) => {
    return (
      <option value={material} key={material}>
        {material}
      </option>
    )
  })
  return (
    <div>
      <select
        id="materialsList"
        options={list}
        value={inputValue}
        onChange={handleChange}
      >
        <option value="">Materiał:</option>
        {materialsList}
      </select>
    </div>
  )
}

export default Material
