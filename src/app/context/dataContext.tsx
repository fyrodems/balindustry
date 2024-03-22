import { createContext, useEffect, useState } from 'react'
import useFilesData from '../../hooks/useFilesData'

export interface FileContextType {
  data: null
  backendConnector: ({
    filesArray,
    isReady,
  }: {
    filesArray: File[]
    isReady: boolean
  }) => number | void
  error: string
  isLoading: boolean
  updateData: ({
    index,
    key,
    value,
  }: {
    index: any
    key: any
    value: any
  }) => void
}

export const DataContext = createContext<FileContextType | null>(null)

const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[] | null>(null)
  const [modelsData, setModelsData] = useState([])
  const { data, error, isLoading, setData } = useFilesData(uploadedFiles)

  useEffect(() => {
    setModelsData(data)
  }, [data])

  const backendConnector = ({
    filesArray,
    isReady,
  }: {
    filesArray: File[]
    isReady: boolean
  }) => {
    if (isReady) {
      setUploadedFiles(filesArray)
    } else {
      setData(null)
    }
  }
  /**
   * Nadpisuje wartości dla każdego z załadowych plików. Przyjmuje indeks, klucz do zmiany i nową wartość
   * @param {index, key, value}
   */

  const updateData = ({ index, key, value }) => {
    const newArray = [...modelsData]
    newArray[index][key] = value
    setModelsData(newArray)
  }

  const value = { data, backendConnector, error, isLoading, updateData }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataContextProvider
