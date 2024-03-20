'use client'

import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import styles from './Carousel.module.scss'

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1 = useRef(null)
  const slider2 = useRef(null)

  useEffect(() => {
    if (slider1.current && slider2.current) {
      setNav1(slider1.current)
      setNav2(slider2.current)
    }
  }, [])

  const settings = {
    arrows: true,
    focusOnSelect: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    asNavFor: nav1,
    ref: slider2,
    className: 'productCarousel',
  }
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Slider arrows={false} asNavFor={nav2} ref={slider1}>
          {images.map((image, index) => (
            <div key={index}>
              <div className={styles.image__container}>
                <Image
                  className={styles.image}
                  src={image}
                  alt=""
                  width={464}
                  height={245}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.carousel__secondary}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className={styles.image__container__secondary}>
                <Image
                  className={styles.image__secondary}
                  src={image}
                  width={190}
                  height={92}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Carousel
