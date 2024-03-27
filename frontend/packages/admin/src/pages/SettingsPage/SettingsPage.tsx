import { Box, Typography } from '@mui/joy'

import { MainLayout } from '@/components/Layouts/MainLayout'

import { PinCode } from './PinCode'

export const SettingsPage = () => {
  return (
    <MainLayout>
      <Typography
        level="h1"
        sx={{ mb: '20px' }}
      >
        Настройки
      </Typography>
      <Box sx={{ maxWidth: '200px' }}>
        <PinCode />
      </Box>
    </MainLayout>
  )
}
