'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DataContextProvider from '../context/dataContext'

interface Props {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export const TanstackWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    {' '}
    <DataContextProvider>{children} </DataContextProvider>
  </QueryClientProvider>
)
