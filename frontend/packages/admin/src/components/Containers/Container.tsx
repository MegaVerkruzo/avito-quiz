import { Box } from '@mui/joy'
import { FC } from 'react'

export const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
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
