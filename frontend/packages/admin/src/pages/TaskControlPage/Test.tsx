import { Typography } from '@mui/joy'

import { MainLayout } from '@/components/Layouts/MainLayout'

export const TestPage = () => {
  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Управление заданиями
      </Typography>
    </MainLayout>
  )
}
