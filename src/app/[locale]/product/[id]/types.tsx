export interface BasicData {
  pathID: string
  name: string
  additional_name: string
  description: string
}

export interface FloatingCTA {
  title: string
  image: string
  content: string
  button: string
  form: string
  qr: string
  ar: string
}

export interface Parameter {
  name: string
  value: string
}

export interface MainCharacteristic {
  title: string
  content: string
  image: string
}

export interface Specification {
  name: string
  param: string
}

export interface ProductData {
  basic_data: BasicData
  floating_CTA: FloatingCTA
  images: string[]
  parameters: Parameter[]
  main_characteristics: MainCharacteristic[]
  specification: Specification[]
}

export interface ProductDataProps {
  data: ProductData
}
export interface FloatingCTAProps {
  data: FloatingCTA
}

export interface UseProductDataResult {
  data: ProductData
  isLoading: boolean
  error: Error | null
  isPaused: boolean
}
