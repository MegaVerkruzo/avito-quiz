import { Typography } from '@mui/joy'
import { useParams } from 'react-router-dom'

import { CenterContainer } from '@/components/Containers/CenterContainer'
import { CreateAdminForm } from '@/components/Forms/CreateAdminForm'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const AdminsCreatePage = () => {
  const params = useParams()
  console.log(params)

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление администраторами
      </Typography>
      <CenterContainer>
        <CreateAdminForm />
      </CenterContainer>
    </MainLayout>
  )
}
