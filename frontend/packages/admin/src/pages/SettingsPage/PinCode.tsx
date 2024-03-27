import { Box, Input, Stack, Typography } from '@mui/joy'

export const PinCode = () => {
  return (
    <Stack rowGap={'8px'}>
      <Typography>Пин-код игры</Typography>
      <Stack
        direction={'row'}
        columnGap={'8px'}
      >
        <PinCodeCell />
        <PinCodeCell />
        <PinCodeCell />
        <PinCodeCell />
      </Stack>
    </Stack>
  )
}

const PinCodeCell = () => {
  return (
    <Box sx={{ width: '32px', height: '41px' }}>
      <Input sx={{ height: '100%' }} />
    </Box>
  )
}
