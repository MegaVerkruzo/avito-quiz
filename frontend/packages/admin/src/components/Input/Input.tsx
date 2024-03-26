import {
  Box,
  InputTypeMap,
  Input as MUIInput,
  TextField,
  Typography,
} from '@mui/joy'

type InputProps = {
  label?: string
  labelStyle?: 'bold'
  isNumber?: boolean
} & InputTypeMap<object, 'div'>['props']

export const Input = ({ label, isNumber = false, ...props }: InputProps) => {
  return (
    <Box>
      {label && (
        <Typography
          fontWeight={'bold'}
          sx={{ mb: '5px' }}
        >
          {label}
        </Typography>
      )}
      <MUIInput
        {...props}
        sx={{ width: '100%', background: 'transparent', boxShadow: 'none' }}
      />
    </Box>
  )
}
