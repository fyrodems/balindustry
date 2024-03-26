'use client'

import { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import useWindowDimensions from '@/utils/useWindowDimensions'

const Navbar = () => {
  const dropdownReference = useRef<HTMLDivElement | null>(null)
  const locale = useLocale() as 'en' | 'pl' | undefined
  // const pathname = usePathname()
  const { width } = useWindowDimensions()
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false)

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownReference.current &&
      !dropdownReference.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick)

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <header data-name="dropdownReference" ref={dropdownReference}>
      {width && width < 992 ? (
        <MobileNavbar
          isDropdownOpen={isDropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />
      ) : (
        <DesktopNavbar />
      )}
    </header>
  )
}

export default Navbar
