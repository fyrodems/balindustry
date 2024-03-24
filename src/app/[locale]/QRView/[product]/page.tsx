'use client'

import { useEffect } from 'react'
import { useParams, redirect } from 'next/navigation'
import { useLocale } from 'next-intl'
import ARMode from '@/utils/ARMode'
import { initializeArButton } from '@/utils/createQR'
import PageTitle from '@/components/common/PageTitle'

function QRCode() {
  const { product } = useParams()
  const locale = useLocale()

  useEffect(() => {
    if (
      [
        'SATYNIARKA',
        'PIEC',
        'MAGAZYN',
        'SingleStation',
        'DualStation',
        'TwinOneaxis',
      ].includes(product)
    ) {
      const detectDevice = new ARMode()
      detectDevice.detectDevice()
      initializeArButton(
        `${window.location.protocol}//${window.location.host}/${locale}/QRView/${product}`
      )
    } else {
      redirect('/')
    }
  })

  return (
    <div className="min-h-[73vh]">
      <PageTitle content={''} />
      <p className="text-center">
        Zeskanuj kod QR, aby zobaczyć <br /> w rzeczywistości rozszerzonej AR
      </p>
      <canvas className="mx-auto my-8 w-full max-w-[300px] " id="qr-code" />
    </div>
  )
}

export default QRCode