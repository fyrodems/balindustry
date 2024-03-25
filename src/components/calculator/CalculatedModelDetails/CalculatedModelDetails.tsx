import { useState, useContext } from 'react'
import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import styles from './CalculatedModelDetails.module.scss'

const displayLength = ({ selectedModel, roundedTotalLength, isMM }) => {
  if (selectedModel.totalLength) {
    return isMM
      ? ` ${roundedTotalLength}${selectedModel.units}`
      : ` ${(roundedTotalLength * 0.001).toFixed(3)} m`
  } else {
    return 'Brak wartości'
  }
}

const displayTotalArea = ({ selectedModel, roundedTotalArea, isMM }) => {
  if (selectedModel.totalArea) {
    return (
      <span>
        {isMM
          ? `${roundedTotalArea}${selectedModel.units}`
          : `${(roundedTotalArea * 0.000_001).toFixed(3)} m`}
        {<sup>2</sup>}
      </span>
    )
  } else {
    return 'Brak wartości'
  }
}

const displayMass = ({ mass, roundedMass, isMM }) => {
  if (mass) {
    return isMM ? `${roundedMass * 1000} g` : `${roundedMass} kg`
  } else {
    return 'Brak wartości'
  }
}

const CalculatedModelDetails = ({ pageData }) => {
  const { data } = useContext(DataContext)
  const { index } = useContext(SelectedContext)
  const selectedModel = data[index]

  const [isMM, setIsMM] = useState(true)

  // zamiana na metry
  const thickness = selectedModel.thickness / 1000
  const volume = (selectedModel.totalArea / 1000000) * thickness
  const mass = volume * (selectedModel.density * 1000)

  const round = (value) => Math.round(value * 1000) / 1000
  const roundedTotalLength = round(selectedModel.totalLength)
  const roundedTotalArea = round(selectedModel.totalArea)
  const roundedMass = round(mass)

  console.log(selectedModel)
  return (
    <div>
      <h4 className={styles.header}>Wartości dla pojedynczej sztuki</h4>
      <div className={styles.calculatedModelDetails}>
        <div className={styles.detailsContainer}>
          <p>Dane w milimetrach:</p>
          <div>
            <span className={styles.dataLabel}>
              Długość cięcia laserem:&nbsp;
            </span>
            {displayLength({
              selectedModel,
              roundedTotalLength,
              isMM,
            })}
          </div>
          <div>
            <span className={styles.dataLabel}>Pole:&nbsp;</span>
            {displayTotalArea({
              selectedModel,
              roundedTotalArea,
              isMM,
            })}
          </div>
          <div>
            <span className={styles.dataLabel}>Masa:&nbsp;</span>
            {displayMass({ mass, roundedMass, isMM })}
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <p>Dane w metrach:</p>
          <div>
            <span className={styles.dataLabel}>
              Długość cięcia laserem:&nbsp;
            </span>
            {displayLength({
              selectedModel,
              roundedTotalLength,
              isMM: false,
            })}
          </div>
          <div>
            <span className={styles.dataLabel}>Pole:&nbsp;</span>
            {displayTotalArea({
              selectedModel,
              roundedTotalArea,
              isMM: false,
            })}
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
