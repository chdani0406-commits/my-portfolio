import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6B7C5C',
      light: '#8A9E78',
      dark: '#4A6741',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C8A882',
      contrastText: '#2C2C2C',
    },
    background: {
      default: '#F5F0E8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#6B6B6B',
      disabled: '#A0A0A0',
    },
    divider: '#D8D0C4',
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#6B7C5C',
          '&:hover': {
            backgroundColor: '#4A6741',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#6B7C5C',
        },
      },
    },
  },
});

export default theme;
