import Image from 'next/image'

const DirectContact = ({ icon, title, content }) => {
  return (
    <div className="flex inline-flex h-[90px] w-[340px] items-center justify-between gap-2.5 rounded-[180px] bg-orange-500 px-10 py-5 my-4">
      <Image src={icon} alt={title} width={40} height={30} />
      <div className="flex flex-col text-white">
        <span className="min-w-[192px] font-bold">{title}</span>
        <span>{content}</span>
      </div>
    </div>
  )
}

const Intro = () => {
  return (
    <div className='p-[30px]'>
      <div>
        <h3 className="text-[36px] font-bold text-gray-950">
          Skontaktuj się z nami
        </h3>
        <span className='block max-w-[335px] my-4'>
          Prześlij nam e-mail lub rozpocznij rozmowę, wypełniając poniższy
          formularz.
        </span>
      </div>

      <div className="flex flex-col">
        <h3 className="text-[28px] font-bold text-gray-950 mt-8">
          Skontaktuj się z nami bezpośrednio!
        </h3>
        <DirectContact
          icon="/contact/mail.svg"
          title={'Email'}
          content={'kontakt@balindustry.com'}
        />
        <DirectContact
          icon="/contact/phone.svg"
          title={'Telefon'}
          content={'123 123 123'}
        />
      </div>
    </div>
  )
}

export default Intro
