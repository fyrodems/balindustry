import PageTitle from '@/components/common/PageTitle'
import styles from './page.module.scss'

const Automation = () => {
  return (
    <>
      <main>
        <div className={styles.pageTitle__wrapper}>
          <PageTitle content="Automatyzacja maszyn i urządzeń" />
        </div>
        <p className="mx-auto mb-[100px] max-w-[1100px] px-[20px] text-center">
          Modernizacja maszyn i urządzeń pod kątem automatyzacji to proces
          wprowadzania nowoczesnych technologii i rozwiązań do istniejących
          maszyn i urządzeń w celu zwiększenia ich poziomu automatyzacji i
          efektywności. Polega na modyfikacji, ulepszaniu lub zamianie części,
          komponentów lub systemów w istniejących urządzeniach, aby umożliwić im
          pełne lub częściowe samodzielne funkcjonowanie.
        </p>
      </main>
    </>
  )
}

export default Automation
