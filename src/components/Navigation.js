import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import "./styles/Navigation.css";

const drawerWidth = 300;

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <h1>🌠</h1>
        <Divider />
        <List>
          {["DASHBOARD", "MY RESERVATION", "SPA + FITNESS", "HAPPENINGS"].map(
            (text, index) => (
              <ListItem>
                <button
                  className={`btn${index}`}
                  onClick={() => handlePageChange(text)}
                >
                  {text}
                </button>
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
      {/* <div className="card-container">
        <Box className="card-box">
          <div className="card-grid">one</div>
          <div className="card-grid">two</div>
          <div className="card-grid">three</div>
          <div className="card-grid">four</div>
        </Box>
      </div> */}
    </Box>
  );
}
