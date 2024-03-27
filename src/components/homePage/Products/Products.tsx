import Image from 'next/image'
import magazyn from '../../../../public/images/mainPageProducts/magazyn.png'
import waterjet from '../../../../public/images/mainPageProducts/waterjet.png'
import cela from '../../../../public/images/mainPageProducts/twin_one_axis.png'
import styles from './Products.module.scss'
import Button from '@/components/common/Button'
import { Link } from '@/navigation'

export default function Products() {
  const sectionCards = [
    {
      topHeader: 'Robotyzacja i\u00A0automatyzacja',
      topPhoto: cela,
      topParagraph: null,
      link: '/automation',
      topButton: 'Formularz',
      bottomHeader: 'Robotyzacja i automatyzacja',
      bottomText:
        'Jesteś ciekaw, co sprawia, że nasi klienci darzą nas takim zaufaniem? Przyjrzyj się rozwiązaniom, z których korzystamy.',
    },
    {
      topHeader: 'Park maszynowy',
      topPhoto: waterjet,
      topParagraph: null,
      link: '/product/waterjet',
      topButton: 'Formularz',
      bottomHeader: 'Park maszynowy',
      bottomText:
        'Sprawdź sprzęt, na którym pracujemy i dowiedz się, dlaczego jesteśmy najlepsi!',
    },
    {
      topHeader: 'Produkty',
      topPhoto: magazyn,
      topParagraph: null,
      link: '/product/vertical-warehouse',
      topButton: 'Formularz',
      bottomHeader: 'Rozwiązania',
      bottomText:
        'Poznaj ofertę produktową skierowaną do przedsiębiorstw każdej wielkości!',
    },
    {
      topHeader: 'Usługi',
      topPhoto: null,
      topParagraph: (
        <>
          Sprawdź nasze usługi.
          <br />
          Wypełnij formularz ofertowy na naszej stronie.
        </>
      ),
      link: '/contact',
      topButton: 'Formularz',
      bottomHeader: 'Usługi',
      bottomText:
        'Chcesz nawiązać współpracę? Skorzystaj z naszego kalkulatora albo wypełnij formularz kontaktowy.',
    },
  ]

  return (
    <section className={styles.products}>
      <h2></h2>
      <div className={styles.productsContainer}>
        {sectionCards.map((card) => (
          <div key={card.topHeader} className={styles.card}>
            <Link href={card.link}>
              <div className={styles.cardTop}>
                {card.topParagraph === null && card.topPhoto !== null ? (
                  <div>
                    <h3>{card.topHeader}</h3>
                    <Image src={card.topPhoto} alt="Section photo" />
                    {/* <Button disabled={false} content={card.topButton} size="XL" /> */}
                    <div data-role="flex-helper"></div>
                  </div>
                ) : (
                  <div className={styles.servicesCard}>
                    <div className={styles.headerWOImg}>
                      <h3>{card.topHeader}</h3>
                      {card.topParagraph && <p>{card.topParagraph}</p>}
                    </div>
                    {/* <Link href="/about" className="z-50 flex self-end"> */}
                    <Button
                      disabled={false}
                      content="Dowiedz się więcej"
                      size="XL"
                      primary
                    />
                    {/* </Link> */}
                  </div>
                )}
              </div>
            </Link>

            <div className={styles.cardBottom}>
              {/* <h3>{card.bottomHeader}</h3> */}
              <p>{card.bottomText}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
