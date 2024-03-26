/* eslint-disable import/no-unassigned-import */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
// import bg from './backgrounds/welcomeSlideBG.svg'
import styles from './WelcomeSlider.module.scss'
import './swiperStyles.scss'
import Button from '@/components/common/Button'
import { Link } from '@/navigation'

export default function WelcomeSlider() {
  const slidesContent = [
    {
      header: 'Robotyzacja i automatyzacja',
      text: `Wprowadzenie robotów przemysłowych lub systemów automatyzacji do
    wykonywania konkretnych operacji lub zadań w ramach procesu
    produkcyjnego. Może to obejmować montaż, spawanie, pakowanie,
    sortowanie i wiele innych czynności.`,
      buttonText: 'Dowiedz się więcej',
      link: '/automation',
    },
    {
      header: 'Park maszynowy',
      text: `Dobrze wyposażony park maszynowy umożliwia efektywną produkcję, zwiększa elastyczność działania i pozwala na realizację różnorodnych projektów z wykorzystaniem odpowiednich narzędzi i technologii.`,
      buttonText: 'Dowiedz się więcej',
      link: '/product/waterjet',
    },
    {
      header: 'Produkty',
      text: `Oferujemy maszyny do obróbki powierzchni płaskich. Projektujemy i dostarczamy systemy do magazynowania blach, takie jak pakietów arkuszy blach oraz rozwiązania w zakresie magazynowania elementów wraz z paletami transportowymi. Oferujemy też piece wysokotemperaturowe wykorzystywane w wielu procesach technologicznych.`,
      buttonText: 'Dowiedz się więcej',
      link: '/product/vertical-warehouse',
    },
    {
      header: 'Usługi',
      text: `W oparciu o wiedzę i doświadczenie naszych specjalistów, dostosowujemy swoje usługi do indywidualnych potrzeb i wymagań klientów, zapewniając im profesjonalną obsługę i satysfakcję z otrzymanych rezultatów.`,
      buttonText: 'Dowiedz się więcej',
      link: '/calculator',
    },
  ]

  const slidesPagination = {
    clickable: true,
    renderBullet(index: any, className: string) {
      return (
        '<div class="' +
        className +
        ' ' +
        styles.paginationBullet +
        '"><span></span></div>'
      )
    },
  }

  return (
    <div className={styles.welcomeSlider}>
      <Image
        src="/images/backgrounds/welcomeSlideBG2.svg"
        alt="Background"
        width={5000}
        height={0}
      />
      <Swiper
        pagination={slidesPagination}
        modules={[Pagination]}
        loop={true}
        className={styles.welcomeSwiper}
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideContainer}>
              <h1>{slide.header}</h1>
              <p className="my-4 leading-relaxed">{slide.text}</p>
              <Link href={slide.link}>
                <Button
                  className="cursor-pointer select-none items-center rounded-sm bg-main-orange px-5 py-1.5 text-sm transition-all hover:bg-orange-400"
                  content={slide.buttonText}
                  disabled={false}
                  primary={false}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
