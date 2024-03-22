import { useContext } from 'react'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import Image from 'next/image'

const CalculatorImagePreview = () => {
  const { data } = useContext(DataContext)
  const { index } = useContext(SelectedContext)
  const selectedModel = data[index]

  let url = 'https://www.balindustry.com/api/' + selectedModel.path

  return (
    <div>
      <img src={url} alt={selectedModel.fileName} />
    </div>
  )
}

export default CalculatorImagePreview
