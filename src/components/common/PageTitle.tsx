import { cn } from '@/libs/utils'

const PageTitle: React.FC<{ content: string }> = ({ content }) => {
  return (
    <h1
      className={cn(
        'text-balance pt-[150px] text-center text-[30px] font-medium text-stone-800 laptop:text-[50px]',
        content ? 'mb-[70px] ' : ''
      )}
    >
      {content}
    </h1>
  )
}

export default PageTitle
