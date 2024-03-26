import { Button, Sheet, Stack, Typography } from '@mui/joy'

import { Input } from '../Input/Input'

export const CreateExcursionForm = () => {
  return (
    <Sheet
      sx={{
        p: '30px',
        boxShadow: '0px 0px 36px 0px #2C2C2C10',
        borderRadius: '15px',
      }}
    >
      <Stack rowGap={'40px'}>
        <Typography level="h3">Введите название экскурсии</Typography>
        <Stack rowGap={'20px'}>
          <Input placeholder="Например: Экскурсия AVITO.TECH" />
          <Button>Создать</Button>
        </Stack>
      </Stack>
    </Sheet>
  )
}
