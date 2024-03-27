'use client'

import React, { useEffect, useState } from 'react'
import '@google/model-viewer'
import './styles.css'
import { TbAugmentedReality } from 'react-icons/tb'
import Loader from '@/components/common/Loader'

const Model = ({ ar }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(true)
    }

    const handleError = (event) => {
      setIsError(event)
    }

    const viewer = document.querySelector('model-viewer')

    viewer.addEventListener('load', handleLoad)
    viewer.addEventListener('error', handleError)

    return () => {
      viewer.removeEventListener('load', handleLoad)
      viewer.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <div className="h-full w-full">
      {!isLoading && !isError && <Loader isAr />}
      {isError && (
        <p className="text-center">Błąd - nie udało się załadować modelu</p>
      )}
      <model-viewer
        src={`/assets/ARModels/${ar}.glb`}
        ios-src={`/assets/ARModels/${ar}.usdz`}
        alt={`${ar}`}
        shadow-intensity="1"
        camera-controls
        ar
        ar-button
        className="viewer"
      >
        <button
          slot="ar-button"
          id="ar-button"
          className="absolute flex items-center gap-2 tracking-wide"
        >
          Otwórz w rzeczywistości rozszerzonej AR{' '}
          <TbAugmentedReality className="icon text-2xl" />
        </button>
      </model-viewer>
    </div>
  )
}

export default Model
