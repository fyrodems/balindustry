import { PiBookOpen } from 'react-icons/pi'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Drill } from 'lucide-react'
import Image from 'next/image'
import catalog from '../../../../public/imgs/BAL_catalog.webp'
import suszarnia from '../../../../public/imgs/suszarnia.png'
import styles from './CatalogTools.module.scss'
import { Link } from '@/navigation'

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
        </div>
        <div className={styles.imgContainer}>
          <Image src={catalog} alt="Catalog photo" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <div className={styles.iconContainer}>
            <Drill strokeWidth={1.25} className={styles.drillIcon} />
          </div>
          <h2>Korzystamy z narzędzi</h2>
          <ul>
            <li>Inventor Professional</li>
            <li>Solid Work</li>
            <li>VRED Autodesk...</li>
          </ul>
          <Link href="./">Dowiedz się więcej</Link>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={suszarnia}
            alt="Tool photo"
            className={styles.toolPhoto}
          />
        </div>
      </div>
    </section>
  )
}
