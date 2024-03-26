import { Stack } from '@mui/joy'
import type { ReactNode } from 'react'

export const CenterContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      sx={{
        height: '100%',
      }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      {children}
    </Stack>
  )
}
