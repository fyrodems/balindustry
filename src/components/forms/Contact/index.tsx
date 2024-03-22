import { ContactProps } from '@/components/forms/types'
import { ContactInfo } from '@/components/forms/Contact/contactInfo'

export const Contact = ({ person, mail, phone }: ContactProps) => {
  return (
    <div className="mx-auto flex w-11/12 max-w-[750px] flex-col gap-4 border-y border-solid border-grafit py-8 text-center">
      <h2 className="text-xl font-bold sm:text-2xl">Skontaktuj się z nami</h2>
      <p className="text-sm sm:text-base">
        {' '}
        Prześlij nam e-mail lub rozpocznij&nbsp;rozmowę.
      </p>
      <div className="my-4 flex flex-col">
        <h3 className="text-base font-semibold sm:text-xl">
          Skontaktuj się z naszym przedstawicielem
        </h3>
        <p className="text-sm sm:text-base">
          <span className="text-base font-semibold sm:text-xl">{person}</span>{' '}
          Key&nbsp;Account&nbsp;Manager.
        </p>
      </div>
      <div className="mx-auto my-4 flex w-full max-w-[250px] flex-col justify-center gap-12 text-left">
        <ContactInfo
          iconSrc="/images/contact/mailBlack.svg"
          alt="mail"
          contactType="Email"
          contact={mail}
        />
        <ContactInfo
          iconSrc="/images/contact/phoneBlack.svg"
          alt="phone"
          contactType="Telefon"
          contact={phone}
        />
      </div>
    </div>
  )
}
