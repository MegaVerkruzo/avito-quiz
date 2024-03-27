import { Box, Button, Stack, Typography } from '@mui/joy'
import { useNavigate } from 'react-router-dom'

import { MainLayout } from '@/components/Layouts/MainLayout'
import { Table } from '@/components/Table/Table'

import { TableRow } from './UserHistoryTable/TableRow'

export const UserHistoryPage = () => {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        История действий игрока 23423423423
      </Typography>

      <Stack rowGap={'15px'}>
        <Box>
          <Button
            variant="outlined"
            color="neutral"
            onClick={() => navigate(-1)}
          >
            Вернуться на страницу игроков
          </Button>
        </Box>

        <Table
          headers={[
            'Номер задания',
            'Текст задания',
            'Ответ пользователя',
            'Полученные баллы',
            'Время ответа',
          ]}
          rows={[
            <TableRow />,
            <TableRow />,
            <TableRow />,
            <TableRow />,
            <TableRow />,
          ]}
        />
      </Stack>
    </MainLayout>
  )
}
