import styles from './calculator.module.scss'
import PageTitle from '@/components/common/PageTitle'
import DropdownInfo from '@/components/calculator/DropdownInfo/DropdownInfo'
import DropInput from '@/components/calculator/DropInput/DropInput'

export const Calculator = () => {
  return (
    <main className={styles.wrapper}>
      <PageTitle content="Wycena cięcia" />
      <div className={styles.headingText}>
        Chcesz poznać koszt naszych usług cięcia? Proszę wypełnić poniższy
        formularz i przesłać odpowiedni plik, abyśmy mogli dokładnie oszacować
        koszt oraz dostosować ofertę do Twoich potrzeb.
      </div>
      <div className={styles.main}>
        <p className={styles.acceptedFiles}>
          Akceptowalne rozszerzenia plików: .dxf oraz .stp (max. 8MB)
        </p>
        <div className={styles.mainColumns}>
          <DropdownInfo />
          <div className={styles.dropInput}>
            <DropInput />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Calculator
