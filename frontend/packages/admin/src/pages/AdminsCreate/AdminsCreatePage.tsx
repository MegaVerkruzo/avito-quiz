import { Typography } from '@mui/joy'

import { CenterContainer } from '@/components/Containers/CenterContainer'
import { CreateAdminForm } from '@/components/Forms/CreateAdminForm'
import { MainLayout } from '@/components/Layouts/MainLayout'

export const AdminsCreatePage = () => {
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
