'use client'
import { useContext, useState } from 'react'
import { DataContext } from '../../context/dataContext'
import styles from './calculator.module.scss'
import PageTitle from '@/components/common/PageTitle'
import DropdownInfo from '@/components/calculator/DropdownInfo/DropdownInfo'
import DropInput from '@/components/calculator/DropInput/DropInput'
import CalculatorConfigurator from '@/components/calculator/CalculatorConfigurator/CalculatorConfigurator'
import SelectedContextProvider from '@/app/context/selectedContext'

export const Calculator = () => {
  let { data } = useContext(DataContext)
  const [filesArray, setFilesArray] = useState<File[]>([])
  console.log(data)
  console.log(filesArray)
  return (
    <main className={styles.wrapper}>
      <PageTitle content="Wycena cięcia" />
      <div className={styles.headingText}>
        Chcesz poznać koszt naszych usług cięcia? Proszę wypełnić poniższy
        formularz i przesłać odpowiedni plik, abyśmy mogli dokładnie oszacować
        koszt oraz dostosować ofertę do Twoich potrzeb.
      </div>
      <div className={styles.mainContent}>
        <SelectedContextProvider>
          {data !== null && filesArray.length > 0 ? (
            <CalculatorConfigurator
              filesArray={filesArray}
              setFilesArray={setFilesArray}
            />
          ) : (
            <>
              <p className={styles.acceptedFiles}>
                Akceptowalne rozszerzenia plików: .dxf oraz .stp (max. 8MB)
              </p>
              <div className={styles.mainColumns}>
                <DropdownInfo />
                <div className={styles.dropInput}>
                  <DropInput
                    filesArray={filesArray}
                    setFilesArray={setFilesArray}
                    data={data}
                  />
                </div>
              </div>
            </>
          )}
        </SelectedContextProvider>
      </div>
    </main>
  )
}

export default Calculator
