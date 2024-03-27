import { Checkbox, IconButton, Stack } from '@mui/joy'
import { GrabberIcon, PencilIcon, TrashIcon } from '@primer/octicons-react'

import { ImageWithPlaceholder } from '@/components/ImageWithPlaceholder/ImageWithPlaceholder'

export const TableRow = () => {
  return (
    <tr>
      <td>
        <IconButton>
          <GrabberIcon size={16} />
        </IconButton>
      </td>
      <td>1</td>

      <td>
        <Checkbox />
      </td>

      <td>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </td>

      <td>Название локации</td>

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
