import { Box, Button, Stack, Typography } from '@mui/joy'
import { PlusIcon } from '@primer/octicons-react'
import { useNavigate } from 'react-router-dom'

import { MainLayout } from '@/components/Layouts/MainLayout'
import { Table } from '@/components/Table/Table'

import { ROUTES } from '@/config/routes'

import { TableRow } from './AdminsTable/TableRow'

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

        <Table
          headers={['Логин администратора', 'Действия']}
          rows={[<TableRow />, <TableRow />, <TableRow />, <TableRow />]}
          endAlignRight
        />
      </Stack>
    </MainLayout>
  )
}
