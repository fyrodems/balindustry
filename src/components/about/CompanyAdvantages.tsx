import Image from 'next/image'

interface AdvantageProps {
  icon: string
  title: string
  content: string
}

const Advantage: React.FC<AdvantageProps> = ({ icon, title, content }) => {
  return (
    <div className="flex w-[330px] flex-col gap-[16px] text-white">
      <Image src={icon} alt={title} width={70} height={70} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{content}</p>
    </div>
  )
}

const CompanyAdvantages: React.FC = () => {
  return (
    <div className="place-center grid bg-stone-800 px-[30px] py-[150px]">
      <div className="mx-auto inline-flex w-full max-w-[1300px] flex-wrap items-center justify-start gap-24">
        <Advantage
          icon={'/advantages/advantage1.svg'}
          title="Kreatywność"
          content="High-end digital experiences. Created  the heart Manhattan, we are a should human team driving force."
        />
        <Advantage
          icon={'/advantages/advantage2.svg'}
          title="Praca zespołowa"
          content="High-end digital experiences. Created  the heart Manhattan, we are a should human team driving force."
        />
        <Advantage
          icon={'/advantages/advantage3.svg'}
          title="Pomysłowość"
          content="High-end digital experiences. Created  the heart Manhattan, we are a should human team driving force."
        />
        <Advantage
          icon={'/advantages/advantage4.svg'}
          title="Jakość"
          content="High-end digital experiences. Created  the heart Manhattan, we are a should human team driving force."
        />
        <Advantage
          icon={'/advantages/advantage5.svg'}
          title="Nowoczesne zastosowania"
          content="High-end digital experiences. Created  the heart Manhattan, we are a should human team driving force."
        />
      </div>
    </div>
  )
}

export default CompanyAdvantages
