/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useQuery } from '@tanstack/react-query'

const useProductData = ({ locale, id }: { locale: string; id: string }) => {
  const { data, isLoading, error, isPaused } = useQuery(
    ['productById', id],
    async () => {
      const response = await fetch(`/products/${locale}/${id}.json`)
      const data = await response.json()
      return data
    },
    {
      staleTime: 600_000,
      retry: 1,
    }
  )

  return { data, isLoading, error, isPaused }
}

export default useProductData
