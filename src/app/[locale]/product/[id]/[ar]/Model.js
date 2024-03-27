'use client'

import '@google/model-viewer'
import './styles.css'
import { TbAugmentedReality } from 'react-icons/tb'

const Model = ({ ar }) => {
  return (
    <model-viewer
      src={`/assets/ARModels/${ar}.glb`}
      ios-src={`/assets/ARModels/${ar}.usdz`}
      alt="A 3D model of an astronaut"
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
  )
}

export default Model
