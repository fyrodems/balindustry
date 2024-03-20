'use client'

import { type UseProductDataResult } from './types'
import useProductData from './useProductData'
import PageTitle from '@/components/common/PageTitle'
import Presentation from '@/components/product/Presentation/Presentation'
import FloatingCTA from '@/components/product/FloatingCTA/FloatingCTA'
import MainCharacteristics from '@/components/product/MainCharacteristics/MainCharacteristics'

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
  } = data

  return (
    <>
      <PageTitle content={''} />
      <main>
        <div className="laptop:grid-cols-[70%_30%] laptop:grid 2xl:grid-cols-[80%_20%]">
          <div>
            <Presentation data={data} />
            <MainCharacteristics data={main_characteristics} />
          </div>
          <div className="laptop:block hidden">
            <FloatingCTA data={floating_CTA} />
          </div>
        </div>
      </main>
    </>
  )
}
