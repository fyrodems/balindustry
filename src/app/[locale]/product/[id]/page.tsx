'use client'

import PageTitle from '@/components/common/PageTitle'
import { Content } from './content'
import useProductData from './useProductData'

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

  if (!data) {
    return <p>{t('Data is not available')}</p>
  } */

  console.log(data)

  return (
    <>
      <PageTitle content={params.id} />
    </>
  )
}
