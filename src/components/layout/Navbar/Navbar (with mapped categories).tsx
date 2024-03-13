import Image from 'next/image'
import { MainCategory } from './MainCategory'
import { categories } from './categories'
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

        {categories.map((category, index) => (
          <MenubarMenu key={index}>
            <MainCategory
              content={category.name}
              onClick={() => {
                console.log(index)
              }}
            />

            <MenubarContent
              className={cn(styles.popover, styles.index, 'w-[100vw]')}
            >
              {category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex}>
                  <span className="text-xs !text-orange-500">
                    {subcategory.name}
                  </span>
                  {subcategory.items.map((item, itemIndex) => (
                    <MenubarItem key={itemIndex}>
                      {item.image && (
                        <Image
                          src={item?.image}
                          alt={item.name}
                          width={80}
                          height={80}
                        />
                      )}

                      <div>
                        <span>{item.name}</span>
                      </div>
                    </MenubarItem>
                  ))}
                </div>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))}
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
