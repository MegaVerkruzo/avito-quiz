import { Box, Input as MUIInput, Textarea, Typography } from '@mui/joy'

import { InputError } from '../InputError/InputError'

type DateTimePickerProps = {
  label?: string
  labelStyle?: 'normal' | 'bold'
  textError?: string
}

export const DateTimePicker = ({
  label,
  labelStyle = 'normal',
  textError,
}: DateTimePickerProps) => {
  return (
    <Box>
      {label && (
        <Typography
          fontWeight={labelStyle}
          sx={{ mb: '5px' }}
        >
          {label}
        </Typography>
      )}

      <MUIInput
        type="datetime-local"
        sx={{ width: '100%', background: 'transparent', boxShadow: 'none' }}
      />
      {textError && <InputError text={textError} />}
    </Box>
  )
}
