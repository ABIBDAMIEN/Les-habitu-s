import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#399AB3',
      light: '#F7FBFD',
      dark: '#225C6B',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#173E48',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#ff0000',
      contrastText: '#FFFFFF'
    },
  },
  typography: {
    button: {
      textTransform: "none"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        outlined: {
          borderWidth: "1px "
        },
        root: {
          // Some CSS
          boxShadow: "none",
          fontFamily: "Poppins",
          letterSpacing: 'initial',
          fontWeight: 500,
          ":hover": {
            boxShadow: "none",
          }
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          letterSpacing: 'initial'
        }
      }
    }
  }
})
