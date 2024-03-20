import DesktopPresentation from './DesktopPresentation'
import MobilePresentation from './MobilePresentation'
import { type ProductDataProps } from '@/app/[locale]/product/[id]/types'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const Presentation: React.FC<ProductDataProps> = ({ data }) => {
  const { width } = useWindowDimensions()

  return (
    <>
      {width && width < 992 ? (
        <MobilePresentation data={data} />
      ) : (
        <DesktopPresentation data={data} />
      )}
    </>
  )
}

export default Presentation
