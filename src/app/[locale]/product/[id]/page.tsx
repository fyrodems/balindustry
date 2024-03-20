'use client'

import Carousel from '@/components/product/Carousel/Carousel'
import { Content } from './content'
import { type UseProductDataResult } from './types'
import useProductData from './useProductData'
import PageTitle from '@/components/common/PageTitle'
import Presentation from '@/components/product/Presentation/Presentation'

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
      {/* <Carousel images={images} /> */}
      <main>
        <Presentation data={data} />
      </main>
    </>
  )
}
