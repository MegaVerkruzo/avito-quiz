import { IconButton, Stack } from '@mui/joy'
import { PencilIcon, TrashIcon } from '@primer/octicons-react'

import { ImageWithPlaceholder } from '@/components/ImageWithPlaceholder/ImageWithPlaceholder'

export const TableRow = () => {
  return (
    <tr>
      <td>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </td>
      <td>10</td>

      <td>
        <ImageWithPlaceholder />
      </td>
      <td>
        <Stack
          direction={'row'}
          sx={{ width: '100%' }}
          justifyContent={'flex-end'}
        >
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
        </Stack>
      </td>
    </tr>
  )
}
