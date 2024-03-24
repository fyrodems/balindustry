'use client'

import { type UseProductDataResult } from './types'
import useProductData from './useProductData'
import PageTitle from '@/components/common/PageTitle'
import Presentation from '@/components/product/Presentation/Presentation'
import FloatingCTA from '@/components/product/FloatingCTA/FloatingCTA'
import MainCharacteristics from '@/components/product/MainCharacteristics/MainCharacteristics'
import Specification from '@/components/product/Specification/Specification'
import CrossSellCarousel from '@/components/product/CrossSellCarousel/CrossSellCarousel'
import DetailsNavigation from '@/components/product/DetailsNavigation/DetailsNavigation'
import WarehouseSpecification from '@/components/product/Specification/WarehouseSpecification'
import Loader from '@/components/common/Loader'

export default function ProductPage({
  params,
}: {
  params: { id: string; locale: string }
}) {
  const { id, locale } = params

  const { data, isLoading, error, isPaused }: UseProductDataResult =
    useProductData({
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

  console.log(data)

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
      <PageTitle content={''} />
      <main>
        <div className="laptop:grid-cols-[70%_30%] laptop:grid 2xl:grid-cols-[80%_20%]">
          <div>
            <Presentation data={data} />
            {basic_data.with_data && (
              <>
                <DetailsNavigation />
                <MainCharacteristics data={main_characteristics} />
                <Specification data={specification} />
              </>
            )}
            {basic_data.pathID === 'paintshops-installation' && (
              <MainCharacteristics data={main_characteristics} />
            )}
            {basic_data.pathID === 'vertical-warehouse' && (
              <>
                <DetailsNavigation />
                <MainCharacteristics data={main_characteristics} />
                <WarehouseSpecification
                  metal={metal_sheets}
                  pallets={pallets_elements}
                />
              </>
            )}
            <CrossSellCarousel data={additional_products} />
          </div>
          <div className="laptop:block hidden">
            <FloatingCTA data={floating_CTA} />
          </div>
        </div>
      </main>
    </>
  )
}
