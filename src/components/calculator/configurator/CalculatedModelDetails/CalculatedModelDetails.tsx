import { useContext } from 'react'
import { DataContext } from '../../../../app/context/dataContext'
import { SelectedContext } from '../../../../app/context/selectedContext'
import { type FileData } from '../../../../../server/interfaces'
import styles from './CalculatedModelDetails.module.scss'

const displayLength = ({
  selectedModel,
  roundedTotalLength,
  isMM,
}: {
  selectedModel: FileData
  roundedTotalLength: number
  isMM: boolean
}) => {
  if (selectedModel.totalLength) {
    return isMM
      ? ` ${roundedTotalLength}${selectedModel.units}`
      : ` ${(roundedTotalLength * 0.001).toFixed(3)} m`
  }

  return 'Brak wartości'
}

const displayTotalArea = ({
  selectedModel,
  roundedTotalArea,
  isMM,
}: {
  selectedModel: FileData
  roundedTotalArea: number
  isMM: boolean
}) => {
  if (selectedModel.totalArea) {
    return (
      <span>
        {isMM
          ? `${roundedTotalArea}${selectedModel.units}`
          : `${(roundedTotalArea * 0.000_001).toFixed(3)} m`}
        {<sup>2</sup>}
      </span>
    )
  }

  return 'Brak wartości'
}

const displayMass = ({
  mass,
  roundedMass,
  isMM,
}: {
  mass: number
  roundedMass: number
  isMM: boolean
}) => {
  if (mass) {
    return isMM ? `${roundedMass * 1000} g` : `${roundedMass} kg`
  }

  return 'Brak wartości'
}

const CalculatedModelDetails = () => {
  const contextData = useContext(DataContext)
  const selectedContext = useContext(SelectedContext)

  let mass = 0

  let selectedModel: FileData | null = null
  if (contextData?.data && selectedContext) {
    selectedModel = contextData.data[selectedContext.index]

    // obliczanie masy
    const thickness = (selectedModel.thickness ?? 0) / 1000
    const volume = ((selectedModel.totalArea ?? 0) / 1_000_000) * thickness
    mass = volume * ((selectedModel.density ?? 0) * 1000)
  }

  const round = (value: number) => Math.round(value * 1000) / 1000
  const roundedTotalLength = round(Number(selectedModel?.totalLength ?? 0))
  const roundedTotalArea = round(selectedModel?.totalArea ?? 0)
  const roundedMass = round(mass)

  return (
    <div className={styles.calculatedModelDetailsWrapper}>
      <h4 className={styles.header}>Wartości dla pojedynczej sztuki</h4>
      <div className={styles.calculatedModelDetails}>
        <div className={styles.detailsContainer}>
          <p>Dane w milimetrach:</p>
          <div>
            <span className={styles.dataLabel}>
              Długość cięcia laserem:&nbsp;
            </span>
            {selectedModel
              ? displayLength({
                  selectedModel,
                  roundedTotalLength,
                  isMM: true,
                })
              : 'Brak wartości'}
          </div>
          <div>
            <span className={styles.dataLabel}>Pole:&nbsp;</span>
            {selectedModel
              ? displayTotalArea({
                  selectedModel,
                  roundedTotalArea,
                  isMM: true,
                })
              : 'Brak wartości'}
          </div>
          <div>
            <span className={styles.dataLabel}>Masa:&nbsp;</span>
            {displayMass({ mass, roundedMass, isMM: true })}
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <p>Dane w metrach:</p>
          <div>
            <span className={styles.dataLabel}>
              Długość cięcia laserem:&nbsp;
            </span>
            {selectedModel
              ? displayLength({
                  selectedModel,
                  roundedTotalLength,
                  isMM: false,
                })
              : 'Brak wartości'}
          </div>
          <div>
            <span className={styles.dataLabel}>Pole:&nbsp;</span>
            {selectedModel
              ? displayTotalArea({
                  selectedModel,
                  roundedTotalArea,
                  isMM: false,
                })
              : 'Brak wartości'}
          </div>
          <div>
            <span className={styles.dataLabel}>Masa:&nbsp;</span>
            {displayMass({ mass, roundedMass, isMM: false })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatedModelDetails
