import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './Styles';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';


const App = () => {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Nav />
        <Home />
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
