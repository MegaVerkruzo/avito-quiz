import { Box, Button, Stack, Typography } from '@mui/joy'
import { PlusIcon } from '@primer/octicons-react'
import { useNavigate } from 'react-router-dom'

import { MainLayout } from '@/components/Layouts/MainLayout'

import { ROUTES } from '@/config/routes'

import { AdminTable } from './AdminsTable/AdminTable'

export const AdminsPage = () => {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление администраторами
      </Typography>

      <Stack rowGap={'15px'}>
        <Box sx={{ maxWidth: '300px' }}>
          <Button
            startDecorator={<PlusIcon size={16} />}
            onClick={() => navigate(ROUTES.AdminsCreate)}
          >
            Добавить администратора
          </Button>
        </Box>
        <AdminTable />
      </Stack>
    </MainLayout>
  )
}
