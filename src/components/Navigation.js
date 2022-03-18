import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import "./styles/Navigation.css";
import Dashboard from "./../pages/Dashboard";
import Reservation from "./../pages/Reservation";
import Restaurant from "./../pages/Restaurant";
import SpaFitness from "./../pages/SpaFitness";
import Happenings from "./../pages/Happenings";

const drawerWidth = 300;

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState("DASHBOARD");

  const renderPage = () => {
    if (currentPage === "DASHBOARD") {
      return <Dashboard />;
    }
    if (currentPage === "MY RESERVATION") {
      return <Reservation />;
    }
    if (currentPage === "RESTAURANT") {
      return <Restaurant />;
    }
    if (currentPage === "SPA + FITNESS") {
      return <SpaFitness />;
    }
    if (currentPage === "HAPPENINGS") {
      return <Happenings />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
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
        <h1 onClick={() => handlePageChange("DASHBOARD")}>🌠</h1>
        <ul>
          {[
            "DASHBOARD",
            "MY RESERVATION",
            "RESTAURANT",
            "SPA + FITNESS",
            "HAPPENINGS",
          ].map((text, index) => (
            <li>
              <button
                className={`btn${index + 1} btn-style`}
                onClick={() => handlePageChange(text)}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
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
      {renderPage()}
    </Box>
  );
}
