import { Box, Sheet } from '@mui/joy'
import type { ReactNode } from 'react'

import { Sidebar } from '../Sidebar/Sidebar'

export const SidebarLayout = ({ children }: { children: ReactNode }) => {
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
