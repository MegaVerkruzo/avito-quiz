import { IconButton, Stack } from '@mui/joy'
import { HistoryIcon, TrashIcon } from '@primer/octicons-react'

export const TableRow = () => {
  return (
    <tr>
      <td>232332323232</td>
      <td>120</td>

      <td>15/20</td>
      <td>
        <Stack
          direction={'row'}
          sx={{ width: '100%' }}
          justifyContent={'flex-end'}
        >
          <Stack direction={'row'}>
            <IconButton>
              <HistoryIcon size={16} />
            </IconButton>
            <IconButton>
              <TrashIcon
                size={16}
                fill="var(--danger-color)"
              />
            </IconButton>
          </Stack>
        </Stack>
      </td>
    </tr>
  )
}
