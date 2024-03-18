import PageTitle from '@/components/common/PageTitle'
import Intro from '@/components/contact/Intro/Intro'
import styles from './page.module.scss'

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
        <div className={styles.formWrapper}>
          <Intro />
          <div></div>
        </div>
      </main>
    </>
  )
}

export default Contact
