import { Button, Stack, Typography } from '@mui/joy'
import { PlusIcon, TrashIcon } from '@primer/octicons-react'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from '@/components/Dropdown/Dropdown'
import { ButtonsLayout } from '@/components/Layouts/ButtonsLayout'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { Table } from '@/components/Table/Table'

import { ALL_EXCURSIONS } from '@/config/componentsData'
import { ROUTES } from '@/config/routes'

import { TableRow } from './AchievementsTable/TableRow'

export const AchievementsPage = () => {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление ачивками
      </Typography>

      <Stack rowGap={'15px'}>
        <Typography sx={{ mb: '20px' }}>
          Вы на экскурсии “Экскурсия AVITO.TECH”
        </Typography>

        <ButtonsLayout
          left={[
            <Button
              key={1}
              startDecorator={<PlusIcon size={16} />}
              onClick={() => navigate(ROUTES.AchievementsCreate)}
            >
              Добавить ачивку
            </Button>,
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
              Удалить все
            </Button>,
          ]}
        />

        <Table
          headers={['Название', 'Баллы', 'Картинка', 'Действия']}
          rows={[<TableRow />, <TableRow />, <TableRow />, <TableRow />]}
          endAlignRight
        />
      </Stack>
    </MainLayout>
  )
}
