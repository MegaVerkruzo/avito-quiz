import { Box, Button, Grid, Sheet, Stack, Typography } from '@mui/joy'

import { DateTimePicker } from '@/components/DateTimePicker/DateTimePicker'
import { Input } from '@/components/Input/Input'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { Select } from '@/components/Select/Select'

import { PinCode } from './PinCode'

export const SettingsPage = () => {
  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Настройки
      </Typography>

      <Sheet sx={{ p: '15px', backgroundColor: '#fff' }}>
        <Stack rowGap={'40px'}>
          <Grid
            container
            columnSpacing={'64px'}
            rowSpacing={'36px'}
          >
            <Grid md={4}>
              <Typography
                level="body-lg"
                fontWeight={'bold'}
              >
                Экран с пин-кодом
              </Typography>
            </Grid>
            <Grid md={4}>
              <Typography
                level="body-lg"
                fontWeight={'bold'}
              >
                Экран приветствия
              </Typography>
            </Grid>
            <Grid md={4}>
              <Typography
                level="body-lg"
                fontWeight={'bold'}
              >
                Экран с результатами
              </Typography>
            </Grid>
            <Grid md={4}>
              <Input
                label="Текст описания"
                placeholder="Введите текст"
                textArea
              />
            </Grid>
            <Grid md={4}>
              <Input
                label="Текст описания"
                placeholder="Введите текст"
                textArea
              />
            </Grid>
            <Grid md={4}>
              <Input
                label="Текст описания"
                placeholder="Введите текст"
                textArea
              />
            </Grid>
          </Grid>

          <Box sx={{ maxWidth: '200px' }}>
            <PinCode />
          </Box>

          <Grid
            container
            columnSpacing={'64px'}
            rowGap={'36px'}
          >
            <Grid md={4}>
              <Typography
                level="body-lg"
                fontWeight={'bold'}
              >
                Страница не найдена(404)
              </Typography>
            </Grid>
            <Grid md={4}>
              <Typography
                level="body-lg"
                fontWeight={'bold'}
              >
                Время проведения экскурсии(MSK)
              </Typography>
            </Grid>
            <Grid md={4}>
              <Typography
                level="body-lg"
                fontWeight={'bold'}
              >
                Текущая рабочая экскурсия
              </Typography>
            </Grid>
            <Grid md={4}>
              <Stack rowGap={'24px'}>
                <Input
                  label="Текст заголовка"
                  placeholder="Введите текст"
                />
                <Input
                  label="Текст описания"
                  placeholder="Введите текст"
                  textArea
                />
              </Stack>
            </Grid>
            <Grid md={4}>
              <Stack rowGap={'24px'}>
                <DateTimePicker label="Дата начала" />
                <DateTimePicker label="Дата окончания" />
              </Stack>
            </Grid>
            <Grid md={4}>
              <Select
                label="Выберите экскурсию"
                values={TEST_EXCURSIONS}
              />
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
    </MainLayout>
  )
}

const TEST_EXCURSIONS = {
  game1: { text: 'Игра AVITO.TECH' },
  game2: { text: 'Игра AVITO.TECH' },
  game3: { text: 'Игра AVITO.TECH' },
  game4: { text: 'Игра AVITO.TECH' },
}
