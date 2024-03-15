import Statistics from '@/components/about/Statistics'
import PageTitle from '@/components/common/PageTitle'
import Partners from '@/components/homePage/Partners/Partners'

const About = () => {
  return (
    <main>
      <PageTitle content="O firmie" />
      <p className="mx-auto max-w-[1100px] px-[20px] text-center">
        Nasza firma istnieje na rynku od 1998 roku. Szybko rozwijaliśmy się jako
        zakład produkujący wiele produktów o różnym przeznaczeniu. Wraz z
        wzrostem zapotrzebowania na rynku na oferowane przez naszą firmę
        produkty inwestowaliśmy w rozwój parku maszynowego, celem zwiększenia
        wydajności oraz jakości naszych produktów.
      </p>
      <Partners />
      <Statistics />
    </main>
  )
}

export default About
