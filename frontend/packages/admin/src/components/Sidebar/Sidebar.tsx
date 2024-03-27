import { Box, Divider, IconButton, Sheet, Stack, Typography } from '@mui/joy'
import { SignOutIcon } from '@primer/octicons-react'

import { Logo } from '@/assets/svgs/Logo'

import { RouteList } from './RouteList'

export const Sidebar = () => {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'sticky' },
        zIndex: 100,
        height: '100dvh',
        width: '330px',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Stack
        direction={'column'}
        height={'100%'}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            flexGrow: 1,
          }}
        >
          <Box sx={{ mb: { xs: '50px', lg: '70px' } }}>
            <Logo />
          </Box>
          <RouteList />
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', py: '5px' }}>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              fontWeight={'bold'}
              fontSize={'16px'}
            >
              Админ
            </Typography>
          </Box>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => {}}
          >
            <SignOutIcon size={16} />
          </IconButton>
        </Box>
      </Stack>
    </Sheet>
  )
}
