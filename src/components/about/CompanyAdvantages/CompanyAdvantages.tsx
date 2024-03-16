import Image from 'next/image'

const Advantage = ({ icon, title, content }) => {
  return (
    <div>
      <Image src={icon} alt={title} width={70} height={70} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

const CompanyAdvantages = () => {
  return (
    <div className="inline-flex w-full items-center justify-start gap-2.5 bg-stone-800 p-[150px]">
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
  )
}

export default CompanyAdvantages
