'use client'
import { useRef, useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import arrowIcon from '../../../../public/icons/arrowUp.svg'
import { DataContext } from '../../../app/context/dataContext'
import styles from './DropInput.module.scss'
import useWindowDimensions from '@/utils/useWindowDimensions'

interface DropInputProps {
  callback?: (e: any) => void
  filesArray: File[]
  setFilesArray: (value: File[]) => void
}

const DropInput: React.FC<DropInputProps> = ({ filesArray, setFilesArray }) => {
  const contextData = useContext(DataContext)
  const [acceptConditionMet, setAcceptConditionMet] = useState(true)
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
    const allowedExtensions = new Set(['.dxf', '.stp'])
    const files = (e.target as HTMLInputElement).files

    let validFiles = true
    if (files) {
      for (const file of Array.from(files)) {
        const fileExtension = file.name.split('.').pop()?.toLocaleLowerCase()
        if (!allowedExtensions.has(`.${fileExtension}`)) {
          validFiles = false
          break
        }
      }

      setAcceptConditionMet(validFiles)
      if (validFiles) {
        setFilesArray(Array.from(files))
        contextData?.backendConnector({
          filesArray: Array.from(files),
          isReady: true,
        })
      }
    }
  }

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (filesArray.length === 0) {
      contextData?.backendConnector({ filesArray: [], isReady: false })
    }
  }, [filesArray, contextData])

  return (
    <div
      className={`${filesArray.length > 0 ? styles.addMoreFiles : styles.dropInput}`}
    >
      <div className={styles.formWrapper}>
        <form onSubmit={onFormSubmit}>
          <div ref={labelRef} className={styles.chooseFilesWrapper}>
            <label htmlFor="calcDropInput" className={styles.chooseFilesLabel}>
              <Image src={arrowIcon as string} alt="Upload file" />
              <span>
                {filesArray.length > 0
                  ? 'Dodaj pliki do wyceny'
                  : 'Wybierz pliki'}
              </span>
            </label>
            {isMobile || filesArray.length > 0 ? null : (
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
                ;(e.target as HTMLInputElement).value = ''
              }}
            />
          </div>
          {!acceptConditionMet && (
            <p className={styles.wrongFileExtension}>
              Nieprawidłowy rodzaj pliku
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default DropInput
