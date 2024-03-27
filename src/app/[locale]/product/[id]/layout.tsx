import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('metaData.product')

  return {
    title: t('title'),
    description: t('description'),
  }
}

interface Props {
  children: React.ReactNode
}

export default async function CalculatorLayout({ children }: Props) {
  return <>{children}</>
}
