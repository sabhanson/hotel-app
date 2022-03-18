import React from "react";
import { Box } from "@mui/system";

export function Reservation() {
  return (
    <div className="card-container btn2">
      <Box className="card-box">
        <div className="card-grid">
          <p className="card-emoji">📋</p>
          <p className="card-caption">
            reservation
            <br />
            details
          </p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🧹</p>
          <p className="card-caption">
            request
            <br />
            housekeeping
          </p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🔔</p>
          <p className="card-caption">
            check
            <br />
            status
          </p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">💬</p>
          <p className="card-caption">
            front
            <br />
            desk
          </p>
        </div>
      </Box>
    </div>
  );
}
export default Reservation;
