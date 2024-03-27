import PageTitle from '@/components/common/PageTitle'
import dynamic from 'next/dynamic'

const Model = dynamic(() => import('./Model'), { ssr: false })

export default function ProductPage() {
  return (
    <main className="mb-[120px] grid w-full grid-rows-[auto_1fr]">
      <PageTitle content="Satyniara" />
      <div className="relative mx-auto flex h-full max-h-[800px] min-h-[400px] w-11/12 max-w-[1200px] flex-col overflow-hidden rounded-md">
        <Model />
      </div>
    </main>
  )
}
