import {
  Box,
  Button,
  Stack,
  Switch,
  ToggleButtonGroup,
  Typography,
} from '@mui/joy'
import { PlusIcon, TrashIcon } from '@primer/octicons-react'
import { useNavigate } from 'react-router-dom'

import { Dropdown } from '@/components/Dropdown/Dropdown'
import { MainLayout } from '@/components/Layouts/MainLayout'

import { ALL_EXCURSIONS } from '@/config/componentsData'
import { ROUTES } from '@/config/routes'

import { UsersTable } from './UsersTable/UsersTable'

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

        <Stack
          direction={'row'}
          justifyContent={'space-between'}
        >
          <Stack
            direction={'row'}
            columnGap={'20px'}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              columnGap={'12px'}
            >
              Показать только завершенных
              <Switch />
            </Stack>
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
              Удалить участников
            </Button>
          </Stack>
        </Stack>

        <UsersTable />
      </Stack>
    </MainLayout>
  )
}
