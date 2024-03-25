import Image from 'next/image'
import PageTitle from '@/components/common/PageTitle'

export async function generateMetadata() {
  return {
    title:
      'Formularz ofertowy - zamów usługi gięcia, spawania, zgrzewania i więcej | BAL Industry',
    description:
      'Skorzystaj z naszego formularza i zamów usługi gięcia, spawania, zgrzewania, malowania, obróbki CNC i wielu innych. Wypełnij formularz i otrzymaj szybką wycenę!',
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const linkClass =
    'h-fit w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-1 border-transparent border-2 rounded-sm'

  return (
    <>
      <PageTitle content="Formularz ofertowy" />
      <p className="mx-auto -mt-8 w-11/12 max-w-[750px] text-center text-sm sm:-mt-4 sm:text-base">
        Drogi kliencie, <br /> prosimy o&nbsp;wypełnienie danych do zapytania
        w&nbsp;celu dopasowania oferty do twoich potrzeb. Pozostaw swoje dane
        kontaktowe. Odzwonimy do Ciebie w&nbsp;celu omówienia&nbsp;zapytania.
      </p>
      {children}
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
    </>
  )
}
