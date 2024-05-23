// src/theme.js
import { createTheme } from '@mui/material/styles';

const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#606C38',
    },
    secondary: {
      main: '#DDA15E',
      contrastText: '#283618',
    },
    success: {
      main: '#283618',
    },
    text: {
      primary: '#283618',
    },
    divider: '#283618',
    background: {
      default: '#fffff5',
    },
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontFamily: 'Arvo',
    },
    h2: {
      fontFamily: 'Arvo',
    },
    h3: {
      fontFamily: 'Arvo',
    },
    h4: {
      fontFamily: 'Arvo',
    },
    h5: {
      fontFamily: 'Arvo',
    },
    h6: {
      fontFamily: 'Arvo',
    },
    button: {
      fontFamily: 'Arvo',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
