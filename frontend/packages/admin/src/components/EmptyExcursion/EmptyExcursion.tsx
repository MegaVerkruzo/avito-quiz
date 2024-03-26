import { Box, Button, Stack, Typography } from '@mui/joy'

export const EmptyExcursion = () => {
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
        чтобы создать первую экскурсию
      </Typography>
      <Box>
        <Button sx={{ px: '30px' }}>Создать экскурсию</Button>
      </Box>
    </Stack>
  )
}
