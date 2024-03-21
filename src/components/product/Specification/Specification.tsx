import { useState } from 'react'
import { type SpecificationProps } from '@/app/[locale]/product/[id]/types'
import { cn } from '@/libs/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const Specification: React.FC<SpecificationProps> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <div className="mx-[20px]" id="specification">
      <Accordion type="single" collapsible value={open ? 'open' : 'closed'}>
        <AccordionItem value="open">
          <AccordionTrigger
            onClick={() => {
              setOpen((prev) => !prev)
            }}
            className="mb-[40px] border-0 border-b-[2px] border-solid border-stone-300 text-[26px] font-bold text-stone-800"
          >
            Parametry
          </AccordionTrigger>
          <AccordionContent className="ml-[40px] cursor-default">
            <Table>
              <TableHeader className="bg-stone-800">
                <TableRow>
                  <TableHead className="border-r-[1px] text-center !text-white">
                    Opis
                  </TableHead>
                  <TableHead className="border-l-[1px] text-center !text-white">
                    Parametr
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((parametr, i) => {
                  return (
                    <TableRow
                      key={i}
                      className={cn(i % 2 === 0 && 'bg-stone-300')}
                    >
                      <TableCell>{parametr.name}</TableCell>
                      <TableCell className="text-right">
                        {parametr.param}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Specification
