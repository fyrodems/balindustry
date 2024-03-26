import styles from './Solutions.module.scss'
import { Link } from '@/navigation'
import Button from '@/components/common/Button'

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
        <Link href="/about">
          <Button disabled={false} size="XL" content="Dowiedz się więcej" />
        </Link>
      </div>
    </section>
  )
}
