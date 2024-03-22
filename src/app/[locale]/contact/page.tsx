import PageTitle from '@/components/common/PageTitle'
import Intro from '@/components/contact/Intro/Intro'
import { Form } from '@/components/forms/form'

const Contact = () => {
  return (
    <>
      <main>
        <PageTitle content="Formularz kontaktowy" />
        <p className="mx-auto mb-[60px] max-w-[1100px] text-balance px-[20px] text-center">
          Dziękujemy za zainteresowanie naszą firmą! Prosimy o wypełnienie
          poniższego formularza, aby skontaktować się z nami. Postaramy się
          odpowiedzieć jak najszybciej.
        </p>
        <div className="mx-auto my-0 grid max-w-[1300px] grid-cols-[1fr] laptop:grid-cols-[40%_60%]">
          <Intro />
          <Form />
        </div>
      </main>
    </>
  )
}

export default Contact
