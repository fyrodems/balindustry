import styles from './calculator.module.scss'
import PageTitle from '@/components/common/PageTitle'
import DropdownInfo from '@/components/calculator/DropdownInfo/DropdownInfo'

export const Calculator = () => {
  return (
    <main className={styles.wrapper}>
      <PageTitle content="Wycena cięcia" />
      <div className={styles.headingText}>
        Chcesz poznać koszt naszych usług cięcia? Proszę wypełnić poniższy
        formularz i przesłać odpowiedni plik, abyśmy mogli dokładnie oszacować
        koszt oraz dostosować ofertę do Twoich potrzeb.
      </div>
      <div>
        <div></div>
      </div>
      <div className={styles.main}>
        <DropdownInfo />
        <div className={styles.dropInput}></div>
      </div>
    </main>
  )
}

export default Calculator
