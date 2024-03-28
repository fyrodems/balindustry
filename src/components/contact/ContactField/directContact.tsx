import Image from 'next/image'

interface DirectContactProps {
  icon: string
  title: string
  content: string
}

export const DirectContact = ({ icon, title, content }: DirectContactProps) => (
  <div className="mx-auto flex w-[280px] items-center gap-2.5 text-sm  sm:text-base">
    <Image
      src={icon}
      alt={title}
      width={25}
      height={25}
      className="h-auto w-[25px] sm:w-[25px]"
    />
    <div className="flex flex-col">
      <span className="font-bold">{title}</span>
      <a href={title === 'Email' ? `mailto:${content}` : `tel:${content}`}>
        {content}
      </a>
    </div>
  </div>
)
