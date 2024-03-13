import { cn } from '@/libs/utils'

interface ButtonProps {
  content: string
  disabled?: boolean
  size?: 'XL' | 'L' | 'M' | 'XS' | null
  className?: string
  primary?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  content = '',
  disabled = false,
  size,
  className,
  primary = true,
}) => {
  const sizeToClassName = {
    XS: 'px-14 py-4 text-sm',
    M: 'px-16 py-3 text-base',
    L: 'px-20 py-5 text-base',
    XL: 'px-24 py-6 text-lg',
  }

  return (
    <button
      disabled={disabled}
      className={cn(
        className,
        'flex cursor-pointer items-center justify-center rounded-lg font-medium text-white transition duration-300',
        primary ?? 'bg-button hover:bg-button-hover',
        size ? sizeToClassName[size] : sizeToClassName.M
      )}
    >
      {content}
    </button>
  )
}

export default Button
