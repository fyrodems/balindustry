import Image from 'next/image'
import styles from './AboutBalIndustry.module.scss'

const AboutBalIndustry = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div>
        <h3>Dlaczego Balindustry?</h3>
        <p>
          Specjalizujemy się w dostosowywaniu spersonalizowanych rozwiązań
          automatyzacyjnych do potrzeb różnych branż. Nasza firma odnosi
          sukcesywnie kolejne triumfy w realizacji projektów oraz budowaniu
          globalnych partnerstw. Razem, dążymy do podniesienia efektywności oraz
          automatyzacji w Twojej firmie.
        </p>
        </div>
        
        <Image
          src="/imgs/suszarnia.svg"
          alt="suszarnia"
          width={650}
          height={390}
        />
      </div>
      <div className={styles.aboutDetails}>
        <div className={styles.aboutDetails__1}>
          <h3>Nasza oferta</h3>
          <p>
            Oferujemy maszyny do obróbki powierzchni płaskich. Projektujemy i
            dostarczamy systemy do magazynowania blach, takie jak pakietów
            arkuszy blach oraz rozwiązania w zakresie magazynowania elementów
            wraz z paletami transportowymi.
          </p>
        </div>
        <div className={styles.aboutDetails__2}>
          <h3>Co robimy?</h3>
          <p>
            Obecnie dzięki własnym doświadczeniom poznaliśmy doskonale procesy,
            problemy i potrzeby zakładów produkcyjnych o podobnym profilu
            produkcji i chcemy dzielić się tą wiedzą z innymi. Możemy pomóc Wam
            zwiększyć wydajność oraz jakość produkcji.
          </p>
        </div>
        <div className={styles.aboutDetails__3}>
          <h3>Nasze maszyny</h3>
          <p>
            Zaczęliśmy inwestycję w robotyzację i automatyzację, w wyniku czego
            powstał w naszej firmie dział robotyki, który rozwijał dla własnych
            potrzeb aplikacje zrobotyzowane.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutBalIndustry
