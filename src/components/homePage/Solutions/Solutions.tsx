import styles from './Solutions.module.scss'
import Button from '@/components/common/button/Button'

export default function Solutions() {
  return (
    <section className={styles.solutions}>
      <h2>Odkryj nowoczesne rozwiązania BAL Industry dla przemysłu</h2>
      <div>
        <p>
          Dostarczamy spersonalizowane, branżowe rozwiązania automatyzacyjne.
          Sukcesywanie realizujemy udane projekty i budujemy globalne
          partnerstwa. Wspólnie podniesiemy efektywność i automatyzację Twojej
          firmy.
        </p>
        <Button disabled={false} size="XL" content="Dowiedz się więcej" />
      </div>
    </section>
  )
}
