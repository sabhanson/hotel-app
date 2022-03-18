import React from "react";
import { Box } from "@mui/system";

export function Restaurant() {
  return (
    <div className="card-container btn3">
      <Box className="card-box">
        <div className="card-grid">
          <p className="card-emoji">🍲</p>
          <p className="card-caption">
            weekly
            <br />
            specials
          </p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🍽️</p>
          <p className="card-caption">hours</p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">📜</p>
          <p className="card-caption">menu</p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">💬</p>
          <p className="card-caption">
            host
            <br />
            stand
          </p>
        </div>
      </Box>
    </div>
  );
}
export default Restaurant;
