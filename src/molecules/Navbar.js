import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Sidebar open={isDrawerOpen} toggle={() => setIsDrawerOpen(false)} />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
