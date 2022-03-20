import React from "react";
import { Box } from "@mui/system";

export function Restaurant() {
  return (
    <div className="card-container btn3">
      <Box className="card-box">
        <div className="card-grid">
          <p className="card-emoji">🍲</p>
          <button className="color3-button">
            WEEKLY
            <br />
            SPECIALS
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🍽️</p>
          <button className="color3-button">
            TODAY'S
            <br />
            HOURS
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">📜</p>
          <button className="color3-button">
            OUR
            <br />
            MENU
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">💬</p>
          <button className="color3-button">
            HOST
            <br />
            STAND
          </button>
        </div>
      </Box>
    </div>
  );
}
export default Restaurant;
