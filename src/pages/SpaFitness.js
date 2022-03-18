import React from "react";
import { Box } from "@mui/system";

export function SpaFitness() {
  return (
    <div className="card-container btn4">
      <Box className="card-box">
        <div className="card-grid">
          <p className="card-emoji">🏊‍♀️</p>
          <p className="card-caption">
            pool
            <br />
            hours
          </p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🏋️</p>
          <p className="card-caption">
            gym
            <br />
            hours
          </p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">💆‍♀️</p>
          <p className="card-caption">
            book
            <br />
            an appt
          </p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">💬</p>
          <p className="card-caption">
            fitness
            <br />
            desk
          </p>
        </div>
      </Box>
    </div>
  );
}
export default SpaFitness;
