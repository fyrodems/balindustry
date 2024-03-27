'use client'

import useProductData from '../useProductData'
import PageTitle from '@/components/common/PageTitle'
import Presentation from '@/components/product/Presentation/Presentation'
import FloatingCTA from '@/components/product/FloatingCTA/FloatingCTA'
import MainCharacteristics from '@/components/product/MainCharacteristics/MainCharacteristics'
import Specification from '@/components/product/Specification/Specification'
import CrossSellCarousel from '@/components/product/CrossSellCarousel/CrossSellCarousel'
import DetailsNavigation from '@/components/product/DetailsNavigation/DetailsNavigation'
import WarehouseSpecification from '@/components/product/Specification/WarehouseSpecification'
import Loader from '@/components/common/Loader'
import PaintshopsFloatingCTA from '@/components/product/FloatingCTA/PaintshopsFloatingCTA'

export default function ProductPage({
  params,
}: {
  params: { id: string; locale: string }
}) {
  const { id, locale } = params

  const { data, isLoading, error, isPaused } = useProductData({
    locale,
    id,
  })

  const ErrorMessage = () => (
    <p className="grid min-h-[93vh] place-items-center text-center">
      Nie możemy pobrać danych
      <br />
      Sprawdź swoje połączenie internetowe
    </p>
  )

  const UnavailableMessage = () => (
    <p className="grid min-h-[93vh] place-items-center text-center">
      Dane niedostępne
    </p>
  )

  if (isPaused) {
    return <ErrorMessage />
  }

  if (isLoading && !data) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage />
  }

  if (!data) {
    return <UnavailableMessage />
  }

  const {
    basic_data,
    floating_CTA,
    main_characteristics,
    specification,
    additional_products,
    metal_sheets,
    pallets_elements,
  } = data

  return (
    <>
      <main>
        {basic_data.pathID === 'service-paintshop' ? (
          <>
            <PageTitle content={basic_data.name} />
            <p className="mx-auto -mt-8 mb-[60px] w-11/12 max-w-[1100px] text-balance text-center text-sm sm:-mt-4 sm:text-base">
              {basic_data.description}
            </p>
            <div className="laptop:grid laptop:grid-cols-[60%_40%] 2xl:grid-cols-[80%_20%]">
              <div>
                <MainCharacteristics data={main_characteristics} />
                <CrossSellCarousel data={additional_products} />
              </div>
              <div className="hidden laptop:block [&>div]:top-[400px]">
                <PaintshopsFloatingCTA data={floating_CTA} />
              </div>
            </div>
          </>
        ) : (
          <>
            <PageTitle content={''} />
            <div className="laptop:grid laptop:grid-cols-[70%_30%] 2xl:grid-cols-[80%_20%]">
              <div>
                <Presentation data={data} />
                {basic_data.with_data && (
                  <>
                    <DetailsNavigation characteristics specification />
                    <MainCharacteristics data={main_characteristics} />
                    <Specification data={specification} />
                  </>
                )}
                {basic_data.pathID === 'paintshops-installation' && (
                  <MainCharacteristics data={main_characteristics} />
                )}
                {basic_data.pathID === 'vertical-warehouse' && (
                  <>
                    <DetailsNavigation characteristics specification />
                    <MainCharacteristics data={main_characteristics} />
                    <WarehouseSpecification
                      metal={metal_sheets}
                      pallets={pallets_elements}
                    />
                  </>
                )}
                {basic_data.pathID === 'lh' && (
                  <>
                    <DetailsNavigation characteristics />
                    <MainCharacteristics data={main_characteristics} />
                  </>
                )}
                <CrossSellCarousel data={additional_products} />
              </div>
              <div className="hidden laptop:block">
                <FloatingCTA data={floating_CTA} />
              </div>
            </div>
          </>
        )}
      </main>
    </>
  )
}
