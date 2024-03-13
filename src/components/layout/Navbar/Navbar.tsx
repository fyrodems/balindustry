import Image from 'next/image'
import styles from './Navbar.module.scss'
import { Link } from '@/navigation'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { ChevronDown } from 'lucide-react'

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
          <MenubarTrigger>
            Robotyzacja i automatyzacja &nbsp;&nbsp;
            <MenubarShortcut>
              <ChevronDown size={16} />
            </MenubarShortcut>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            Park maszynowy &nbsp;&nbsp;
            <MenubarShortcut>
              <ChevronDown size={16} />
            </MenubarShortcut>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            Produkty &nbsp;&nbsp;
            <MenubarShortcut>
              <ChevronDown size={16} />
            </MenubarShortcut>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            Usługi &nbsp;&nbsp;
            <MenubarShortcut>
              <ChevronDown size={16} />
            </MenubarShortcut>
          </MenubarTrigger>
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
