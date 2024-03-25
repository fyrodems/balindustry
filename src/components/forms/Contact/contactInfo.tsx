import Image from 'next/image'
import { ContactInfoProps } from '@/components/forms/types'

export const ContactInfo = ({
  iconSrc,
  alt,
  contactType,
  contact,
}: ContactInfoProps) => (
  <div className="grid grid-cols-[auto_1fr] items-center gap-6">
    <Image
      className="h-auto w-[25px] sm:h-auto sm:w-[30px]"
      src={iconSrc}
      alt={alt}
      width={30}
      height={30}
    />
    <div className="flex w-full flex-col text-sm sm:text-base">
      <p className="font-semibold">{contactType}</p>
      <a
        className="w-fit rounded-sm border-2 border-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-1"
        href={contactType === 'Email' ? `mailto:${contact}` : `tel:${contact}`}
      >
        {contact}
      </a>
    </div>
  </div>
)
