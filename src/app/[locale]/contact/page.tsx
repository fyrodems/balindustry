import { getTranslations } from 'next-intl/server'
import PageTitle from '@/components/common/PageTitle'
import Intro from '@/components/contact/intro'
import { Form } from '@/components/forms/form'

export async function generateMetadata() {
  const t = await getTranslations('metaData.contact')

  return {
    title: t('title'),
    description: t('description'),
  }
}

const Contact = () => (
  <main>
    <PageTitle content="Formularz kontaktowy" />
    <p className="mx-auto -mt-8 mb-[60px] w-11/12 max-w-[1100px] text-balance text-center text-sm sm:-mt-4 sm:text-base">
      Dziękujemy za zainteresowanie naszą firmą! Prosimy o&nbsp;wypełnienie
      poniższego formularza, aby skontaktować się z&nbsp;nami. Postaramy się
      odpowiedzieć jak&nbsp;najszybciej.
    </p>
    <div className="mx-auto my-0 grid w-11/12 max-w-[1300px] grid-cols-[1fr] laptop:grid-cols-[40%_60%]">
      <Intro />
      <Form className="mt-0 laptop:-mt-5" />
    </div>
  </main>
)

export default Contact
