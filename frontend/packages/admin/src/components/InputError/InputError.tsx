import { Stack, Typography } from '@mui/joy'
import { AlertFillIcon } from '@primer/octicons-react'

export const InputError = ({ text }: { text: string }) => {
  return (
    <Stack
      sx={{ mt: '6px' }}
      direction={'row'}
      columnGap={'8px'}
    >
      <AlertFillIcon
        size={16}
        fill="var(--danger-color)"
      />
      <Typography sx={{ color: 'var(--danger-color)', lineHeight: '15.73px' }}>
        {text}
      </Typography>
    </Stack>
  )
}
