import { Box, Sheet } from '@mui/joy'
import { FC } from 'react'

import { Sidebar } from '../Sidebar/Sidebar'

export const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Sheet
        component="main"
        sx={{
          width: '100%',
          py: '60px',
          background: 'var(--bg-color)',
        }}
      >
        {children}
      </Sheet>
    </Box>
  )
}
