import { cn } from '@/libs/utils'

export const SubCategoryLabel: React.FC<{
  content: string
  className?: string
}> = ({ content, className }) => {
  return (
    <div className={cn('text-xs !text-orange-500', className)}>{content}</div>
  )
}
