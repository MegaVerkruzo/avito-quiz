import { Button, Stack, Typography } from '@mui/joy'
import { PlusIcon, TrashIcon } from '@primer/octicons-react'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from '@/components/Dropdown/Dropdown'
import { MainLayout } from '@/components/Layouts/MainLayout'

import {
  ALL_EXCURSIONS,
  EXCURSION_CONTROL_VALUES,
} from '@/config/componentsData'
import { ROUTES } from '@/config/routes'

import { TaskTable } from './TaskTable/TaskTable'

export const TaskControlPage = () => {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление заданиями
      </Typography>

      <Stack rowGap={'15px'}>
        <Typography sx={{ mb: '20px' }}>
          Вы на экскурсии “Экскурсия AVITO.TECH”
        </Typography>

        <Stack
          direction={'row'}
          justifyContent={'space-between'}
        >
          <Stack
            direction={'row'}
            columnGap={'12px'}
          >
            <Button
              startDecorator={<PlusIcon size={16} />}
              onClick={() => navigate(ROUTES.AdminsCreate)}
            >
              Добавить ачивку
            </Button>
            <Dropdown
              label="Управление экскурсией"
              values={EXCURSION_CONTROL_VALUES}
            />
            <Dropdown
              label="Все экскурсии"
              values={ALL_EXCURSIONS}
            />
          </Stack>
          <Stack>
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
            </Button>
          </Stack>
        </Stack>

        <TaskTable />
      </Stack>
    </MainLayout>
  )
}
