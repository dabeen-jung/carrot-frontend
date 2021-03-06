import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Box, Container, Grid, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

type MenuType = {
  title: string;
  icon: JSX.Element; //컴포넌트
};
// 스타일 객체 선언
const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};
const BottomAppBar = (): JSX.Element => {
  const menuItems: MenuType[] = [
    {
      title: "홈",
      icon: <HomeIcon />,
    },
    {
      title: "동네생활",
      icon: <ArticleOutlinedIcon />,
    },
    {
      title: "내 근처",
      icon: <LocationOnOutlinedIcon />,
    },
    {
      title: "채팅",
      icon: <ChatOutlinedIcon />,
    },
    {
      title: "나의 당근",
      icon: <AccountCircleOutlinedIcon />,
    },
  ];
  return (
    <main>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            {menuItems.map((item: MenuType): JSX.Element => {
              return (
                <Grid item xs key={item.title}>
                  <Box display="flex" justifyContent="center">
                    <Button
                      variant="contained"
                      size="large"
                      disableElevation
                      style={MenuStyle}
                    >
                      {item.icon}
                      {item.title}
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default BottomAppBar;
