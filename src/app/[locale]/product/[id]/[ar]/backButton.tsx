'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from '@/navigation'
import { generateARTitle } from '@/utils/utils'

export const BackButton = ({ ar }: { ar: string }) => {
  const router = useRouter()
  return (
    <div className="mx-auto mb-[50px] flex w-11/12 items-center gap-1 text-balance pt-[120px] text-center  text-2xl font-medium text-stone-800 sm:text-[30px] laptop:mb-[70px] laptop:pt-[150px] laptop:text-[40px]">
      <button onClick={() => router.back()}>
        <ChevronLeft width="45px" height="45px" />{' '}
      </button>
      <h1>{generateARTitle(ar)}</h1>
    </div>
  )
}
