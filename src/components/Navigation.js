import React, { useState } from "react";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Divider,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Dashboard from "./../pages/Dashboard";
import Reservation from "./../pages/Reservation";
import Restaurant from "./../pages/Restaurant";
import SpaFitness from "./../pages/SpaFitness";
import Happenings from "./../pages/Happenings";
import "./styles/Navigation.css";

const drawerWidth = "25%";

export default function Navigation() {
  // const [active, setActive] = useState(false);
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
                className={
                  currentPage === `${text}`
                    ? `btn${index + 1} btn-style active`
                    : `btn${index + 1} btn-style`
                }
                onClick={() => handlePageChange(text)}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
        <Divider />
        <div className="setting-div">
          <button className="icon-button">
            <SettingsIcon fontSize="large" className="icon" />
          </button>
        </div>
      </Drawer>
      {renderPage()}
    </Box>
  );
}
