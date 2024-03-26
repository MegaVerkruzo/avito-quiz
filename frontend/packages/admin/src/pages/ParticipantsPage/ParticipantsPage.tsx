import { Box, Typography } from '@mui/joy'

import { Container } from '@/components/Containers/Container'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const ParticipantsPage = () => {
  return (
    <MainLayout>
      <Container>
        <Box>
          <Typography
            level="h1"
            sx={{ mb: '20px' }}
          >
            Управление участниками
          </Typography>
        </Box>
      </Container>
    </MainLayout>
  )
}
