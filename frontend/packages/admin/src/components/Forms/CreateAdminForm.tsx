import { Button, Sheet, Stack } from '@mui/joy'

import { Input } from '../Input/Input'

export const CreateAdminForm = ({
  adminId,
  login,
  isCreate = true,
}: {
  adminId?: string
  login?: string
  isCreate?: boolean
}) => {
  return (
    <Sheet
      sx={{
        p: '30px',
        boxShadow: '0px 0px 36px 0px #2C2C2C10',
        borderRadius: '15px',
        minWidth: '360px',
      }}
    >
      <Stack rowGap={'20px'}>
        <Input
          value={login}
          label="Логин администратора"
        />
        <Input label="Пароль" />
        <Button>{isCreate ? 'Создать' : 'Сохранить изменения'}</Button>
      </Stack>
    </Sheet>
  )
}
