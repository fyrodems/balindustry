import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

interface MetadataProps {
  params: { id: string }
}

interface Props {
  children: React.ReactNode
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const id = params.id
  const t = await getTranslations(`metaData.product.${id}`)

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function CalculatorLayout({ children }: Props) {
  return <>{children}</>
}
