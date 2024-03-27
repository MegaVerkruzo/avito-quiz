import { Box } from '@mui/joy'
import type { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        m: '0 auto',
        px: '20px',
        height: '100%',
      }}
    >
      {children}
    </Box>
  )
}
