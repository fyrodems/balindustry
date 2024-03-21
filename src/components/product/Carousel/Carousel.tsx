'use client'

import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  const slider1 = useRef(null)
  const slider2 = useRef(null)
  console.log(images)

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
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    asNavFor: nav1,
    ref: slider2,
    className: 'productCarousel',
  }
  return (
    <div className="mx-auto mb-[30px] mt-2.5 flex h-full w-[90%] flex-col gap-4">
      <div className="h-auto w-full max-w-[715px]">
        <Slider arrows={false} asNavFor={nav2} ref={slider1}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="mx-2.5 aspect-[1.8/1] h-full max-w-[715px]">
                <Image
                  className="aspect-[1.8/1] h-full w-full max-w-[715px] rounded-md"
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
      <div className="h-auto w-full max-w-[350px]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="mx-2.5 aspect-[1.8/1] h-full rounded-md">
                <Image
                  className="aspect-[1.8/1] h-full w-full rounded-md"
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
