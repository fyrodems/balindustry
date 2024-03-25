import { DataContext } from '../../../../app/context/dataContext'
import { SelectedContext } from '../../../../app/context/selectedContext'
import { useState, useContext, useEffect } from 'react'
import materials from '../../materials.json'
import { Label } from '@/components/ui/label'
import styles from './MaterialSelector.module.scss'

const Material = () => {
  const contextData = useContext(DataContext)
  const selectedModel = useContext(SelectedContext)

  if (!contextData?.data || !selectedModel) {
    throw new Error('coś pooszłoo nie tak')
  }

  const { material } = contextData.data[selectedModel.index]

  const list = materials.map((el) => el.name)

  const defaultThickness = (material) => {
    const defaultMaterial = materials.find((el) => el.name === material)
    if (defaultMaterial) {
      return defaultMaterial.defaultThickness
    }
    return null
  }

  const handleMaterialChange = (selectedMaterial) => {
    const defaultThick =
      materials.find((el) => el.name === selectedMaterial)?.defaultThickness ||
      null
    contextData?.updateData({
      index: selectedModel.index,
      key: 'material',
      value: selectedMaterial,
    })
    contextData?.updateData({
      index: selectedModel.index,
      key: 'thickness',
      value: defaultThick,
    })
  }

  const handleChange = (e) => {
    const selectedMaterial = e.target.value
    handleMaterialChange(selectedMaterial)
  }

  useEffect(() => {
    const defaultThick = defaultThickness(material)
    if (material === null) {
      setInputValue('')
    } else {
      setInputValue(material)
      contextData?.updateData({
        index: selectedModel.index,
        key: 'thickness',
        value: defaultThick,
      })
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
    <div className={styles.materialSelector}>
      <Label className={styles.label} htmlFor="materialsList">
        Materiał
      </Label>
      <select
        id="materialsList"
        className={styles.selector}
        options={list}
        value={inputValue}
        onChange={handleChange}
      >
        <option value="">Wybierz z listy materiał</option>
        {materialsList}
      </select>
    </div>
  )
}

export default Material
