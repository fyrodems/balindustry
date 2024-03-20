import { type SpecificationProps } from '@/app/[locale]/product/[id]/types'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/libs/utils'

const Specification: React.FC<SpecificationProps> = ({ data }) => {
  console.log(data)
  return (
    <div className="mx-[20px]">
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
              <TableRow key={i} className={cn(i % 2 === 0 && 'bg-stone-300')}>
                <TableCell>{parametr.name}</TableCell>
                <TableCell className="text-right">{parametr.param}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Specification
