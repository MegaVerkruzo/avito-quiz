import { Box } from '@mui/joy'
import type { ReactNode } from 'react'

import { Container } from '../Containers/Container'
import { SidebarLayout } from './SidebarLayout'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarLayout>
      <Container>
        <Box sx={{ height: '100%' }}>{children}</Box>
      </Container>
    </SidebarLayout>
  )
}
