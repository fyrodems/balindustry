'use client'
import styles from './Hamburger.module.scss'

interface HamburgerProps {
  isMenuOpen: boolean
  setIsMenuOpen: (state: boolean) => void
}

const Hamburger: React.FC<HamburgerProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
      onClick={() => {
        setIsMenuOpen((s) => !s)
      }}
    >
      <div className={`${isMenuOpen ? styles.open : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Hamburger
