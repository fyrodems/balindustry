'use client'
import { useRef, useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import arrowIcon from '../../../../public/icons/arrowUp.svg'
import { DataContext } from '../../../app/context/dataContext'
import styles from './DropInput.module.scss'
import useWindowDimensions from '@/hooks/useWindowDimensions'

interface DropInputProps {
  callback?: (e: any) => void
  filesArray: File[]
  setFilesArray: (value: File[]) => void
  pageData: string
  data: string
}

const DropInput: React.FC<DropInputProps> = ({
  filesArray = [],
  setFilesArray,
  pageData,
  data,
}) => {
  const { backendConnector } = useContext(DataContext)
  const [acceptConditionMet, setAcceptConditionMet] = useState(true)
  /*  const { inputLabelMobile, inputLabelDesktop, inputLabelExtension } = pageData */

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

  const handleInputChange = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // Check if the accept condition is met
    const allowedExtensions = ['.dxf', '.stp']
    const files = e.target.files
    let validFiles = true
    for (let i = 0; i < files.length; i++) {
      const fileExtension = files[i].name.split('.').pop().toLowerCase()
      if (!allowedExtensions.includes(`.${fileExtension}`)) {
        validFiles = false
        break
      }
    }
    setAcceptConditionMet(validFiles)
    if (validFiles) {
      const files = e.target.files
      setFilesArray(Array.from(files))
      backendConnector({ filesArray: Array.from(files), isReady: true })
    }
  }

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (filesArray.length === 0) {
      backendConnector({ filesArray: [], isReady: false })
    }
  }, [filesArray, backendConnector])

  return (
    <div className={styles.dropInput}>
      {/*   //   to niżej wchodzi jak mamy pliki i drugi widok */}
      {/*  {data !== null && data !== undefined && data !== [] ? (
        <FilesList
          pageData={pageData}
          filesArray={filesArray}
          setFilesArray={setFilesArray}
        />
      ) : null} */}
      <div className={styles.formWrapper}>
        <form onSubmit={onFormSubmit}>
          <div ref={labelRef} className={styles.chooseFilesWrapper}>
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
              onClick={(e) => {
                e.target.value = null
              }}
            />
          </div>
          {!acceptConditionMet && <p>{pageData.validationError}</p>}
        </form>

        <button
          className={'calcDropInput__clearListButton'}
          /*          content={<img src={x} alt="Delete file" />} */
          /*  callback={() => setFilesArray([])} */
        ></button>
      </div>
    </div>
  )
}

export default DropInput
