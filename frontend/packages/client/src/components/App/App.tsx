import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <Outlet />
      </div>
    </QueryClientProvider>
  )
}

export default App
