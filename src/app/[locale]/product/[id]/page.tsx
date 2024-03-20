'use client'

import { type UseProductDataResult } from './types'
import useProductData from './useProductData'
import PageTitle from '@/components/common/PageTitle'
import Presentation from '@/components/product/Presentation/Presentation'
import FloatingCTA from '@/components/product/FloatingCTA/FloatingCTA'
import MainCharacteristics from '@/components/product/MainCharacteristics/MainCharacteristics'
import Specification from '@/components/product/Specification/Specification'
import CrossSellCarousel from '@/components/product/CrossSellCarousel/CrossSellCarousel'
import { Link } from '@/navigation'

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

  /*   if (isPaused) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t('Check your internet connection')}
      </p>
    )
  }

  if (isLoading && !data) {
    return <Loader />
  }

  if (error) {
    return (
      <p>
        {t("Data couldn't be downloaded")}
        <br />
        {t('Please try again later')}
      </p>
    )
  }
  */

  if (!data) {
    return <span>Dane niedostępne</span>
  }

  console.log(data)

  const {
    basic_data,
    floating_CTA,
    images,
    parameters,
    main_characteristics,
    specification,
    additional_products,
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
                <div className="laptop:flex mx-[20px] hidden justify-around bg-zinc-800 p-4 px-10 text-white">
                  <Link href="#characteristics">Cechy</Link>
                  <div className="h-[20px] w-[1px] bg-white"></div>
                  <Link href="#specification">Od producenta</Link>
                  <div className="h-[20px] w-[1px] bg-white"></div>
                  <Link href="#carousel">Podobne produkty</Link>
                </div>
                <MainCharacteristics data={main_characteristics} />
                <Specification data={specification} />
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
