import { Typography } from '@mui/joy'

import { MainLayout } from '@/components/Layouts/MainLayout'

export const BotNotificationsPage = () => {
  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Уведомления в боте
      </Typography>
    </MainLayout>
  )
}
