/* eslint-disable @typescript-eslint/prefer-find */
/* eslint-disable unicorn/prefer-array-find */
'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { LuSearch, LuShoppingCart } from 'react-icons/lu'
import { FaRegBookmark, FaRegUserCircle } from 'react-icons/fa'
import logoWhite from '../../../public/logos/BALIndustryLogoWhite.svg'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import styles from './Navbar.module.scss'
import Hamburger from './hamburger/Hamburger'
import HamburgerMenu from './hamburgerMenu/HamburgerMenu'
import useWindowDimensions from '@/hooks/useWindowDimensions'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [chosenMenu, setChosenMenu] = useState<string | null>(null)
  const windowDimensions = useWindowDimensions()

  useEffect(() => {
    if (windowDimensions.width !== undefined && windowDimensions.width < 900) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [windowDimensions.width])

  const ref = useRef(null)

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setChosenMenu(null)
      }
    }

    window.addEventListener('click', handleOutSideClick)

    return () => {
      window.removeEventListener('click', handleOutSideClick)
    }
  }, [ref, chosenMenu])

  const menuFields = [
    { fieldName: 'O NAS', subFields: ['O FIRMIE', 'KONTAKT'] },
    {
      fieldName: 'ROBOTYZACJA I AUTOMATYZACJA',
      subFields: [
        'STANOWISKA ZROBOTYZOWANE',
        'AUTOMATYZACJA MASZYN I URZĄDZEŃ',
      ],
    },
    {
      fieldName: 'PARK MASZYNOWY',
      subFields: ['DZIAŁ OBRÓBKI CNC', 'DZIAŁ OBRÓBKI METALOWEJ', 'LAKIERNIE'],
    },
    {
      fieldName: 'ROZWIĄZANIA',
      subFields: [
        'SATYNIARKI',
        'MAGAZYN PIONOWY BLACH',
        'PIECE KOMOROWE',
        'LAKIERNIE',
      ],
    },
    { fieldName: 'USŁUGI', subFields: ['WYCENA CIĘCIA', 'FORMULARZ OFERTOWY'] },
  ]

  return (
    <nav
      className={`${styles.navbar} ${isMobile ? styles.mobileNav : styles.desktopNav}`}
    >
      {isMobile ? (
        <>
          <Image src={logoWhite} alt="Logo" />
          <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <HamburgerMenu isMenuOpen={isMenuOpen} menuFields={menuFields} />
        </>
      ) : (
        <div className={styles.desktopNavbar}>
          <div className={styles.desktopNavbarTop}>
            <Image src={logoWhite} alt="Logo" />
            <div className={styles.searchbarWrapper}>
              <div className={styles.inputContainer}>
                <LuSearch />
                <input
                  type="text"
                  placeholder="Szukaj..."
                  className={styles.searchbar}
                />
              </div>
            </div>
            <ul className={styles.topOptions}>
              <li>
                Zapisane <FaRegBookmark />
              </li>
              <li>
                Zaloguj <FaRegUserCircle />
              </li>
              <li>
                Koszyk <LuShoppingCart />
              </li>
              <li>
                <LanguageSelector isMobile={isMobile} />
              </li>
            </ul>
          </div>
          <div
            className={`${styles.desktopNavbarBot} ${chosenMenu === null ? '' : styles.submenuOpen}`}
            ref={ref}
          >
            <div>
              <ul className={styles.desktopNavMainCategories}>
                {menuFields.map((field) => (
                  <li
                    key={field.fieldName}
                    className={`${chosenMenu === field.fieldName ? styles.activeMenu : null}`}
                    onClick={() => {
                      setChosenMenu(field.fieldName)
                    }}
                  >
                    {field.fieldName}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.submenusList}`}>
              <ul>
                {chosenMenu === null
                  ? null
                  : menuFields
                      .filter((field) => field.fieldName === chosenMenu)[0]
                      .subFields.map((subfield) => (
                        <li
                          key={subfield}
                          onClick={() => {
                            setChosenMenu(null)
                          }}
                        >
                          {subfield}
                        </li>
                      ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
