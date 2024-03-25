import Image from 'next/image'

interface DirectContactProps {
  icon: string
  title: string
  content: string
}

const DirectContact: React.FC<DirectContactProps> = ({
  icon,
  title,
  content,
}) => {
  return (
    <div className="my-4 flex w-[280px] items-center justify-between gap-2.5 rounded-full bg-orange-500 px-6 py-5 text-sm sm:w-[340px] sm:px-10 sm:text-base">
      <Image
        src={icon}
        alt={title}
        width={40}
        height={30}
        className="h-auto w-[35px] sm:w-[40px]"
      />
      <div className="flex flex-col text-white">
        <span className="min-w-[192px] font-bold">{title}</span>
        <a href={title === 'Email' ? `mailto:${content}` : `tel:${content}`}>
          {content}
        </a>
      </div>
    </div>
  )
}

const Intro: React.FC = () => {
  return (
    <div>
      <div>
        <h3 className="text-balance text-2xl font-bold text-gray-950 sm:text-3xl">
          Skontaktuj się z nami
        </h3>
        <span className="my-4 block max-w-[335px] text-balance text-sm sm:text-base">
          Prześlij nam e-mail lub rozpocznij rozmowę, wypełniając poniższy
          formularz.
        </span>
      </div>

      <div className="flex flex-col">
        <h3 className="mb-4 mt-8 text-balance text-xl font-bold text-gray-950 sm:text-2xl">
          Skontaktuj się z nami bezpośrednio!
        </h3>
        <DirectContact
          icon="/images/contact/mail.svg"
          title={'Email'}
          content={'kontakt@balindustry.com'}
        />
        <DirectContact
          icon="/images/contact/phone.svg"
          title={'Telefon'}
          content={'+48510790214'}
        />
      </div>
    </div>
  )
}

export default Intro
