'use client'

import '@google/model-viewer'
import './styles.css'
import { TbAugmentedReality } from 'react-icons/tb'
const Model = () => {
  return (
    <model-viewer
      src="/assets/ARModels/SATYNIARKA.glb"
      ios-src="/assets/ARModels/SATYIARKA.usdz"
      poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
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
        className="absolute flex items-center gap-2 tracking-wide text-black"
      >
        Otwórz w rzeczywistości rozszerzonej AR{' '}
        <TbAugmentedReality className="text-[21px] text-orange-500" />
      </button>
    </model-viewer>
  )
}

export default Model
