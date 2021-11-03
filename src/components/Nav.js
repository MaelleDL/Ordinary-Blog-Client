import {AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { useStyles } from '../Styles';


const Nav = () => {
    const classes = useStyles();
    return (
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.logo} variant="h4" sx={{ flexGrow: 1 }}>
                Ordinary Blog
              </Typography>
              <Button color="inherit">Se connecter</Button>
            </Toolbar>
          </AppBar>
      );
};

export default Nav;