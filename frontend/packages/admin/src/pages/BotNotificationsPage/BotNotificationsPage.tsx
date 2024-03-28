import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'

import { Dropdown } from '@/components/Dropdown/Dropdown'
import { Input } from '@/components/Input/Input'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { UploadImage } from '@/components/UploadImage/UploadImage'

export const BotNotificationsPage = () => {
  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Уведомления в боте
      </Typography>
      <Stack rowGap={'15px'}>
        <Typography sx={{ mb: '20px' }}>
          Вы на экскурсии “Экскурсия AVITO.TECH”
        </Typography>

        <Sheet sx={{ p: '15px', backgroundColor: '#fff' }}>
          <Stack rowGap={'30px'}>
            <Grid
              container
              columnSpacing={'20px'}
            >
              <Grid md={4}>
                <Input
                  label="Текст сообщения"
                  placeholder="Введите текст сообщения, которое увидит пользователь"
                  textArea
                />
              </Grid>
              <Grid
                md={4}
                sx={{ maxWidth: '250px' }}
              >
                <UploadImage label="Картинка локации" />
              </Grid>
              <Grid md={4}>
                <Box sx={{ mt: '26px' }}>
                  <Dropdown
                    label="Выбрать экскурсию"
                    values={CHOOSE_EXCURSION}
                  />
                </Box>
              </Grid>
            </Grid>
            <Stack
              direction={'row'}
              justifyContent={'center'}
            >
              <Button>Сохранить изменения</Button>
            </Stack>
          </Stack>
        </Sheet>
      </Stack>
    </MainLayout>
  )
}

const CHOOSE_EXCURSION = {
  all: (
    <Stack rowGap={'10px'}>
      <Checkbox label="Отправить всем пользователям" />
      <Divider />
    </Stack>
  ),
  game1: <Checkbox label="Игра для AVITO.TECH" />,
  game2: <Checkbox label="Игра для AVITO.TECH" />,
  game3: <Checkbox label="Игра для AVITO.TECH" />,
  game4: <Checkbox label="Игра для AVITO.TECH" />,
}
