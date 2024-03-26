'use client'
import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import styles from './DropdownInfo.module.scss'

type AccordionPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Root
>
type AccordionProps = AccordionPrimitiveProps

type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
>
type AccordionTriggerProps = AccordionTriggerPrimitiveProps

export const DropdownInfo = () => {
  const AccordionRoot = AccordionPrimitive.Root
  const AccordionHeader = AccordionPrimitive.Header
  const AccordionPrimitiveTrigger = AccordionPrimitive.Trigger
  const AccordionItem = AccordionPrimitive.Item
  const AccordionContent = AccordionPrimitive.Content

  const Accordion = React.forwardRef<
    React.ElementRef<typeof AccordionRoot>,
    AccordionProps
  >(({ children, ...props }, forwardedRef) => (
    <AccordionRoot
      ref={forwardedRef}
      {...props}
      {...(props.type === 'single' ? { collapsible: true } : {})}
    >
      {children}
    </AccordionRoot>
  ))

  Accordion.displayName = 'Accordion'

  const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitiveTrigger>,
    AccordionTriggerProps
  >(({ children, ...props }, forwardedRef) => (
    <AccordionHeader>
      <AccordionPrimitiveTrigger {...props} ref={forwardedRef}>
        {children}
        <ChevronDown />
      </AccordionPrimitiveTrigger>
    </AccordionHeader>
  ))

  AccordionTrigger.displayName = 'AccordionTrigger'

  return (
    <Accordion type="single" collapsible className={styles.dropdownInfo}>
      <AccordionItem value={'item-1'} className={styles.dropdownWrapper}>
        <AccordionTrigger className={styles.dropdownHeader}>
          Jak wygląda optymalny plik?
        </AccordionTrigger>
        <AccordionContent className={styles.accordionContent}>
          <div className={styles.dropdownContent}>
            Optymalny plik do cięcia laserowego składa się z jednej części.
            Wszystkie kontury są zamknięte, a kolor konturu cięcia jest biały.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value={'item-2'} className={styles.dropdownWrapper}>
        <AccordionTrigger className={styles.dropdownHeader}>
          Na co należy zwrócić uwagę?
        </AccordionTrigger>
        <AccordionContent className={styles.accordionContent}>
          <div className={styles.dropdownContent}>
            Należy wziąć pod uwagę następujące punkty:
            <ul className={styles.dropdownContentList}>
              <li>w pliku powinien znajdować się tylko kontur cięcia</li>
              <li>w jednym pliku może być tylko jedna część</li>
              <li>linie nie powinny się na siebie nakładać</li>
              <li>
                w pliku nie mogą znajdować się dodatkowe dane i informacje
              </li>
              <li>
                eksportując z programu 3D, nie powinno wybierać się innych
                widoków
              </li>
              <li>plik nie powinien zawierać nagłówka rysunku</li>
              <li>
                linie powinny być koloru białego (czerwone linie nie będą cięte)
              </li>
              <li>kontury powinny być zamknięte</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value={'item-3'} className={styles.dropdownWrapper}>
        <AccordionTrigger className={styles.dropdownHeader}>
          Jakich błędów należy unikać?
        </AccordionTrigger>
        <AccordionContent className={styles.accordionContent}>
          <div className={styles.dropdownContent}>
            Plik zawierający następujące błędy nie powinien być przesłany:
            <ul className={styles.dropdownContentList}>
              <li>kolorowe linie</li>
              <li>otwarte kontury</li>
              <li>obramowanie przez krawędzie rysunku</li>
              <li>informacje o materiale i znaki pisma</li>
              <li>kilka części w tym samym pliku</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default DropdownInfo
