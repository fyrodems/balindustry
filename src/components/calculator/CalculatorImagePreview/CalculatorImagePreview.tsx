import { useContext } from 'react'
import Image from 'next/image'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import styles from './CalculatorImagePreview.module.scss'

const CalculatorImagePreview = () => {
  const contextData = useContext(DataContext)
  const selectedContext = useContext(SelectedContext)
  const allModels = contextData?.data
  let url = null
  let selectedModel = null
  if (allModels) {
    selectedModel = allModels[selectedContext?.index ?? 0]

    url = 'https://www.balindustry.com/api/' + selectedModel.path
  }

  return (
    <div className={styles.imgWrapper}>
      {url && selectedModel ? (
        <Image src={url} alt={selectedModel.fileName} fill={true} />
      ) : (
        <div>Niestety, podgląd pliku nie jest możliwy</div>
      )}
    </div>
  )
}

export default CalculatorImagePreview
