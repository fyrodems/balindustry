import { useState, useEffect } from 'react'
import { type FileData } from '../../server/interfaces'

const useFilesData = (files: File[] | null) => {
  const [data, setData] = useState<FileData[] | null>(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (files) {
        const getData = async () => {
          const content = new FormData()

          for (let i = 0; i <= files.length - 1; i++)
            content.append(`files`, files[i])
          try {
            const res = await fetch('../api/convertModel', {
              // const res = await fetch('http://localhost:4002/convertModel', {
              // const res = await fetch('../app/api/convertModel', {
              method: 'POST',
              body: content,
            })

            setIsLoading(true)
            if (res.status === 200) {
              const results = (await res.json()) as FileData[]
              setData(results)

              setIsLoading(false)
            }
          } catch (error_) {
            setError(error_ as string)
          }
        }

        await getData()
      }
    })()
  }, [files])

  return { data, error, setData, isLoading }
}

export default useFilesData
