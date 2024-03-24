import { Link } from '@/navigation'

const DetailsNavigation = () => {
  return (
    <div className="laptop:flex mx-[20px] mr-0 hidden justify-around bg-zinc-800 p-4 px-10 text-white">
      <Link href="#characteristics">Główne cechy</Link>
      <div className="h-[20px] w-[1px] bg-white"></div>
      <Link href="#specification">Parametry</Link>
      <div className="h-[20px] w-[1px] bg-white"></div>
      <Link href="#carousel">Podobne produkty</Link>
    </div>
  )
}

export default DetailsNavigation
