import Image from 'next/image'
import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { type MainCharacteristicsProps } from '@/app/[locale]/product/[id]/types'

const MainCharacteristics: React.FC<MainCharacteristicsProps> = ({ data }) => {
  /* !!! dodać akordeon główny */

  const [open, setOpen] = useState<boolean>(true)

  return (
    <div id="characteristics" className="mx-[20px]">
      <Accordion type="single" collapsible value={open ? 'open' : 'closed'}>
        <AccordionItem value="open">
          <AccordionTrigger
            onClick={() => {
              setOpen((prev) => !prev)
            }}
            className="mt-[60px] border-0 border-b-[2px] border-solid border-stone-300 text-[26px] font-bold text-stone-800"
          >
            Główne cechy
          </AccordionTrigger>
          <AccordionContent className="cursor-default">
            {data.map((characteristic, i) => (
              <div key={i} className="laptop:mb-[100px] my-[60px] ml-[40px]">
                <h2 className="text-xl font-bold text-black">
                  {characteristic.title}
                </h2>
                <p className="my-[30px]">{characteristic.content}</p>
                {characteristic.image && (
                  <Image
                    src={characteristic.image}
                    alt={characteristic.title}
                    width={1600}
                    height={500}
                  />
                )}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default MainCharacteristics
