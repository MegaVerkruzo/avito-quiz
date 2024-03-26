import { Box, Typography } from '@mui/joy'

import { Container } from '@/components/Containers/Container'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const AchievementsPage = () => {
  return (
    <MainLayout>
      <Container>
        <Box>
          <Typography
            level="h1"
            sx={{ mb: '20px' }}
          >
            Управление ачивками
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  )
}
