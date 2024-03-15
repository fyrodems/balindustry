'use client'

import { animate, AnimationControls } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface CounterProps {
  from: number
  to: number
  content: string
  additionalContent?: string
}

function Counter({
  from,
  to,
  content,
  additionalContent,
}: CounterProps): JSX.Element {
  const nodeRef = useRef<HTMLParagraphElement>(null)
  let controls: AnimationControls | null = null

  useEffect(() => {
    const node = nodeRef.current

    if (node) {
      controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          additionalContent
            ? (node.textContent = value.toFixed(0) + additionalContent)
            : (node.textContent = value.toFixed(0))
        },
      })
    }

    return () => {
      if (controls) {
        controls.stop()
      }
    }
  }, [from, to])

  return (
    <div className='flex flex-col justify-center w-[205px]'>
      <p
        className={
          'text-stroke-3 text-[80px] font-bold text-white [text-shadow:-1px_-1px_0_black,_1px_-1px_0_black,_-1px_1px_0_black,_1px_1px_0_black]'
        }
        ref={nodeRef}
      >
        0 {additionalContent}
      </p>
      <p>{content}</p>
    </div>
  )
}

const Statistics: React.FC = () => {
  return (
    <div className='flex flex-wrap text-center px-[20px] justify-evenly mt-[110px] mb-[80px] gap-[40px]'>
      <Counter from={0} to={26} content={'Lat na rynku'} />
      <Counter from={0} to={110} content={'Skończonych projektów'} />
      <Counter
        from={0}
        to={99}
        content={'Pozytywnych opinii'}
        additionalContent={'%'}
      />
      <Counter
        from={0}
        to={100}
        content={'Kubków kawy'}
        additionalContent={'+'}
      />
    </div>
  )
}

export default Statistics
