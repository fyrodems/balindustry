export interface BasicData {
  pathID: string
  name: string
  additional_name: string
  description: string
  with_data: boolean
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
  content: string[]
  image: string
}

export interface Specification {
  name: string
  param: string[]
}

export interface AdditionalProducts {
  name: string
  image: string
  link: string
}

export interface MetalSheetsWarehouse {
  size: string
  mass: string
  drawers: string
}

export interface PalletsElementsWarehouse {
  size: string
  mass: string
  drawers: string
}

export interface ProductData {
  basic_data: BasicData
  floating_CTA: FloatingCTA
  images: string[]
  parameters: Parameter[]
  main_characteristics: MainCharacteristic[]
  specification: Specification[]
  additional_products: AdditionalProducts[]
  metal_sheets?: MetalSheetsWarehouse[]
  pallets_elements?: PalletsElementsWarehouse[]
}

export interface ProductDataProps {
  data: ProductData
}
export interface FloatingCTAProps {
  data: FloatingCTA
}

export interface MainCharacteristicsProps {
  data: MainCharacteristic[]
}
export interface SpecificationProps {
  data: Specification[]
}

export interface CrossSellCarouselProps {
  data: AdditionalProducts[]
}

export interface WarehouseSpecificationProps {
  metal: MetalSheetsWarehouse[]
  pallets: PalletsElementsWarehouse[]
}

export interface UseProductDataResult {
  data: ProductData
  isLoading: boolean
  error: Error | null
  isPaused: boolean
}
