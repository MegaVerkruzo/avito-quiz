import {
  Box,
  Dropdown as MUIDropdown,
  Menu,
  MenuButton,
  MenuItem,
} from '@mui/joy'
import { TriangleDownIcon } from '@primer/octicons-react'
import { type ReactNode, useState } from 'react'

type DropdownProps<T extends string> = {
  label?: string
  values: DropdownValues<T>
}

type DropdownValues<T extends string> = {
  [key in T]: ReactNode
}

export const Dropdown = <T extends string>({
  label,
  values,
}: DropdownProps<T>) => {
  const [open, setOpen] = useState(false)

  return (
    <MUIDropdown
      open={open}
      onOpenChange={() => {
        setOpen(prev => !prev)
      }}
    >
      <MenuButton
        sx={{ fontWeight: '400' }}
        endDecorator={
          <Box
            sx={{
              transform: `rotate(${open ? 180 : 0}deg)`,
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            <TriangleDownIcon size={16} />
          </Box>
        }
      >
        {label}
      </MenuButton>
      <Menu onClose={() => console.log(123)}>
        {Object.entries<ReactNode>(values).map(([key, value]) => (
          <MenuItem key={key}>{value}</MenuItem>
        ))}
      </Menu>
    </MUIDropdown>
  )
}
