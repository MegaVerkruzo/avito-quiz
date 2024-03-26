import { Box, Typography } from '@mui/joy'

import { CenterContainer } from '@/components/Containers/CenterContainer'
import { Container } from '@/components/Containers/Container'
import { EmptyExcursion } from '@/components/EmptyExcursion/EmptyExcursion'
import { CreateExcursionForm } from '@/components/Forms/CreateExcursionForm'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const TaskControlPage = () => {
  return (
    <MainLayout>
      <Container>
        <Box sx={{ height: '100%' }}>
          <Typography
            level="h1"
            sx={{ mb: '20px' }}
          >
            Управление заданиями
          </Typography>
          <CenterContainer>
            {/* <EmptyExcursion /> */}
            <CreateExcursionForm />
          </CenterContainer>
        </Box>
      </Container>
    </MainLayout>
  )
}
