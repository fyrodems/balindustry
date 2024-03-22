import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import { useState, useContext, useEffect, useRef } from 'react'
import materials from '../materials.json'
/* import InputField from '../../atoms/InputField/InputField' */

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
        <option value="">tu byl pageData.filedata.material:</option>
        {materialsList}
      </select>
    </div>
  )
}

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
        <option value="">pageData.fileData.thicknessMM:</option>
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
    <div>input field</div>
    /*  <InputField
      classForInput="calcModelSelectors__quantity"
      name="quantity"
      type="number"
      pattern="[0-9]*"
      placeholder={pageData.fileData.quantity}
      setValueOnChange={({ target }) => handleChange({ target })}
      value={num}
    /> */
  )
}

function CalcModelSelectors({ pageData }) {
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
      tu material, thickness itd
      {/*   <Material
        pageData={pageData}
        onSelectMaterialChange={handleMaterialChange}
      />
      <Thickness pageData={pageData} />
      <Quantity pageData={pageData} /> */}
    </div>
  )
}

export default CalcModelSelectors
