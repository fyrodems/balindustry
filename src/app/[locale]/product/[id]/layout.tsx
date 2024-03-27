/* eslint-disable prefer-const */
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl'

interface MetadataProps {
  params: { id: string }
}

interface Props {
  children: React.ReactNode
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  // read route params
  const id = params.id
  const locale = useLocale()
  let messages
  messages = (await import(`@/libs/i18n/messages/${locale}.json`)).default

  return {
    title: messages.metaData.product[id].title,
    description: messages.metaData.product[id].description,
  }
} /* 
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const id = params.id
  const t = await getTranslations(`metaData.product.${id}`)

  return {
    title: t('title'),
    description: t('description'),
  }
} */

export default async function CalculatorLayout({ children }: Props) {
  return <>{children}</>
}
