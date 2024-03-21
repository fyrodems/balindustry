import { createContext, useState } from 'react'

export interface SelectedFileContextType {
  index: number
  changeIndex: (e: number) => void
}

export const SelectedContext = createContext<SelectedFileContextType | null>(
  null
)

const SelectedContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [index, setIndex] = useState<number>(0)

  const changeIndex = (e: number) => {
    setIndex(e)
  }

  const value = { index, changeIndex }
  return (
    <SelectedContext.Provider value={value}>
      {children}
    </SelectedContext.Provider>
  )
}

export default SelectedContextProvider
