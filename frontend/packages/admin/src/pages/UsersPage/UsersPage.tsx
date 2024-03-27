import { Button, Stack, Switch, Typography } from '@mui/joy'
import { TrashIcon } from '@primer/octicons-react'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from '@/components/Dropdown/Dropdown'
import { ButtonsLayout } from '@/components/Layouts/ButtonsLayout'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { Table } from '@/components/Table/Table'

import { ALL_EXCURSIONS } from '@/config/componentsData'

import { TableRow } from './UsersTable/TableRow'

export const UsersPage = () => {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление участниками
      </Typography>

      <Stack rowGap={'15px'}>
        <Typography sx={{ mb: '20px' }}>
          Вы на экскурсии “Экскурсия AVITO.TECH”
        </Typography>

        <ButtonsLayout
          left={[
            <Stack
              key={1}
              direction={'row'}
              alignItems={'center'}
              columnGap={'12px'}
            >
              Показать только завершенных
              <Switch />
            </Stack>,
            <Dropdown
              key={2}
              label="Все экскурсии"
              values={ALL_EXCURSIONS}
            />,
          ]}
          right={[
            <Button
              onClick={() => {}}
              variant="outlined"
              color="danger"
              startDecorator={
                <TrashIcon
                  size={16}
                  fill="var(--danger-color)"
                />
              }
            >
              Удалить участников
            </Button>,
          ]}
        />

        <Table
          headers={[
            'ID участника',
            'Кол-во баллов',
            'Пройдено заданий',
            'Действия',
          ]}
          rows={[
            <TableRow />,
            <TableRow />,
            <TableRow />,
            <TableRow />,
            <TableRow />,
          ]}
          endAlignRight
        />
      </Stack>
    </MainLayout>
  )
}
