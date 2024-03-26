import { Box, Grid, Typography } from '@mui/joy'

import { Container } from '@/components/Containers/Container'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const AdminsPage = () => {
  return (
    <MainLayout>
      <Container>
        <Box>
          <Typography
            level="h1"
            sx={{ mb: '20px' }}
          >
            Управление администраторами
          </Typography>

          {/* <Grid
            container
            spacing={'30px'}
            margin={0}
          >
            <div>132</div>
          </Grid> */}
        </Box>
      </Container>
    </MainLayout>
  )
}
