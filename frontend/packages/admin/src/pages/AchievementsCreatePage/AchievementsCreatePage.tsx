import { Button, Grid, Sheet, Stack, Typography } from '@mui/joy'
import { useParams } from 'react-router-dom'

import { Input } from '@/components/Input/Input'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { UploadImage } from '@/components/UploadImage/UploadImage'

export const AchievementsCreatePage = () => {
  const { id } = useParams()

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        {id ? 'Редактирование ачивки' : 'Создание ачивки'}
      </Typography>
      <Sheet sx={{ p: '15px', backgroundColor: '#fff' }}>
        <Stack rowGap={'40px'}>
          <Grid
            container
            columnSpacing={'64px'}
          >
            <Grid md={4}>
              <Stack rowGap={'28px'}>
                <Typography
                  level="body-lg"
                  fontWeight={'bold'}
                >
                  Ачивка
                </Typography>
                <Stack rowGap={'24px'}>
                  <Input
                    label="Название ачивки"
                    placeholder="Введите название"
                  />
                  <UploadImage label="Картинка ачивки" />
                </Stack>
              </Stack>
            </Grid>
            <Grid md={4}>
              <Stack rowGap={'28px'}>
                <Typography
                  level="body-lg"
                  fontWeight={'bold'}
                >
                  Условия получения
                </Typography>
                <Stack rowGap={'24px'}>
                  <Input
                    label="Количество баллов для получения"
                    isNumber
                  />
                  <Input
                    label='Текст для кнопки "Поделиться"'
                    placeholder="Введите текст"
                  />
                </Stack>
              </Stack>
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
