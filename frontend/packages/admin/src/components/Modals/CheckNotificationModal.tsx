import { Box, Button, Stack, Typography } from '@mui/joy'
import { useLocation, useNavigate } from 'react-router-dom'

import { ImageWithPlaceholder } from '../ImageWithPlaceholder/ImageWithPlaceholder'
import { BaseModal } from './BaseModal'

type CheckNotificationModalProps = {
  title: string
  description: string
  img?: string
}

export const CheckNotificationModal = ({ isOpen }: { isOpen: boolean }) => {
  const navigate = useNavigate()

  const { state } = useLocation() as { state: CheckNotificationModalProps }

  if (!isOpen) return null

  const { title, description, img } = state

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={() => navigate(-1)}
      modalWidth={500}
      title={title}
    >
      <Box sx={{ maxWidth: '200px', m: '0 auto' }}>
        <ImageWithPlaceholder
          isSquare
          src={img}
        />
      </Box>

      <Typography
        sx={{
          color: 'var(--dark-gray)',
          py: '17px',
          textAlign: 'left',
        }}
      >
        {description}
      </Typography>
      <Stack
        direction={'row'}
        columnGap={'15px'}
      >
        <Button
          onClick={() => {
            navigate(-1)
          }}
          sx={{ width: '100%' }}
        >
          Отправить
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          sx={{ width: '100%' }}
          onClick={() => navigate(-1)}
        >
          Вернуться
        </Button>
      </Stack>
    </BaseModal>
  )
}
