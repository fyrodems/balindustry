/* eslint-disable unicorn/switch-case-braces */
import Button from '@/components/common/Button'

const getErrorMessage = (type, errorModal) => {
  switch (type) {
    case 'contact':
      return (
        <>
          {errorModal.contact1} <br /> {errorModal.contact2}
        </>
      )
    case 'thanks':
      return <>{errorModal.thanks}</>
    default:
      return (
        <>
          {errorModal.configuration1} <br /> {errorModal.configuration2}
        </>
      )
  }
}

const CalculatorModalBox = ({
  openModal,
  setOpenModal,
  setFilesArray,
  type,
}) => {
  const errorModal = {
    contact1: 'Nie udało się wysłać zapytania.',
    contact2: 'Proszę uzupełnić dane kontaktowe!',
  }

  const closeModal = () => {
    if (type === 'thanks') {
      setFilesArray([])
    }
    setOpenModal(false)
  }

  return (
    <>
      {openModal && <div onClick={closeModal}></div>}
      <div>
        <div>
          <Button content="❌" onClick={closeModal} />
          <h4>{getErrorMessage(type, errorModal)}</h4>
          <Button content="OK" onClick={closeModal} />
        </div>
      </div>
    </>
  )
}

export default CalculatorModalBox
