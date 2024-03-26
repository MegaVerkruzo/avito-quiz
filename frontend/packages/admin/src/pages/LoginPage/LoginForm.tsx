import { Button, Sheet, Stack, Typography } from '@mui/joy'

import { Input } from '@/components/Input/Input'

export const LoginForm = () => {
  return (
    <Sheet
      sx={{
        backgroundColor: 'white',
        padding: '149px 89px',
        boxShadow: '0px 0px 97.8px 0px #00000010',
        borderRadius: '15px',
        minWidth: '500px',
      }}
    >
      <Typography
        level="h2"
        sx={{ mb: '60px' }}
      >
        Вход в систему
      </Typography>

      <Stack rowGap={'20px'}>
        <Input label="Логин" />
        <Input label="Пароль" />
        <Button>Войти</Button>
      </Stack>
    </Sheet>
  )
}
