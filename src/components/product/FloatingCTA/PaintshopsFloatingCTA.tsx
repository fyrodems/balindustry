import { type FloatingCTAProps } from '@/app/[locale]/product/types'
import Button from '@/components/common/Button'
import { Link } from '@/navigation'

const PaintshopsFloatingCTA: React.FC<FloatingCTAProps> = ({ data }) => {
  const { title, button, form } = data

  return (
    <div
      id="floatingCTA"
      className="fixed right-[38px] top-[150px] rounded border border-zinc-200 p-4 2xl:right-auto 2xl:ml-[40px] 2xl:p-6"
    >
      <div className="text-center text-lg font-bold">{title}</div>

      <div className="my-4 flex max-w-[350px] whitespace-normal text-center">
        <div>
          <div className="my-2 font-bold">Lakiernia 1</div>
          <div>500x1400x2000mm</div>
          <div>Maks. masa detalu: 60kg/mb</div>
        </div>
        <div>
          <div className="my-2 font-bold">Lakiernia 2</div>
          <div>800x1500x800mm</div>
          <div>Maks. masa detalu: 50kg/mb</div>
        </div>
      </div>
      <Link href={form}>
        <Button content={button} className="m-auto" />
      </Link>
    </div>
  )
}

export default PaintshopsFloatingCTA
