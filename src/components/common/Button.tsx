import { cn } from '@/libs/utils'

interface ButtonProps {
  disabled?: boolean
  size?: 'XL' | 'L' | 'M' | 'XS' | null
  className?: string
  primary?: boolean
  onClick: () => void
  content?: string
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  content = '',
  disabled = false,
  size,
  className,
  primary = true,
  onClick,
  children,
}) => {
  const sizeToClassName = {
    XS: 'px-6 py-1 text-sm',
    M: 'px-10 py-3 text-base',
    L: 'px-12 py-4 text-base',
    XL: 'px-14 py-4 text-lg',
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        className,
        'flex cursor-pointer items-center justify-center rounded-lg font-medium text-white transition duration-300',
        primary && 'bg-button hover:bg-button-hover',
        size ? sizeToClassName[size] : sizeToClassName.M
      )}
    >
      {content}
      {children}
    </button>
  )
}

export default Button
