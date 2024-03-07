import Image from 'next/image'
import magazyn from '../../../../public/products/magazyn.png'
import waterjet from '../../../../public/products/waterjet.png'
import cela from '../../../../public/products/twin_one_axis.png'
import styles from './Products.module.scss'
import Button from '@/components/button/Button'

export default function Products() {
  const sectionCards = [
    {
      topHeader: 'Robotyzacja i automatyzacja',
      topPhoto: cela,
      topParagraph: null,
      topButton: 'Formularz',
      bottomHeader: 'Robotyzacja i automatyzacja',
      bottomText:
        'Poznaj ofertę produktową skierowaną do przedsiębiorstw każdej wielkości',
    },
    {
      topHeader: 'Park maszynowy',
      topPhoto: waterjet,
      topParagraph: null,
      topButton: 'Formularz',
      bottomHeader: 'Park maszynowy',
      bottomText:
        'Sprawdź sprzęt, na którym pracujemy i dowiedz się, dlaczego jesteśmy najlepsi',
    },
    {
      topHeader: 'Rozwiązania',
      topPhoto: magazyn,
      topParagraph: null,
      topButton: 'Formularz',
      bottomHeader: 'Rozwiązania',
      bottomText:
        'Jesteś ciekaw, co sprawia, że nasi klienci darzą nas takim zaufaniem? Przyjrzyj się rozwiązaniom, z których korzystamy',
    },
    {
      topHeader: 'Usługi',
      topPhoto: null,
      topParagraph:
        'Sprawdź nasze usługi. Wypełnij formularz ofertowy na naszej stronie.',
      topButton: 'Formularz',
      bottomHeader: 'Usługi',
      bottomText:
        'Chcesz nawiązać współpracę? Skorzystaj z naszego kalkulatora albo wypełnij formularz kontaktowy.',
    },
  ]

  return (
    <section className={styles.products}>
      <h2>Nasze produkty</h2>
      <div className={styles.productsContainer}>
        {sectionCards.map((card) => (
          <div key={card.topHeader} className={styles.card}>
            <div className={styles.cardTop}>
              {card.topParagraph === null && card.topPhoto !== null ? (
                <div>
                  <h3>{card.topHeader}</h3>
                  <Image src={card.topPhoto} alt="Section photo" />
                  <Button disabled={false} content={card.topButton} size="XL" />
                </div>
              ) : (
                <div className={styles.servicesCard}>
                  <div className={styles.headerWOImg}>
                    <h3>{card.topHeader}</h3>
                    {card.topParagraph ?? <p>{card.topParagraph}</p>}
                  </div>
                  <Button
                    disabled={false}
                    content="Dowiedz się więcej"
                    size="XL"
                  />
                </div>
              )}
            </div>
            <div className={styles.cardBottom}>
              <h3>{card.bottomHeader}</h3>
              <p>{card.bottomText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
