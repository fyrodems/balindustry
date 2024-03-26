import { type SpecificationProps } from '@/app/[locale]/product/types'
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
  return (
    <div className="mx-[20px] mb-[60px] mt-[20px]" id="specification">
      <Accordion type="single" collapsible defaultValue="open">
        <AccordionItem value="open">
          <AccordionTrigger className="mb-[40px] border-0 border-b-[2px] border-solid border-stone-300 text-[26px] font-bold text-stone-800">
            Parametry
          </AccordionTrigger>
          <AccordionContent className="cursor-default laptop:ml-[40px]">
            <Table>
              <TableHeader className=" bg-stone-800">
                <TableRow className="grid grid-cols-[40%_60%]">
                  <TableHead className="grid place-items-center border-r-[1px] text-center !text-white">
                    Cecha
                  </TableHead>
                  <TableHead className="grid place-items-center border-l-[1px] text-center !text-white">
                    Opis
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((parametr, i) => {
                  return (
                    <TableRow
                      key={i}
                      className={cn(
                        i % 2 === 0 && 'bg-stone-300',
                        'grid grid-cols-[40%_60%]'
                      )}
                    >
                      <TableCell>{parametr.name}</TableCell>
                      {/* <TableCell className="">{parametr.param}</TableCell>
                       */}
                      {parametr.param.length === 1 ? (
                        <TableCell className="">{parametr.param[0]}</TableCell>
                      ) : (
                        <TableCell className="pl-0">
                          <ul className="flex flex-col">
                            {parametr.param.map((param, i) => {
                              return (
                                <li
                                  key={i}
                                  className=" my-1 ml-6 list-disc pl-2"
                                >
                                  {param}
                                </li>
                              )
                            })}
                          </ul>
                        </TableCell>
                      )}
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
