/* eslint-disable import/no-unassigned-import */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { useRef, useCallback } from 'react'
import { FaArrowDown } from 'react-icons/fa6'
import photo from '../../../../public/products/twin_one_axis.png'
import styles from './RoboticStations.module.scss'
import useWindowDimensions from '@/hooks/useWindowDimensions'

export default function RoboticStations() {
  const windowDimensions = useWindowDimensions()
  const sliderRef = useRef(null)

  const slidesContent = [
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
    {
      img: photo,
      productName: 'Stanowisko Twin One-axis',
      productSecondLine: 'Robot Gofa 15000, UR5/UR12',
      lowestPrice: 'Najniższa cena z ostatnich 30 dni: 7,50 zł',
      actualPrice: '300$',
      lastPrice: '350$',
    },
  ]

  const swipePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const swipeNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <section className={styles.popularOffers}>
      <h2>Stanowiska zrobotyzowane</h2>
      <Swiper
        ref={sliderRef}
        pagination={false}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        className={styles.swiper}
        slidesPerView={Math.floor((windowDimensions.width - 100) / 320)}
        spaceBetween={40}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContainer}>
              <Image src={slide.img} alt="Product photo" />
              <h3>{slide.productName}</h3>
              <p className={styles.productSecondLine}>
                {slide.productSecondLine}
              </p>
              <div className={styles.actualPrice}>
                <p>{slide.actualPrice}</p>
                <p>{slide.lastPrice}</p>
              </div>
              <p className={styles.lowestPrice}>{slide.lowestPrice}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.buttonsContainer}>
        <div>
          <button onClick={() => swipePrev()} className={styles.swipeButton}>
            <FaArrowDown />
          </button>
        </div>
        <div>
          <button onClick={() => swipeNext()} className={styles.swipeButton}>
            <FaArrowDown />
          </button>
        </div>
      </div>
    </section>
  )
}
