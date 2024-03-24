import Image from 'next/image'
import { MainCategory } from './MainCategory'
import { SubCategoryLabel } from './SubCategoryLabel'
import styles from './Navbar.module.scss'
import { Link } from '@/navigation'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { cn } from '@/libs/utils'

const DesktopNavbar = () => {
  return (
    <div className="fixed top-0 z-[2] flex min-h-[70px] w-full items-center justify-between bg-navbar px-[38px] py-0 text-white transition-all ">
      <Link href="/">
        <Image
          src={'/images/logos/BALIndustryLogoWhite.svg'}
          alt={'logo'}
          width={60}
          height={32}
        />
      </Link>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={`/about`}>O firmie</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Robotyzacja i automatyzacja" />

          <MenubarContent className={cn(styles.popover, styles.robotics)}>
            <div className={styles.gridWrapper}>
              <Link href="/product/single">
                <MenubarItem className={styles.menubarItem}>
                  <Image
                    src={'/images/navbarProducts/single.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <div>
                    <SubCategoryLabel content={'Stanowisko zrobotyzowane'} />
                    <span>Stanowisko Single</span>
                  </div>
                </MenubarItem>
              </Link>

              <Link href="/product/twin-one-axis">
                <MenubarItem className={styles.menubarItem}>
                  <Image
                    src={'/images/navbarProducts/placeholder.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <div>
                    <SubCategoryLabel content={'Stanowisko zrobotyzowane'} />
                    <span>Stanowisko Twin One-axis</span>
                  </div>
                </MenubarItem>
              </Link>
              <Link href="/product/dual">
                <MenubarItem className={styles.menubarItem}>
                  <Image
                    src={'/images/navbarProducts/placeholder.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <div>
                    <SubCategoryLabel content={'Stanowisko zrobotyzowane'} />
                    <span>Stanowisko Dual</span>
                  </div>
                </MenubarItem>
              </Link>
              <Link href="/automation">
                <MenubarItem className={styles.menubarItem}>
                  <Image
                    src={'/images/navbarProducts/automatyzacja.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />
                  <span>Automatyzacja maszyn i urządzeń</span>
                </MenubarItem>
              </Link>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Park maszynowy" />

          <MenubarContent className={cn(styles.popover, styles.machines)}>
            <div className={styles.gridWrapper}>
              <div>
                <SubCategoryLabel content={'Dział obróbki metalowej'} />
                <Link href="/product/waterjet">
                  <MenubarItem>Waterjet</MenubarItem>
                </Link>
                <Link href="/product/trupunch-5000">
                  <MenubarItem>TruPunch 5000 | TRUMPF</MenubarItem>
                </Link>
                <Link href="/product/truelaser-7000">
                  <MenubarItem>TrueLaser Tube 7000 fiber</MenubarItem>
                </Link>
                <Link href="/product/truelaser-3030">
                  <MenubarItem>TrueLaser 3030 fiber | TRUMPF</MenubarItem>
                </Link>
                <Link href="/product/bending-station">
                  <MenubarItem>Stanowisko gięcia</MenubarItem>
                </Link>
                <Link href="/product/arc-d600">
                  <MenubarItem>ARC D600</MenubarItem>
                </Link>
                <Link href="/product/arc-b250">
                  <MenubarItem>ARC B250</MenubarItem>
                </Link>
                <Link href="/product/arc-trackmotion-2t">
                  <MenubarItem>ARC Trackmotion 2t</MenubarItem>
                </Link>
              </div>
              <div>
                <SubCategoryLabel content={'Dział obróbki CNC'} />
                <Link href="/product/clx-350">
                  <MenubarItem>CLX 350</MenubarItem>
                </Link>
                <Link href="/product/dmu-75-monoblock">
                  <MenubarItem>DMU 75 monoBLOCK</MenubarItem>
                </Link>
                <Link href="/product/dmu-210-p">
                  <MenubarItem>DMU 210 P</MenubarItem>
                </Link>
                <Link href="/product/sprint-32I5">
                  <MenubarItem>SPRINT 32I5</MenubarItem>
                </Link>
                <Link href="/product/m1">
                  <MenubarItem>M1</MenubarItem>
                </Link>
                <Link href="/product/waterjet">
                  <MenubarItem>Waterjet</MenubarItem>
                </Link>
                <Link href="/product/lh">
                  <MenubarItem>LH</MenubarItem>
                </Link>
                <Link href="/product/5-axis-cnc">
                  <MenubarItem>5 osiowe CNC</MenubarItem>
                </Link>
                <Link href="/product/nlx-2500">
                  <MenubarItem>NLX 2500</MenubarItem>
                </Link>
              </div>
              {/* <div>
                <SubCategoryLabel content={'Lakiernie'} />
                <Link href="/product(usługi)/paintshops">
                  <MenubarItem>Lakiernie mokre i proszkowe</MenubarItem>
                </Link>
              </div> */}
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Produkty" />
          <MenubarContent className={cn(styles.popover, styles.products)}>
            <div className={styles.gridWrapper}>
              <Link href="/product/surface-treatment">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/placeholder.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />

                  <span>Obróbka powierzchni</span>
                </MenubarItem>
              </Link>
              <Link href="/product/vertical-warehouse">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/placeholder.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />

                  <span>Magazyn pionowy blach</span>
                </MenubarItem>
              </Link>
              <div className="row-span-2 px-2 py-1.5">
                <SubCategoryLabel content={'Spawalnictwo'} />
                <Link href="/product/alw-1200">
                  <MenubarItem>ALW-1200</MenubarItem>
                </Link>
                <Link href="/product/flex-esab">
                  <MenubarItem>Flex Cobot Esab</MenubarItem>
                </Link>
                <Link href="/product/flex-fronius">
                  <MenubarItem>Flex Cobot Fronius</MenubarItem>
                </Link>
              </div>
              <Link href="/product/furnace">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/placeholder.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />

                  <span>Piece komorowe</span>
                </MenubarItem>
              </Link>
              <Link href="/product/paintshops">
                <MenubarItem>
                  <Image
                    src={'/images/navbarProducts/placeholder.svg'}
                    alt={'single'}
                    width={80}
                    height={80}
                  />

                  <span>Lakiernie</span>
                </MenubarItem>
              </Link>
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Menubar>
        <Link
          className="cursor-pointer select-none items-center rounded-sm bg-main-orange px-5 py-1.5 text-sm transition-all hover:bg-orange-400"
          href={'/contact'}
        >
          Kontakt
        </Link>
      </Menubar>
    </div>
  )
}

export default DesktopNavbar
