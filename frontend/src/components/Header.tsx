import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <div>
      <AppBar
        sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Logo />
          <div>
            {auth?.isLoggedIn ? (
              <>
                <NavigationLink
                  bg="#00fffc"
                  to="/chat"
                  text="Go to Chat"
                  textColor="black"
                />
                <NavigationLink
                  bg="#51538F"
                  to="/"
                  text="logout"
                  textColor="white"
                  onClick={auth.logout}
                />
              </>
            ) : (
              <>
                <NavigationLink
                  bg="#00fffc"
                  to="/login"
                  text="Login"
                  textColor="black"
                />
                <NavigationLink
                  bg="#51538F"
                  to="/signup"
                  text="Signup"
                  textColor="white"
                 
                />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
