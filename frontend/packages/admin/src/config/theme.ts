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
          500: '#cf212e',
        },
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
    JoySelect: {
      styleOverrides: {
        button: {
          opacity: 1,
        },
      },
    },
  },
})
