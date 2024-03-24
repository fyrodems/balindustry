import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { type CrossSellCarouselProps } from '@/app/[locale]/product/[id]/types'
import { Link } from '@/navigation'
import { cn } from '@/libs/utils'

const Product: React.FC<{
  name: string
  image: string
  link: string
}> = ({ name, image, link }) => {
  return (
    <div className="flex h-full max-h-[330px] flex-col justify-between">
      <div className="h-[200px]">
        <Image
          src={image}
          alt={name}
          width={464}
          height={245}
          className="h-full w-full"
        />
      </div>
      <span className="my-4 inline-block min-h-[50px] w-full text-center font-bold">
        {name}
      </span>
    </div>
  )
}

const CrossSellCarousel: React.FC<CrossSellCarouselProps> = ({ data }) => {
  const settings = {
    // arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 439,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div id="carousel" className="mx-[20px]">
      <h2 className="mt-[60px] border-0 border-b-[2px] border-solid border-stone-300 pb-4 text-[26px] font-bold text-stone-800">
        Inni klienci sprawdzali również
      </h2>

      <div
        className={cn(
          'my-20',
          'xs:[&_.slick-slide]:m-2',
          '[&_.slick-list]:h-[350px]'
        )}
      >
        <Slider {...settings}>
          {data.map((elem, i) => (
            <div key={i} className="border">
              <Product name={elem.name} image={elem.image} link={elem.link} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CrossSellCarousel
