import { Box, Input, Stack, Typography } from '@mui/joy'
import { InfoIcon, UploadIcon } from '@primer/octicons-react'

export const UploadImage = () => {
  return (
    <Stack rowGap={'15px'}>
      <Input
        placeholder="Загрузить картинку"
        endDecorator={<UploadIcon size={16} />}
      />
      <Stack
        direction={'row'}
        columnGap={'10px'}
      >
        <Box sx={{ minWidth: '16px' }}>
          <InfoIcon
            size={16}
            fill="var(--light-gray)"
          />
        </Box>
        <Typography sx={{ color: 'var(--light-gray)' }}>
          Загрузите файл форматом .png или .jpg с разрешением 1080×1080 весом не
          более 1МБ
        </Typography>
      </Stack>
    </Stack>
  )
}
