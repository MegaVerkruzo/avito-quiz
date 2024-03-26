import { extendTheme } from '@mui/joy'

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          500: '#01aafe',
          600: '#039ce7',
          700: '#0389cb',
        },
        danger: {
          
        }
      },
    },
  },

  components: {
    JoyCheckbox: {
      styleOverrides: {
        checkbox: {
          borderRadius: '50%',
          padding: '10px',
        },
      },
    },
  },
})
