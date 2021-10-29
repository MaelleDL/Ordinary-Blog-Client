import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';


const Footer = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="md">
                <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 MaelleDl
              </Typography>
            </Toolbar>
          </Container>
          </AppBar>
      );
};

export default Footer;