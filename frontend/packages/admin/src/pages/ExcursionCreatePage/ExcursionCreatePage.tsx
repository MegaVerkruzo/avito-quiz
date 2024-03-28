import { Typography } from '@mui/joy'
import { useParams } from 'react-router-dom'

import { CenterContainer } from '@/components/Containers/CenterContainer'
import { CreateExcursionForm } from '@/components/Forms/CreateExcursionForm'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const ExcursionCreatePage = () => {
  const { id } = useParams()

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
