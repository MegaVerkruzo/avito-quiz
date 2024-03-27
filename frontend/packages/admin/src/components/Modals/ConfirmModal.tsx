import { Button, Stack, Typography } from '@mui/joy'
import { useLocation, useNavigate } from 'react-router-dom'

import { BaseModal } from './BaseModal'

type ConfirmModalProps = {
  title: string
  description: string
  actionTitle?: string
}

export const ConfirmModal = ({ isOpen }: { isOpen: boolean }) => {
  const navigate = useNavigate()

  const { state } = useLocation() as { state: ConfirmModalProps }
  //   const state = {
  //     title: '123',
  //     description: '123',
  //     actionTitle: '123',
  //   }

  if (!isOpen) return null

  const { title, actionTitle, description } = state

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={() => navigate(-1)}
      modalWidth={300}
      title={title}
    >
      <Typography
        sx={{
          color: 'var(--dark-gray)',
          py: '17px',
          maxWidth: '200px',
          m: '0 auto',
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
          {actionTitle ? actionTitle : 'Удалить'}
        </Button>
        <Button
          variant="outlined"
          color="neutral"
          sx={{ width: '100%' }}
          onClick={() => navigate(-1)}
        >
          Отменить
        </Button>
      </Stack>
    </BaseModal>
  )
}
