import { IconButton, Typography } from '@mui/joy'
import { TrashIcon } from '@primer/octicons-react'

import { SaveIcon } from '@/assets/svgs/SaveIcon'
import { TurnOffAllIcon } from '@/assets/svgs/TurnOffAllIcon'
import { TurnOnAllIcon } from '@/assets/svgs/TurnOnAllIcon'

export const ALL_EXCURSIONS = {
  ex1: (
    <Typography
      endDecorator={
        <IconButton onClick={() => console.log(123)}>
          <TrashIcon size={16} />
        </IconButton>
      }
    >
      Игра для AVITO.TECH
    </Typography>
  ),
  ex2: (
    <Typography
      endDecorator={
        <IconButton>
          <TrashIcon size={16} />
        </IconButton>
      }
    >
      Игра для AVITO.TECH
    </Typography>
  ),
  ex3: (
    <Typography
      endDecorator={
        <IconButton>
          <TrashIcon size={16} />
        </IconButton>
      }
    >
      Игра для AVITO.TECH
    </Typography>
  ),
  ex4: (
    <Typography
      endDecorator={
        <IconButton>
          <TrashIcon size={16} />
        </IconButton>
      }
    >
      Игра для AVITO.TECH
    </Typography>
  ),
}

export const EXCURSION_CONTROL_VALUES = {
  turnOnAll: (
    <Typography startDecorator={<TurnOnAllIcon />}>
      Включить все задания
    </Typography>
  ),
  turnOfAll: (
    <Typography startDecorator={<TurnOffAllIcon />}>
      Выключить все задания
    </Typography>
  ),
  save: (
    <Typography startDecorator={<SaveIcon />}>Скопировать экскурсию</Typography>
  ),
}
