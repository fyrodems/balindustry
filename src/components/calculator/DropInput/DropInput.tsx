'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import arrowIcon from '../../../../public/icons/arrowUp.svg'
import styles from './DropInput.module.scss'
import useWindowDimensions from '@/hooks/useWindowDimensions'
/*import { DataContext } from '../../../context/dataContext';
import uploadFileIcon from '../../../assets/icons/uploadFile.svg';
import FilesList from '../../atoms/FilesList/FilesList';
import Button from '../../atoms/Button/Button';
import x from '../../../assets/icons/x-square.svg';
import { isMobile } from '../../../utils/utils'; */

function DropInput({ filesArray, setFilesArray, pageData, data }) {
  /*   const { backendConnector } = useContext(DataContext)
  const [acceptConditionMet, setAcceptConditionMet] = useState(true)
  const { inputLabelMobile, inputLabelDesktop, inputLabelExtension } = pageData */

  const [isMobile, setIsMobile] = useState(false)
  const windowDimensions = useWindowDimensions()

  useEffect(() => {
    if (windowDimensions.width !== undefined && windowDimensions.width < 993) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowDimensions.width])

  const labelRef = useRef(null)

  const handleInputChange = (e) => {
    /*     e.preventDefault() */
    // Check if the accept condition is met
    /*     const allowedExtensions = ['.dxf', '.stp']
    const files = e.target.files
    let validFiles = true */
    /*     for (let i = 0; i < files.length; i++) {
      const fileExtension = files[i].name.split('.').pop().toLowerCase()
      if (!allowedExtensions.includes(`.${fileExtension}`)) {
        validFiles = false
        break
      }
    } */
    /*   setAcceptConditionMet(validFiles) */
    /*   if (validFiles) {
      const files = e.target.files
      setFilesArray(Array.from(files))
      backendConnector({ filesArray: Array.from(files), isReady: true })
    } */
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
  }
  /* 
  const onDragOver = () => labelRef.current.classList.add('dragover')
  const onDragLeave = () => labelRef.current.classList.remove('dragover')
  const onDrop = () => labelRef.current.classList.remove('dragover') */

  /*   useEffect(() => {
    if (filesArray.length < 1) {
      backendConnector({ filesArray: [], isReady: false })
    }
  }, [filesArray, backendConnector]) */

  return (
    <div className={styles.dropInput}>
      {/*  
    //   to niżej wchodzi jak mamy pliki i drugi widok
        {data !== null && data !== undefined && data !== [] ? (
        <FilesList
          pageData={pageData}
          filesArray={filesArray}
          setFilesArray={setFilesArray}
        />
      ) : null} */}
      <div className={styles.formWrapper}>
        <form onSubmit={onFormSubmit}>
          <div
            ref={labelRef}
            /*    onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop} */
            className={styles.chooseFilesWrapper}
          >
            <label htmlFor="calcDropInput" className={styles.chooseFilesLabel}>
              <Image src={arrowIcon} alt="Upload file" />
              <span>Wybierz pliki</span>
            </label>
            {isMobile ? null : (
              <div>
                <span>lub</span>
                <span>przeciągnij i upuść je tutaj. Max. 8MB</span>
              </div>
            )}
            <input
              id="calcDropInput"
              name="Plik"
              type="file"
              accept=".dxf,.stp"
              className={styles.invisibleInput}
              onChange={handleInputChange}
              multiple={true}
              required={true}
              /*  onClick={(e) => (e.target.value = null)} */
            />
          </div>
          {/*       {!acceptConditionMet && (
            <p style={{ color: 'var(--error)' }}>{pageData.validationError}</p>
          )} */}
        </form>

        <button
          /*    isAnimated={false} */
          /*  isDefault={false}
          isInvisible */
          className={'calcDropInput__clearListButton'}
          /*          content={<img src={x} alt="Delete file" />} */
          /*  callback={() => setFilesArray([])} */
        ></button>
      </div>
    </div>
  )
}

export default DropInput
