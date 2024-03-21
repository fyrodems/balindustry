import Image from 'next/image'
import Carousel from '../Carousel/Carousel'
import Button from '@/components/common/Button'
import { type ProductDataProps } from '@/app/[locale]/product/[id]/types'
import { Link } from '@/navigation'

const Parameter: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center ">
      <span className="font-bold">{name}</span>
      <span>{value}</span>
    </div>
  )
}

const MobilePresentation: React.FC<ProductDataProps> = ({ data }) => {
  const { basic_data, floating_CTA, images, parameters } = data

  return (
    <>
      <div className="mx-auto w-11/12">
        <h2 className="text-[25px] font-medium">{basic_data.name}</h2>
        <h3 className="text-sm font-extralight">
          {basic_data.additional_name}
        </h3>
      </div>
      {images.length === 1 ? (
        <Image
          className="my-[30px] mr-[40px] aspect-[1.8/1] h-fit w-full max-w-[715px] rounded-md"
          src={images[0]}
          alt=""
          width={464}
          height={245}
        />
      ) : (
        <Carousel images={images} />
      )}

      <p className="mx-auto my-10 mt-4 w-11/12 max-w-[800px]">
        {basic_data.description}
      </p>
      <div className="my-10 grid grid-cols-[1fr_1fr] gap-8">
        {parameters.map((parameter, i) => {
          return (
            <Parameter key={i} name={parameter.name} value={parameter.value} />
          )
        })}
      </div>
      <Link className="mx-[auto] block max-w-[320px]" href={floating_CTA.form}>
        <Button className="mx-2 w-full" content={floating_CTA.button} />
      </Link>
      {/* !!! do poprawki */}
      {floating_CTA.ar !== '' && (
        <Link href={floating_CTA.form}>
          <Button className="w-full" content={floating_CTA.button} />
        </Link>
      )}
    </>
  )
}

export default MobilePresentation
