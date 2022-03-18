import React from "react";
import { Box } from "@mui/system";

export function Restaurant() {
  return (
    <div className="card-container">
      <Box className="card-box">
        <div className="card-grid">one</div>
        <div className="card-grid">two</div>
        <div className="card-grid">three</div>
        <div className="card-grid">four</div>
      </Box>
    </div>
  );
}
export default Restaurant;
