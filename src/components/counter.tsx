import { useEffect, useRef } from 'react'
import {
  animate,
  useMotionValue,
  motion,
  useTransform,
  useInView,
} from 'framer-motion'

interface CounterProps {
  to: number
  additionalContent?: string
  content: string
}

export const Counter = ({ to, additionalContent, content }: CounterProps) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -50px 0px',
  })

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, to, { duration: 2 })
      animation.stop
    }
  }, [animate, isInView])

  const paragraph =
    'text-stroke-3 text-[80px] font-bold text-white [text-shadow:-1px_-1px_0_black,_1px_-1px_0_black,_-1px_1px_0_black,_1px_1px_0_black]'

  return (
    <div
      ref={ref}
      className="flex w-[205px] flex-col items-center  justify-self-center"
    >
      <div className="flex items-center">
        <motion.p className={paragraph}>{rounded}</motion.p>
        {additionalContent && <p className={paragraph}>{additionalContent}</p>}
      </div>
      <p>{content}</p>
    </div>
  )
}
