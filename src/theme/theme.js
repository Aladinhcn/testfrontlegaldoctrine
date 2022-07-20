import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#e9ecef',
      paper: '#ffffff'
    },
    primary: {
      contrastText: '#000000',
      main: '#ffffff'
    },
    secondary: {
      contrastText: '#ffb703',
      main: '#ffb703'
    },
    text: {
      primary: '#000000',
      secondary: '#6b778c'
    }
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 35,
      letterSpacing: '-0.24px'
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
      letterSpacing: '-0.24px'
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: '-0.06px'
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: '-0.06px'
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      letterSpacing: '-0.05px'
    },
    h6: {
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '-0.05px'
    },
    overline: {
      fontWeight: 500
    }
  }
});

export default theme;
