import Image from 'next/image'
import { useEffect } from 'react'
import { type FloatingCTAProps } from '@/app/[locale]/product/types'
import Button from '@/components/common/Button'
import { Link } from '@/navigation'
import { initializeArButton } from '@/utils/createQR'

const FloatingCTA: React.FC<FloatingCTAProps> = ({ data }) => {
  const { title, image, content, button, form, qr, ar } = data

  /* !!! do uzupełnienia
  
  ar na mobile, 
  qr na desktop */

  useEffect(() => {
    const arLink = `${window.location.protocol}//${window.location.host}/${ar}`
    initializeArButton(arLink)
  }, [])

  return (
    <div
      id="floatingCTA"
      className="fixed right-[38px] top-[150px] rounded border border-zinc-200 p-4 2xl:right-auto 2xl:ml-[40px] 2xl:p-6"
    >
      <span className="text-lg">{title}</span>
      {ar ? (
        <canvas id="qr-code" className="mx-auto w-[175px]" />
      ) : (
        <Image
          src={image || qr}
          alt={''}
          width={200}
          height={100}
          className="mx-auto my-6"
        />
      )}

      {content && (
        <span className="my-4 block max-w-[220px] whitespace-normal text-center">
          {content}
        </span>
      )}
      <Link href={form}>
        <Button content={button} className="m-auto" />
      </Link>
    </div>
  )
}

export default FloatingCTA
