import Image from 'next/image'

interface AdvantageProps {
  icon: string
  title: string
  content: string
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, content }) => {
  return (
    <div className="flex w-[300px] flex-col gap-[16px] text-white">
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

const CompanyAdvantages: React.FC = () => {
  return (
    <div className="place-center grid bg-stone-800 px-[30px] py-[80px]">
      <div className="mx-auto inline-flex w-full max-w-[1300px] flex-wrap items-center justify-around gap-24">
        <Advantage
          icon={'/images/advantages/advantage5.svg'}
          title="Nowoczesne zastosowania"
          content="Dzięki ciągłemu poszukiwaniu nowych technologii i metod pracy, jesteśmy w stanie tworzyć unikalne i zaawansowane rozwiązania, które przynoszą korzyści naszym klientom."
        />
        <Advantage
          icon={'/images/advantages/advantage1.svg'}
          title="Kreatywność"
          content="Nasza firma kładzie ogromny nacisk na innowacyjność i kreatywność. Dążymy do ciągłego rozwijania nowatorskich rozwiązań, które przynoszą wartość naszym partnerom."
        />
        <Advantage
          icon={'/images/advantages/advantage4.svg'}
          title="Jakość"
          content="Jakość jest fundamentem naszej działalności. Wszystkie nasze produkty i usługi są starannie opracowane i dokładnie sprawdzone, aby zapewnić naszym klientom najwyższy poziom satysfakcji."
        />
        <Advantage
          icon={'/images/advantages/advantage2.svg'}
          title="Praca zespołowa"
          content="Wspólna praca umożliwia nam osiąganie wyjątkowych rezultatów oraz sprawną realizację celów projektowych."
        />
        <Advantage
          icon={'/images/advantages/advantage3.svg'}
          title="Pomysłowość"
          content="Dążymy do stworzenia inspirującego środowiska, które sprzyja rozwijaniu oryginalnych koncepcji i innowacyjnych rozwiązań."
        />
        <div className="opacity-0">
          <Advantage icon={''} title="" content="" />
        </div>
      </div>
    </div>
  )
}

export default CompanyAdvantages
