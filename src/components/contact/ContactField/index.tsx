import { ReactElement } from 'react'
import { DirectContact } from '@/components/contact/ContactField/directContact'

interface ContactField {
  title: ReactElement
  phoneNumber: string
  emailAddress: string
}

export const ContactField = ({
  title,
  phoneNumber,
  emailAddress,
}: ContactField) => (
  <>
    {title}
    <div className="my-8 flex flex-col gap-6 sm:flex-row laptop:flex-col">
      <DirectContact
        icon="/images/contact/phoneOrange.svg"
        title={'Telefon'}
        content={phoneNumber}
      />
      <DirectContact
        icon="/images/contact/mailOrange.svg"
        title={'Email'}
        content={emailAddress}
      />
    </div>
  </>
)
