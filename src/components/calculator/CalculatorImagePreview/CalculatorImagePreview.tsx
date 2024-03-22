import { useContext } from 'react'
import Image from 'next/image'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import styles from './CalculatorImagePreview.module.scss'

const CalculatorImagePreview = () => {
  const { data } = useContext(DataContext)
  const { index } = useContext(SelectedContext)
  const selectedModel = data[index]

  const url = 'https://www.balindustry.com/api/' + selectedModel.path

  return (
    <div className={styles.imgWrapper}>
      <Image src={url} alt={selectedModel.fileName} fill={true} />
    </div>
  )
}

export default CalculatorImagePreview
