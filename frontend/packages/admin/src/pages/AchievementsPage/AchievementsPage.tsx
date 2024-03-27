import { Box, Button, IconButton, Stack, Typography } from '@mui/joy'
import { PlusIcon, TrashIcon } from '@primer/octicons-react'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from '@/components/Dropdown/Dropdown'
import { MainLayout } from '@/components/Layouts/MainLayout'

import { ALL_EXCURSIONS } from '@/config/componentsData'
import { ROUTES } from '@/config/routes'

import { AchievementsTable } from './AchievementsTable/AchievementsTable'

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

        <AchievementsTable />
      </Stack>
    </MainLayout>
  )
}
