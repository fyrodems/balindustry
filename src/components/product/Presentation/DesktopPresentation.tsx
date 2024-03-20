import Carousel from '../Carousel/Carousel'
import { type ProductDataProps } from '@/app/[locale]/product/[id]/types'

const Parameter: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => {
  return (
    <div className="flex flex-col justify-center">
      <span className="font-bold">{name}</span>
      <span>{value}</span>
    </div>
  )
}

const DesktopPresentation: React.FC<ProductDataProps> = ({ data }) => {
  const { basic_data, images, parameters } = data

  return (
    <div className="mb-14 grid grid-cols-[50%_50%]">
      <Carousel images={images} />
      <div className="rounded border border-zinc-200 p-4">
        <div className="mx-auto w-11/12">
          <h2 className="text-[25px] font-medium">{basic_data.name}</h2>
          <h3 className="text-sm font-extralight">
            {basic_data.additional_name}
          </h3>
          <p className="mx-auto my-10 mt-4 max-w-[800px] text-balance">
            {basic_data.description}
          </p>
          <div className="mt-10 grid grid-cols-[1fr_1fr] gap-8">
            {parameters.map((parameter, i) => {
              return (
                <Parameter
                  key={i}
                  name={parameter.name}
                  value={parameter.value}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopPresentation
