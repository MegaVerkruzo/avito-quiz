import { Box, Typography } from '@mui/joy'

import { Container } from '@/components/Containers/Container'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const BotNotificationsPage = () => {
  return (
    <MainLayout>
      <Container>
        <Box>
          <Typography
            level="h1"
            sx={{ mb: '20px' }}
          >
            Уведомления в боте
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  )
}
