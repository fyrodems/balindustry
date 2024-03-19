import Image from 'next/image'

interface AdvantageProps {
  icon: string
  title: string
  content: string
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, content }) => {
  return (
    <div className="flex w-[330px] flex-col gap-[16px] ">
      <Image src={icon} alt={title} width={70} height={70} />
      <h3 className="text-balance text-2xl font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

const Advantages: React.FC = () => {
  return (
    <div className="place-center grid px-[30px] pb-[70px] pt-[70px]">
      <div className="mx-auto inline-flex w-full max-w-[1300px] flex-wrap items-center justify-start gap-24">
        <Advantage
          icon={'/automationAdvantages/advantage1.svg'}
          title={'Dodawanie sensorów oraz aktuatorów'}
          content={
            'Instalacja dodatkowych czujników, takich jak czujniki optyczne, czujniki siły, czujniki pozycji, które umożliwiają maszynom zbieranie danych dotyczących otoczenia, stanu pracy lub produktu.'
          }
        />
        <Advantage
          icon={'/automationAdvantages/advantage2.svg'}
          title={'Automatyzacja sterowania'}
          content={
            'Zastosowanie nowoczesnych systemów sterowania i automatyki, takich jak programowalne sterowniki logiczne (PLC) lub systemy SCADA (Supervisory Control and Data Acquisition), które umożliwiają programowanie, monitorowanie i kontrolowanie pracy maszyn i urządzeń.'
          }
        />
        <Advantage
          icon={'/automationAdvantages/advantage3.svg'}
          title={'Integracja z systemami informatycznymi'}
          content={
            'Połączenie maszyn i urządzeń z systemami informatycznymi, takimi jak systemy zarządzania produkcją (MES) lub systemy planowania zasobów przedsiębiorstwa (ERP), umożliwiające wymianę danych i integrację procesów produkcyjnych.'
          }
        />
        <Advantage
          icon={'/automationAdvantages/advantage4.svg'}
          title={'Optymalizacja energetyczna'}
          content={
            'Zastosowanie rozwiązań mających na celu redukcję zużycia energii, takich jak efektywne silniki, regulacja prędkości, wykorzystanie odnawialnych źródeł energii czy odzyskiwanie energii kinetycznej.'
          }
        />
        <Advantage
          icon={'/automationAdvantages/advantage5.svg'}
          title={'Robotyzacja i automatyzacja procesów'}
          content={
            'Wprowadzenie robotów przemysłowych lub systemów automatyzacji do wykonywania konkretnych operacji lub zadań w ramach procesu produkcyjnego. Może to obejmować montaż, spawanie, pakowanie, sortowanie i wiele innych czynności.'
          }
        />
      </div>
    </div>
  )
}

export default Advantages
