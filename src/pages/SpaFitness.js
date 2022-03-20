import React from "react";
import { Box } from "@mui/system";

export function SpaFitness() {
  return (
    <div className="card-container btn4">
      <Box className="card-box">
        <div className="card-grid">
          <p className="card-emoji">🏊‍♀️</p>
          <button className="color4-button">
            POOL
            <br />
            HOURS
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🏋️</p>
          <button className="color4-button">
            GYM
            <br />
            HOURS
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">💆‍♀️</p>
          <button className="color4-button">
            BOOK
            <br />
            AN APPT
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">💬</p>
          <button className="color4-button">
            FITNESS
            <br />
            DESK
          </button>
        </div>
      </Box>
    </div>
  );
}
export default SpaFitness;
