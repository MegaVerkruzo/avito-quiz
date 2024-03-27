import {
  Box,
  Select as MUISelect,
  Option,
  Typography,
  selectClasses,
} from '@mui/joy'
import { TriangleDownIcon } from '@primer/octicons-react'
import type { ReactNode } from 'react'

type SelectProps<T extends string> = {
  label?: string
  values: SelectValues<T>
  currentValue?: T
  onChange?: (s: T) => void
}

type SelectValueType = {
  text: string
  icon?: ReactNode
}

type SelectValues<T extends string> = {
  [key in T]: SelectValueType
}

export const Select = <T extends string>({
  label,
  values,
  onChange,
  currentValue,
}: SelectProps<T>) => {
  return (
    <Box>
      <MUISelect
        sx={{
          width: '100%',
          background: 'transparent',
          boxShadow: 'none',
          [`& .${selectClasses.indicator}`]: {
            transition: '0.2s',
            [`&.${selectClasses.expanded}`]: {
              transform: 'rotate(-180deg)',
            },
          },
        }}
        placeholder={label}
        value={currentValue}
        onChange={(_, newValue) => {
          newValue && onChange && onChange(newValue)
        }}
        indicator={<TriangleDownIcon size={12} />}
      >
        {values &&
          Object.entries<SelectValueType>(values).map(([key, value]) => {
            return (
              <Option
                key={key}
                value={key}
              >
                <Typography startDecorator={value.icon}>
                  {value.text}
                </Typography>
              </Option>
            )
          })}
      </MUISelect>
    </Box>
  )
}
