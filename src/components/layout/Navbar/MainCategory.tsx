import { ChevronDown } from 'lucide-react'
import { MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'

export const MainCategory: React.FC<{ content: string }> = ({ content }) => {
  return (
    <MenubarTrigger>
      {content} &nbsp;&nbsp;
      <MenubarShortcut>
        <ChevronDown size={16} />
      </MenubarShortcut>
    </MenubarTrigger>
  )
}
