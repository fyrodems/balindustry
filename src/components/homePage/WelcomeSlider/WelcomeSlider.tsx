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

export default function WelcomeSlider() {
  const slidesContent = [
    {
      header: 'Robotyzacja i automatyzacja',
      text: `Wprowadzenie robotów przemysłowych lub systemów automatyzacji do
    wykonywania konkretnych operacji lub zadań w ramach procesu
    produkcyjnego. Może to obejmować montaż, spawanie, pakowanie,
    sortowanie i wiele innych czynności.`,
      buttonText: 'Dowiedz się więcej',
    },
    {
      header: 'Robotyzacja i automatyzacja',
      text: `Wprowadzenie robotów przemysłowych lub systemów automatyzacji do
    wykonywania konkretnych operacji lub zadań w ramach procesu
    produkcyjnego. Może to obejmować montaż, spawanie, pakowanie,
    sortowanie i wiele innych czynności.`,
      buttonText: 'Dowiedz się więcej',
    },
    {
      header: 'Robotyzacja i automatyzacja',
      text: `Wprowadzenie robotów przemysłowych lub systemów automatyzacji do
    wykonywania konkretnych operacji lub zadań w ramach procesu
    produkcyjnego. Może to obejmować montaż, spawanie, pakowanie,
    sortowanie i wiele innych czynności.`,
      buttonText: 'Dowiedz się więcej',
    },
    {
      header: 'Robotyzacja i automatyzacja',
      text: `Wprowadzenie robotów przemysłowych lub systemów automatyzacji do
    wykonywania konkretnych operacji lub zadań w ramach procesu
    produkcyjnego. Może to obejmować montaż, spawanie, pakowanie,
    sortowanie i wiele innych czynności.`,
      buttonText: 'Dowiedz się więcej',
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
              <p>{slide.text}</p>
              <Button
                className="cursor-pointer select-none items-center rounded-sm bg-main-orange px-5 py-1.5 text-sm transition-all hover:bg-orange-400"
                content={slide.buttonText}
                disabled={false}
                primary={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
