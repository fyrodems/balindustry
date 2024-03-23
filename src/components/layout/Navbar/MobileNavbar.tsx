import Image from 'next/image'
import { type Dispatch, type SetStateAction } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories } from './categories'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Link } from '@/navigation'

const MobileNavbar: React.FC<{
  isDropdownOpen: boolean
  setDropdownOpen: Dispatch<SetStateAction<boolean>>
}> = ({ isDropdownOpen, setDropdownOpen }) => {
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
      <Hamburger toggled={isDropdownOpen} size={26} toggle={setDropdownOpen} />

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="shadow-4xl fixed left-0 right-0 top-[3.5rem] max-h-[95vh] bg-navbar p-[38px] pr-[55px] pt-2"
          >
            <Accordion type="multiple" className="w-full">
              <ScrollArea className="h-[95vh] pb-8 pt-5">
                <ul className="grid gap-2">
                  <Link href={categories[0].link}>
                    <motion.li>
                      <AccordionItem
                        className="pb-4 pt-0 font-medium"
                        value="ble"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                      >
                        {categories[0].name}
                      </AccordionItem>
                    </motion.li>
                  </Link>
                  {categories.map((category, idx) =>
                    category.subcategories ? (
                      <motion.li
                        key={idx}
                        // initial={{ scale: 0, opacity: 0 }}
                        // animate={{ scale: 1, opacity: 1 }}
                        // transition={{
                        //   type: 'spring',
                        //   stiffness: 260,
                        //   damping: 20,
                        //   delay: 0.1 + idx / 10,
                        // }}
                        // className="w-full rounded-xl p-[0.08rem]"
                      >
                        <AccordionItem value={`${idx}`}>
                          <AccordionTrigger>{category.name}</AccordionTrigger>
                          <AccordionContent>
                            {category.subcategories.map((subcat, idx) => {
                              return (
                                <AccordionItem
                                  key={idx}
                                  value={`${category.name} ${idx}`}
                                >
                                  {subcat.name === '' ? (
                                    <Link href={subcat.items[0].link}>
                                      <AccordionItem
                                        className="pb-4 pt-0 font-normal !text-orange-500"
                                        value={subcat.items[0].name}
                                        onClick={() => {
                                          setDropdownOpen((prev) => !prev)
                                        }}
                                      >
                                        {subcat.items[0].name}
                                      </AccordionItem>
                                    </Link>
                                  ) : (
                                    <>
                                      <AccordionTrigger className="font-normal !text-orange-500">
                                        {subcat.name}
                                      </AccordionTrigger>
                                      {subcat.items.map((item, idx) => (
                                        <Link href={item.link} key={idx}>
                                          <AccordionContent
                                            onClick={() => {
                                              setDropdownOpen((prev) => !prev)
                                            }}
                                          >
                                            {item.name}
                                          </AccordionContent>
                                        </Link>
                                      ))}
                                    </>
                                  )}
                                </AccordionItem>
                              )
                            })}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.li>
                    ) : null
                  )}
                  <Link href={categories[categories.length - 1].link}>
                    <motion.li>
                      <AccordionItem
                        className="pb-4 pt-0 font-medium"
                        value="ble"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                      >
                        {categories[categories.length - 1].name}
                      </AccordionItem>
                    </motion.li>
                  </Link>
                </ul>
              </ScrollArea>
            </Accordion>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNavbar
