import {
  Box,
  InputTypeMap,
  Input as MUIInput,
  Textarea,
  TextareaTypeMap,
  Typography,
} from '@mui/joy'

import { InputError } from '../InputError/InputError'

type InputProps = {
  label?: string
  labelStyle?: 'normal' | 'bold'
  textArea?: boolean
  isNumber?: boolean
  textError?: string
} & InputTypeMap<object, 'div'>['props'] &
  TextareaTypeMap<object, 'div'>['props']

export const Input = ({
  label,
  labelStyle = 'normal',
  textArea = false,
  isNumber = false,
  textError,
  ...props
}: InputProps) => {
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
      {textArea ? (
        <Textarea
          minRows={6}
          {...props}
          sx={{ width: '100%', background: 'transparent', boxShadow: 'none' }}
        />
      ) : (
        <MUIInput
          {...props}
          sx={{ width: '100%', background: 'transparent', boxShadow: 'none' }}
        />
      )}
      {textError && <InputError text={textError} />}
    </Box>
  )
}
