import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Box,
  Button,
  Typography,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, Theme } from "@material-ui/core/styles";
//components;
import NavigationList from "./NavigationList";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#fff",
  },
  title: {
    flexGrow: 1,
  },
}));

const NavigationAppBar = () => {
  const [bOpenDrawer, setOpenDrawer] = useState<boolean>(false);

  const classes = useStyles();

  const funcToggleDrawer = () =>
    setOpenDrawer((prevBOpenDrawer) => !prevBOpenDrawer);

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            className={classes.menuButton}
            onClick={funcToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React-TS-MUI-Polygon
          </Typography>
          <Box mr={3}>
            <Button variant="outlined" color="inherit">
              Log In
            </Button>
          </Box>
          <Button variant="contained" color="secondary">
            Sign Up
          </Button>
          <Drawer anchor="left" open={bOpenDrawer} onClose={funcToggleDrawer}>
            <NavigationList onItemClick={funcToggleDrawer} />
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationAppBar;
