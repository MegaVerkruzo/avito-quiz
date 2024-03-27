import { Stack } from '@mui/joy'
import { type ReactNode, memo } from 'react'

export const ButtonsLayout = memo(
  ({ left, right }: { left: ReactNode[]; right: ReactNode[] }) => {
    return (
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
      >
        <Stack
          direction={'row'}
          columnGap={'12px'}
        >
          {...left}
        </Stack>
        <Stack>{...right}</Stack>
      </Stack>
    )
  },
)
