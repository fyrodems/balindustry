import styles from './Button.module.scss'

interface ButtonProps {
  content: string
  disabled: boolean
  size: 'XL' | 'L' | 'M' | 'XS'
}

export const Button: React.FC<ButtonProps> = ({
  content = '',
  disabled = false,
  size = 'M',
}) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${
        size === 'XL'
          ? styles.extraLarge
          : size === 'L'
            ? styles.large
            : size === 'M'
              ? styles.medium
              : styles.extraSmall
      }`}
    >
      {content}
    </button>
  )
}

export default Button
