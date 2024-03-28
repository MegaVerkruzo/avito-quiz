import {
  Box,
  Button,
  Grid,
  IconButton,
  Input as MUIInput,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'
import { GrabberIcon } from '@primer/octicons-react'
import { useParams } from 'react-router-dom'

import { Input } from '@/components/Input/Input'
import { MainLayout } from '@/components/Layouts/MainLayout'
import { Select } from '@/components/Select/Select'
import { UploadImage } from '@/components/UploadImage/UploadImage'

export const TaskCreate = () => {
  const { id } = useParams()

  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        {id ? 'Редактирование задания' : 'Создание задания'}
      </Typography>
      <Sheet sx={{ p: '15px', backgroundColor: '#fff' }}>
        <Stack rowGap={'40px'}>
          <Grid
            container
            columnSpacing={'60px'}
          >
            <Grid md={4}>
              <Stack rowGap={'36px'}>
                <Typography
                  level="body-lg"
                  fontWeight={'bold'}
                >
                  Локация
                </Typography>
                <Stack rowGap={'28px'}>
                  <Input
                    label="Название локации"
                    placeholder="Введите название"
                  />
                  <UploadImage label="Картинка локации" />
                </Stack>
              </Stack>
            </Grid>

            <Grid md={8}>
              <Stack rowGap={'36px'}>
                <Typography
                  level="body-lg"
                  fontWeight={'bold'}
                >
                  Задание
                </Typography>
                <Grid
                  container
                  columnSpacing={'30px'}
                >
                  <Grid md={6}>
                    <Stack rowGap={'28px'}>
                      <Input
                        label="Баллы за задание"
                        isNumber
                      />
                      <Input
                        label="Текст верного ответа"
                        placeholder="Введите текст"
                      />
                      <Input
                        label="Текст неверного ответа"
                        placeholder="Введите текст"
                      />
                    </Stack>
                  </Grid>

                  <Grid md={6}>
                    <Stack rowGap={'28px'}>
                      <Input
                        label="Текст предисловия"
                        placeholder="Введите текст"
                        textArea
                      />
                      <Input
                        label="Текст задания"
                        placeholder="Введите текст"
                        textArea
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <Stack rowGap={'30px'}>
            <Grid
              container
              columnSpacing={'30px'}
            >
              <Grid md={3}>
                <Select
                  label="Вид ответа"
                  labelPosition="top"
                  defaultValue={'buttons'}
                  values={BUTTONS_VALUES}
                />
              </Grid>
              <Grid md={4}>
                <Input
                  label="Кол-во вариантов ответа"
                  isNumber
                />
                <Input
                  label="Номер верного ответа"
                  isNumber
                />
              </Grid>
              <Grid md={5}>
                <Typography>Варианты ответа</Typography>
                <Box
                  sx={{
                    width: '100%',
                  }}
                >
                  <Grid
                    container
                    columnSpacing={'15px'}
                    rowSpacing={'10px'}
                  >
                    <Grid
                      md={6}
                      order={1}
                    >
                      <AnswerElement text={'1'} />
                    </Grid>
                    <Grid
                      md={6}
                      order={3}
                    >
                      <AnswerElement text={'2'} />
                    </Grid>
                    <Grid
                      md={6}
                      order={2}
                    >
                      <AnswerElement text={'3'} />
                    </Grid>
                    <Grid
                      md={6}
                      order={4}
                    >
                      <AnswerElement text={'4'} />
                    </Grid>

                    <Grid
                      md={6}
                      order={5}
                    >
                      <AnswerElement text={'5'} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Stack>
          <Stack
            direction={'row'}
            justifyContent={'center'}
          >
            <Button>{id ? 'Сохранить изменения' : 'Создать'}</Button>
          </Stack>
        </Stack>
      </Sheet>
    </MainLayout>
  )
}

const AnswerElement = ({ text }: { text: string }) => {
  return (
    <Stack
      direction={'row'}
      alignItems={'flex-end'}
    >
      <IconButton tabIndex={-1}>
        <GrabberIcon size={16} />
      </IconButton>
      <MUIInput
        sx={{
          border: 'none',
          borderBottom: '1px solid var(--dark-gray)',
          background: 'transparent',
          borderRadius: '0',
          boxShadow: 'none',
        }}
        value={text}
      />
    </Stack>
  )
}

const BUTTONS_VALUES = {
  buttons: {
    text: 'Кнопки',
  },
  input: {
    text: 'Поле ввода',
  },
}
