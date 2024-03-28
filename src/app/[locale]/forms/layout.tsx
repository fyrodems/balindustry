import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import PageTitle from '@/components/common/PageTitle'
import { Form } from '@/components/forms/form'

export async function generateMetadata() {
  const t = await getTranslations('metaData.forms')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Layout() {
  const linkClass =
    'h-fit w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-1 border-transparent border-2 rounded-sm'

  return (
    <main>
      <PageTitle content="Formularz ofertowy" />
      <p className="mx-auto -mt-8 w-11/12 max-w-[750px] text-center text-sm sm:-mt-4 sm:text-base">
        Drogi kliencie, <br /> prosimy o&nbsp;wypełnienie danych do zapytania
        w&nbsp;celu dopasowania oferty do twoich potrzeb. Pozostaw swoje dane
        kontaktowe. Odzwonimy do Ciebie w&nbsp;celu omówienia&nbsp;zapytania.
      </p>
      <Form />
      <p className="my-4 text-center text-lg font-semibold">Obserwuj nas:</p>
      <div className="mx-auto mb-24 flex justify-center gap-3 sm:mb-32">
        <a className={linkClass} href="">
          <Image
            src="/images/contact/facebook.svg"
            className="my-auto"
            alt="facebook"
            width={35}
            height={35}
          />
        </a>
        <a className={linkClass} href="">
          <Image
            src="/images/contact/linkedin.svg"
            alt="linkedin"
            width={35}
            height={35}
          />
        </a>
      </div>
    </main>
  )
}
