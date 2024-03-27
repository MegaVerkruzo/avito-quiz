import { Typography } from '@mui/joy'
import { useLocation } from 'react-router-dom'

import { CenterContainer } from '@/components/Containers/CenterContainer'
import { CreateAdminForm } from '@/components/Forms/CreateAdminForm'
import { MainLayout } from '@/components/Layouts/MainLayout'

type AdminsUpdatePageProps = {
  adminId: string
  login: string
}

export const AdminsUpdatePage = () => {
  const {
    state: { adminId, login },
  } = useLocation() as { state: AdminsUpdatePageProps }

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление администраторами
      </Typography>
      <CenterContainer>
        <CreateAdminForm
          adminId={adminId}
          login={login}
          isCreate={false}
        />
      </CenterContainer>
    </MainLayout>
  )
}
