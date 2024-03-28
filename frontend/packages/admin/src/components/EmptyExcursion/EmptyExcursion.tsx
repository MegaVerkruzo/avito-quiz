import { Box, Button, Stack, Typography } from '@mui/joy'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/config/routes'

export const EmptyExcursion = () => {
  const navigate = useNavigate()

  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      rowGap={'20px'}
    >
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '29.05px',
          textAlign: 'center',
          color: 'var(--text-gray)',
        }}
      >
        На данный момент не было начато ни одной экскурсии. Нажмите на кнопку
        чтобы создать первую экскурсиюw
      </Typography>
      <Box>
        <Button
          sx={{ px: '30px' }}
          onClick={() => navigate(ROUTES.ExcursionCreate)}
        >
          Создать экскурсию
        </Button>
      </Box>
    </Stack>
  )
}
