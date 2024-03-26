import { Box, Stack, Typography } from '@mui/joy'

import { Line } from '@/assets/svgs/Line'

import { LoginForm } from './LoginForm'

export const LoginPage = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <Stack
        direction={'row'}
        sx={{ width: '100%', height: '100%' }}
      >
        <Stack
          sx={{ width: '100%', height: '100%', background: 'var(--bg-color)' }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <LoginForm />
        </Stack>
        <Stack
          sx={{ background: '#49C8FF', width: '100%', position: 'relative' }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
            sx={{
              fontStyle: 'italic',
              fontSize: '128px',
              color: 'white',
              fontWeight: '800',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2,
              lineHeight: '154.91px',
              letterSpacing: '-0.04em',

              textShadow:
                '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 6px 6px 0px #0D0D0D',
            }}
          >
            OFFICE TOURS
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          >
            <Line />
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}
