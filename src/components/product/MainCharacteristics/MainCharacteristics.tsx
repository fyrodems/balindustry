import { type MainCharacteristicsProps } from '@/app/[locale]/product/[id]/types'

const MainCharacteristics: React.FC<MainCharacteristicsProps> = ({ data }) => {
  /* !!! dodać akordeon główny */
  return (
    <div id="characteristics">
      {data.map((characteristic, i) => (
        <div key={i} className="laptop:my-[100px] mx-[20px] my-[60px]">
          <h2 className="text-xl font-bold text-black">
            {characteristic.title}
          </h2>
          <p className="my-[30px]">{characteristic.content}</p>
          {characteristic.image && (
            <img src={characteristic.image} alt={characteristic.title} />
          )}
        </div>
      ))}
    </div>
  )
}

export default MainCharacteristics
