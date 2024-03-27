import dynamic from 'next/dynamic'
import { getTranslations } from 'next-intl/server'
import { BackButton } from './backButton'

const Model = dynamic(() => import('./Model'), { ssr: false })

interface Props {
  params: { ar: string }
}

export async function generateMetadata() {
  const t = await getTranslations('metaData.ar')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function Viewer({ params: { ar } }: Props) {
  return (
    <main className="mb-[120px] grid w-full grid-rows-[auto_1fr]">
      <BackButton ar={ar} />
      <div className="mx-auto flex h-full min-h-[400px] w-11/12 max-w-[1920px] flex-col overflow-hidden rounded-md md:min-h-[600px]">
        <Model ar={ar} />
      </div>
    </main>
  )
}
