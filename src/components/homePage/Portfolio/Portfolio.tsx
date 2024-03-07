import styles from './Portfolio.module.scss'
import Button from '@/components/button/Button'

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <h2>
        Portfolio produktów BAL Industry w zakresie robotyki i automatyzacji.
      </h2>
      <Button disabled={false} size="XL" content="Pobierz katalog" />
    </section>
  )
}
