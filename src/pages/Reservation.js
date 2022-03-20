import React from "react";
import { Box } from "@mui/system";

export function Reservation() {
  return (
    <div className="card-container btn2">
      <Box className="card-box">
        <div className="card-grid">
          <p className="card-emoji">📋</p>
          <button className="color2-button">
            RESERVATION
            <br />
            DETAILS
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🧹</p>
          <button className="color2-button">
            REQUEST
            <br />
            HOUSEKEEPING
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🔔</p>
          <button className="color2-button">
            CHECK
            <br />
            STATUS
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">💬</p>
          <button className="color2-button">
            FRONT
            <br />
            DESK
          </button>
        </div>
      </Box>
    </div>
  );
}
export default Reservation;
