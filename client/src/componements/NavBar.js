import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DrawerRight from './ResultPage/Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

function appBarLabel(label, handleDrawerOpen, open) {
  return (
    <Toolbar>
      <Avatar>
        <Typography variant="body2">
          LOGO
        </Typography>
      </Avatar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: 'none' }) }}
      >
        <RestaurantIcon />
      </IconButton>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#376B7E",
    },
  },
});

const NavBar = (props) => {

  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" color="primary" align="center">
        {appBarLabel(props.app_name, handleDrawerOpen, open)}
      </AppBar>

      <DrawerRight open={open} handleDrawerClose={handleDrawerClose} />
    </ThemeProvider>
  );
}
export default NavBar