import React from 'react';
import { Box, Container, Toolbar, Typography } from '@mui/material';


const Footer = () => {
  return (
          <Box   component="footer"
          sx={{
            py: 3,
            px: 2,
            // position: "absolute",
            // bottom: 0,
            width: "100%",
            backgroundColor: "primary.main",
            color: "primary.light"
          }}>
            <Container maxWidth="md" mt="auto">
              <Toolbar>
                <Typography variant="body1" color="inherit">
                  © 2021 MaelleDl
                </Typography>
              </Toolbar>
            </Container>
          </Box>
      );
};

export default Footer;