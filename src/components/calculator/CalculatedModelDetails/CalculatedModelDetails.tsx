import { DataContext } from '../../../app/context/dataContext'
import { SelectedContext } from '../../../app/context/selectedContext'
import { useState, useContext } from 'react'
/* import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import Button from '../../atoms/Button/Button' */

const displayLength = ({
  selectedModel,
  roundedTotalLength,
  isMM,
  pageData,
}) => {
  if (selectedModel.totalLength) {
    return isMM
      ? ` ${roundedTotalLength}${selectedModel.units}`
      : ` ${(roundedTotalLength * 0.001).toFixed(3)} m`
  } else {
    return pageData.fileData.noData
  }
}

const displayTotalArea = ({
  selectedModel,
  roundedTotalArea,
  isMM,
  pageData,
}) => {
  if (selectedModel.totalArea) {
    return (
      <div>
        {isMM
          ? `${roundedTotalArea}${selectedModel.units}`
          : `${(roundedTotalArea * 0.000_001).toFixed(3)} m`}
        {<sup>2</sup>}
      </div>
    )
  } else {
    return pageData.fileData.noData
  }
}

const displayMass = ({ mass, roundedMass, isMM, pageData }) => {
  if (mass) {
    return isMM ? `${roundedMass * 1000} g` : `${roundedMass} kg`
  } else {
    return pageData.fileData.noData
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

  return (
    <div className="calculatedModelDetails">
      {/*    <SectionTitle title={pageData.fileHeaders.singleItemData} /> */}
      <div className="calculatedModelDetails__controls">
        {/*   <Button
          type="button"
          name="set meters"
          isAnimated={false}
          isDefault={false}
          className={`calculatedModelDetails__button ${isMM ? '' : 'calculatedModelDetails__button--selected'}`}
          content={pageData.buttons.unitM}
          callback={() => setIsMM(false)}
        /> */}
        {/*   <Button
          type="button"
          name="set mm"
          isAnimated={false}
          isDefault={false}
          className={`calculatedModelDetails__button ${isMM ? 'calculatedModelDetails__button--selected' : ''}`}
          content={pageData.buttons.unitMM}
          callback={() => setIsMM(true)}
        /> */}
      </div>

      <div>
        <div>
          <div>pageData.fileData.cutLength:&nbsp;</div>
          <div className="calculatedModelDetails__value">
            {/*  {displayLength({
              selectedModel,
              roundedTotalLength,
              isMM,
              pageData,
            })} */}
          </div>
        </div>
        <div>
          <div>pageData.fileData.totalArea:&nbsp;</div>
          <div>
            {/*   {displayTotalArea({
              selectedModel,
              roundedTotalArea,
              isMM,
              pageData,
            })} */}
          </div>
        </div>
        <div>
          <div>pageData.fileData.mass:&nbsp;</div>
          <div>
            {/* {displayMass({ mass, roundedMass, isMM, pageData })} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatedModelDetails
