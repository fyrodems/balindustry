/* eslint-disable import/no-unassigned-import */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import abbLogo from '../../../../public/images/partners/ABB_logo.svg'
import esabLogo from '../../../../public/images/partners/Esab_logo.svg'
import froniusLogo from '../../../../public/images/partners/Fronius_logo.svg'
import siegmundLogo from '../../../../public/images/partners/Logo_siegmund.png'
import siemensLogo from '../../../../public/images/partners/Siemens_logo.svg'
import universalRobotsLogo from '../../../../public/images/partners/Universal_robots_logo.svg'
import styles from './Partners.module.scss'
import useWindowDimensions from '@/utils/useWindowDimensions'

export default function Partners() {
  const windowDimensions = useWindowDimensions()

  const partners = [
    { name: 'ESAB', logo: esabLogo },
    { name: 'ABB', logo: abbLogo },
    { name: 'Fronius', logo: froniusLogo },
    { name: 'Siegmund', logo: siegmundLogo },
    { name: 'Siemens', logo: siemensLogo },
    { name: 'Universal Robots', logo: universalRobotsLogo },
  ]

  return (
    <section className={styles.partners}>
      <h2 className={styles.header}>NASI PARTNERZY</h2>

      <Swiper
        pagination={false}
        modules={[Autoplay]}
        loop={true}
        slidesPerView={Math.floor(
          windowDimensions.width === undefined
            ? 1
            : windowDimensions.width / 220
        )}
        spaceBetween={50}
        navigation={false}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={2000}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Image key={partner.name} src={partner.logo} alt={partner.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
