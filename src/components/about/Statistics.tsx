'use client'

import { Counter } from '@/components/counter'

const Statistics = () => {
  return (
    <div className="mx-auto my-[120px] grid w-full max-w-[700px] items-center justify-center gap-[40px] px-[20px] text-center sm:my-[150px] sm:grid-cols-[1fr_1fr] laptop:max-w-[1200px] laptop:grid-cols-[repeat(4,1fr)] ">
      <Counter to={26} content={'Lat na rynku'} />
      <Counter to={110} content={'Skończonych projektów'} />
      <Counter to={99} content={'Pozytywnych opinii'} additionalContent={'%'} />
      <Counter to={100} content={'Kubków kawy'} additionalContent={'+'} />
    </div>
  )
}

export default Statistics
