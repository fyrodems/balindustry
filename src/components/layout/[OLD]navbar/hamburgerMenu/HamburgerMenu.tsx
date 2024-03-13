/* eslint-disable @typescript-eslint/prefer-find */
/* eslint-disable unicorn/prefer-array-find */

'use client'
import {
  FaChevronRight,
  FaChevronLeft,
  FaRegBookmark,
  FaRegUserCircle,
} from 'react-icons/fa'
import { LuShoppingCart, LuDownload, LuInfo } from 'react-icons/lu'
import { useState } from 'react'
import styles from './HamburgerMenu.module.scss'
import { LanguageSelector } from '@/components/LanguageSelector/LanguageSelector'

interface HamburgerMenuProps {
  isMenuOpen: boolean
  menuFields: Array<{ fieldName: string; subFields: string[] }>
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isMenuOpen,
  menuFields,
}) => {
  const [chosenMenu, setChosenMenu] = useState<string | null>(null)

  return (
    <div
      className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.open : styles.closed}`}
    >
      {chosenMenu === null ? (
        <div>
          <div className={styles.linkWrapper}>
            <ul>
              {menuFields.map((field) => (
                <li
                  key={field.fieldName}
                  onClick={() => {
                    setChosenMenu(field.fieldName)
                  }}
                >
                  {field.fieldName}
                  <FaChevronRight />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.basketWrapper}>
            <ul>
              <li>
                <LuShoppingCart />
                KOSZYK
              </li>
              <li>
                <FaRegBookmark />
                ZAPISANE
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.linkWrapper}>
            <ul>
              <li
                className={styles.returnButton}
                onClick={() => {
                  setChosenMenu(null)
                }}
              >
                <FaChevronLeft />
                POWRÓT
              </li>
              {menuFields
                .filter((field) => field.fieldName === chosenMenu)[0]
                .subFields.map((subfield) => (
                  <li key={subfield}>{subfield}</li>
                ))}
            </ul>
          </div>
          <div className={styles.basketWrapper}>
            <ul>
              <li>
                <LuShoppingCart />
                KOSZYK
              </li>
              <li>
                <FaRegBookmark />
                ZAPISANE
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className={styles.optionsWrapper}>
        <ul>
          <li>
            <FaRegUserCircle />
            ZALOGUJ <LuDownload />
          </li>
          <li>
            <LuInfo />
            POMOC
          </li>
          <li className={styles.languageSelector}>
            <LanguageSelector />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
