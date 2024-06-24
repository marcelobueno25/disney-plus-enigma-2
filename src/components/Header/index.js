import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Toolbar,
  Container,
  AppBar,
  Typography,
  Avatar,
} from "@mui/material";
import { menuItems } from "../../utils/dbnavegation.js";
import disneyAppLogo from "../../assets/disney-logo.svg";
import "./style.scss";

const Header = () => {
  const user = {
    userName: "Sabrina",
  };
  return (
    <AppBar id="headerMain" position="fixed">
      <Container className="headerContainer">
        <Toolbar className="headerToolbar" disableGutters>
          <Link
          //to="/disney-plus-clone/"
          >
            <Box
              className="headerLogo"
              component="img"
              src={disneyAppLogo}
              alt="Logo of Disney+ App"
            />
          </Link>
          {user !== null && (
            <>
              <Box
                className="header"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {menuItems.map((item, index) => (
                  <Button
                    className="headerButton"
                    key={index}
                    component={Link}
                    //to={item.path}
                    //onClick={handleCloseNavMenu}
                  >
                    {item.icon}
                    <Typography className="headerTypography" variant="subtitle">
                      <span>{item.text}</span>
                    </Typography>
                  </Button>
                ))}
              </Box>
              <Box
                className="headerProfile"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
                flexGrow={0}
              >
                <Typography
                  sx={{ display: { xs: "none", md: "flex" } }}
                  padding={"10px"}
                >
                  {user.userName}
                </Typography>
                {user.userName && (
                  <Avatar alt="Profile Icon">
                    {user.userName.trim().charAt(0).toUpperCase()}
                  </Avatar>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
