import { IconButton, Stack } from '@mui/joy'
import { PencilIcon, TrashIcon } from '@primer/octicons-react'

export const TableRow = () => {
  return (
    <tr>
      <td>artyom-thebest@gmail.com</td>
      <td style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Stack direction={'row'}>
          <IconButton>
            <PencilIcon size={16} />
          </IconButton>
          <IconButton>
            <TrashIcon
              size={16}
              fill="var(--danger-color)"
            />
          </IconButton>
        </Stack>
      </td>
    </tr>
  )
}
