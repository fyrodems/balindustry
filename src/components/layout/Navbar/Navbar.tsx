import Image from 'next/image'
import { MainCategory } from './MainCategory'
import { Link } from '@/navigation'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'

const Navbar = () => {
  return (
    <div className="@apply top-0; bg-navbar sticky z-[2] flex min-h-[70px] w-full items-center justify-between px-[38px] py-0 text-white transition-all ">
      <Image
        src={'/logos/BALIndustryLogoWhite.svg'}
        alt={'logo'}
        width={60}
        height={32}
      />
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={''}>O firmie</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Robotyzacja i automatyzacja" />

          <MenubarContent>
            <MenubarItem>
              <Image
                src={'/navbarProducts/single.svg'}
                alt={'single'}
                width={79}
                height={79}
              />
              <div>
                <span>Stanowisko zrobotyzowane</span>
                <span>Stanowisko Single</span>
              </div>
            </MenubarItem>
            <MenubarItem>
              <Image
                src={'/navbarProducts/dual.svg'}
                alt={'single'}
                width={79}
                height={79}
              />
              <div>
                <span>Stanowisko zrobotyzowane</span>
                <span>Stanowisko Single</span>
              </div>
            </MenubarItem>
            <MenubarItem>
              <Image
                src={'/navbarProducts/dual.svg'}
                alt={'single'}
                width={79}
                height={79}
              />
              <div>
                <span>Stanowisko zrobotyzowane</span>
                <span>Stanowisko Single</span>
              </div>
            </MenubarItem>
            <MenubarItem>
              <Image
                src={'/navbarProducts/automatyzacja.svg'}
                alt={'single'}
                width={79}
                height={79}
              />

              <span>Automatyzacja maszyn i urządzeń</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Park maszynowy" />

          <MenubarContent>
            <div>
              <span>Dział obróbki metalowej</span>
              <MenubarItem>Waterjet</MenubarItem>
              <MenubarItem>TruPunch 5000 | TRUMPF</MenubarItem>
              <MenubarItem>TrueLaser Tube 7000 fiber</MenubarItem>
              <MenubarItem>TrueLaser 3030 fiber | TRUMPF</MenubarItem>
              <MenubarItem>Stanowisko gięcia</MenubarItem>
              <MenubarItem>ARC D600</MenubarItem>
              <MenubarItem>ARC B250</MenubarItem>
              <MenubarItem>ARC Trackmotion 2t</MenubarItem>
            </div>
            <div>
              <span>Dział obróbki CNC</span>
              <MenubarItem>CLX 350</MenubarItem>
              <MenubarItem>DMU 75 monoBLOCK</MenubarItem>
              <MenubarItem>DMU 210 P</MenubarItem>
              <MenubarItem>SPRINT 3215</MenubarItem>
              <MenubarItem>M1</MenubarItem>
              <MenubarItem>Waterjet</MenubarItem>
              <MenubarItem>LH</MenubarItem>
              <MenubarItem>5 osiowe CNC</MenubarItem>
              <MenubarItem>NLX 2500</MenubarItem>
            </div>
            <div>
              <span>Lakiernie</span>
              <MenubarItem>Lakiernie mokre i proszkowe</MenubarItem>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Produkty" />
          <MenubarContent>
            <MenubarItem>
              <Image
                src={'/navbarProducts/dual.svg'}
                alt={'single'}
                width={79}
                height={79}
              />

              <span>Obróbka powierzchni</span>
            </MenubarItem>
            <MenubarItem>
              <Image
                src={'/navbarProducts/dual.svg'}
                alt={'single'}
                width={79}
                height={79}
              />

              <span>Magazyn pionowy blach</span>
            </MenubarItem>
            <MenubarItem>
              <Image
                src={'/navbarProducts/dual.svg'}
                alt={'single'}
                width={79}
                height={79}
              />

              <span>Piece komorowe</span>
            </MenubarItem>
            <MenubarItem>
              <Image
                src={'/navbarProducts/dual.svg'}
                alt={'single'}
                width={79}
                height={79}
              />

              <span>Lakiernie</span>
            </MenubarItem>
            <div>
              <span>Dział obróbki CNC</span>
              <MenubarItem>ALW-1200</MenubarItem>
              <MenubarItem>Flex Cobot Esab</MenubarItem>
              <MenubarItem>Flex Cobot Fronius</MenubarItem>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Usługi" />
        </MenubarMenu>
      </Menubar>

      <Menubar>
        <Link
          className="bg-main-orange cursor-pointer select-none items-center rounded-sm px-5 py-1.5 text-sm transition-all hover:bg-orange-400"
          href={''}
        >
          Kontakt
        </Link>
      </Menubar>
    </div>
  )
}

export default Navbar
