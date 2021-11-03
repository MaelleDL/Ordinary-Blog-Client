import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import background from "./images/background.jpg";

export const theme = createTheme({
  palette: {
    primary: {
      light:'#f3f3f3',
      main: '#1e292b',
    },
    secondary: {
      main: '#C0DCED',

      contrast: '#E4BE5B',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root:{
          backgroundColor: '#1e292b',
        }
      }
    }
  }
});

export const useStyles = makeStyles((theme) => ({
  logo: {
    fontFamily: '"Satisfy", cursive !important',
  },
  home: {
    background: `url(${background})`,
    backgroundSize: "cover",
    maxWidth: "100% !important",
    height: "100vh",
    display: "flex !important",
    alignItems: "center"
  },
  welcome: {
    background: '#f3f3f3',
    borderRadius: "0.5rem",
    boxShadow: "2rem 1rem 2rem #1e292b",
  }
}));


