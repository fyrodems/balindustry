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

const Navbar = () => {
  return (
    <div className="@apply top-0; sticky z-[2] flex min-h-[70px] w-full items-center justify-between bg-navbar px-[38px] py-0 text-white transition-all ">
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

          <MenubarContent className={cn(styles.popover, styles.robotics)}>
            <div className={styles.gridWrapper}>
              <MenubarItem className={styles.menubarItem}>
                <Image
                  src={'/navbarProducts/single.svg'}
                  alt={'single'}
                  width={80}
                  height={80}
                />
                <div>
                  <SubCategoryLabel content={'Stanowisko zrobotyzowane'} />
                  <span>Stanowisko Single</span>
                </div>
              </MenubarItem>
              <MenubarItem className={styles.menubarItem}>
                <Image
                  src={'/navbarProducts/placeholder.svg'}
                  alt={'single'}
                  width={80}
                  height={80}
                />
                <div>
                  <SubCategoryLabel content={'Stanowisko zrobotyzowane'} />
                  <span>Stanowisko Twin One-axis</span>
                </div>
              </MenubarItem>
              <MenubarItem className={styles.menubarItem}>
                <Image
                  src={'/navbarProducts/placeholder.svg'}
                  alt={'single'}
                  width={80}
                  height={80}
                />
                <div>
                  <SubCategoryLabel content={'Stanowisko zrobotyzowane'} />
                  <span>Stanowisko Dual</span>
                </div>
              </MenubarItem>
              <MenubarItem className={styles.menubarItem}>
                <Image
                  src={'/navbarProducts/automatyzacja.svg'}
                  alt={'single'}
                  width={80}
                  height={80}
                />

                <span>Automatyzacja maszyn i urządzeń</span>
              </MenubarItem>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Park maszynowy" />

          <MenubarContent className={cn(styles.popover, styles.machines)}>
            <div className={styles.gridWrapper}>
              <div>
                <SubCategoryLabel content={'Dział obróbki metalowej'} />
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
                <SubCategoryLabel content={'Dział obróbki CNC'} />
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
                <SubCategoryLabel content={'Lakiernie'} />
                <MenubarItem>Lakiernie mokre i proszkowe</MenubarItem>
              </div>
            </div>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MainCategory content="Produkty" />
          <MenubarContent className={cn(styles.popover, styles.products)}>
            <div className={styles.gridWrapper}>
              <MenubarItem>
                <Image
                  src={'/navbarProducts/placeholder.svg'}
                  alt={'single'}
                  width={80}
                  height={80}
                />

                <span>Obróbka powierzchni</span>
              </MenubarItem>
              <MenubarItem>
                <Image
                  src={'/navbarProducts/placeholder.svg'}
                  alt={'single'}
                  width={80}
                  height={80}
                />

                <span>Magazyn pionowy blach</span>
              </MenubarItem>
              <div className="row-span-2 px-2 py-1.5">
                <SubCategoryLabel content={'Spawalnictwo'} />
                <MenubarItem>ALW-1200</MenubarItem>
                <MenubarItem>Flex Cobot Esab</MenubarItem>
                <MenubarItem>Flex Cobot Fronius</MenubarItem>
              </div>
              <MenubarItem>
                <Image
                  src={'/navbarProducts/placeholder.svg'}
                  alt={'single'}
                  width={80}
                  height={80}
                />

                <span>Piece komorowe</span>
              </MenubarItem>
              <MenubarItem>
                <Image
                  src={'/navbarProducts/placeholder.svg'}
                  alt={'single'}
                  width={80}
                  height={80}
                />

                <span>Lakiernie</span>
              </MenubarItem>
            </div>
          </MenubarContent>
        </MenubarMenu>

        {/* <MenubarMenu>
          <MainCategory content="Usługi" />
        </MenubarMenu> */}
      </Menubar>

      <Menubar>
        <Link
          className="cursor-pointer select-none items-center rounded-sm bg-main-orange px-5 py-1.5 text-sm transition-all hover:bg-orange-400"
          href={''}
        >
          Kontakt
        </Link>
      </Menubar>
    </div>
  )
}

export default Navbar
