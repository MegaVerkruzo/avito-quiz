import { Typography } from '@mui/joy'

import { CenterContainer } from '@/components/Containers/CenterContainer'
import { CreateExcursionForm } from '@/components/Forms/CreateExcursionForm'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const ExcursionCreatePage = () => {
  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление администраторами
      </Typography>
      <CenterContainer>
        <CreateExcursionForm />
      </CenterContainer>
    </MainLayout>
  )
}
