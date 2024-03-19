import { PiBookOpen } from 'react-icons/pi'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Drill } from 'lucide-react'
import Image from 'next/image'
import catalog from '../../../../public/images/imgs/BAL_catalog.webp'
// import suszarnia from '../../../../public/imgs/suszarnia.svg'
import styles from './CatalogTools.module.scss'
import { Link } from '@/navigation'
import Button from '@/components/common/Button'

export default function CatalogTools() {
  return (
    <section className={styles.catalogTools}>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <div className={styles.iconContainer}>
            <PiBookOpen />
          </div>
          <h2>Przejrzyj nasz katalog</h2>
          <p>Dowiedz się więcej o naszych maszynach dzięki katalogowi.</p>
          <Button disabled={false} size="XL" content="Pobierz katalog" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={catalog} alt="Catalog photo" />
        </div>
        <Button disabled={false} size="XL" content="Pobierz katalog" />
      </div>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <div className={styles.iconContainer}>
            <Drill strokeWidth={1.25} className={styles.drillIcon} />
          </div>
          <div>
            <h2>Korzystamy z narzędzi:</h2>
            <ul>
              <li>Inventor Professional,</li>
              <li>Solid Work,</li>
              <li>VRED Autodesk.</li>
            </ul>
          </div>
          <Link href="./">Dowiedz się więcej</Link>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/images/imgs/suszarnia.svg"
            alt="Tool photo"
            className={styles.toolPhoto}
            width={400}
            height={200}
          />
        </div>
      </div>
    </section>
  )
}
