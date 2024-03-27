'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from '@/navigation'
import { generateARTitle } from '@/utils/utils'

export const BackButton = ({ ar }: { ar: string }) => {
  const router = useRouter()
  return (
    <div className="mx-auto mb-[70px] flex w-11/12 items-center gap-4 text-balance pt-[150px] text-center text-[30px] font-medium text-stone-800 laptop:text-[40px]">
      <button onClick={() => router.back()}>
        <ChevronLeft width="45px" height="45px" />{' '}
      </button>
      <h1>{generateARTitle(ar)}</h1>
    </div>
  )
}
