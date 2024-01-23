import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./shared/Logo";

const Header = () => {
  return (
    <div>
      <AppBar
        sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex" }}>
            <Logo/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
