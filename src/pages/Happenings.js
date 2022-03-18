import React from "react";
import { Box } from "@mui/system";

export function Happenings() {
  return (
    <div className="card-container btn5">
      <Box className="card-box">
        <div className="card-grid">
          <p className="card-emoji">💼</p>
          <p className="card-caption">events</p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🎶</p>
          <p className="card-caption">
            live
            <br />
            music
          </p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🗞️</p>
          <p className="card-caption">news</p>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🌳</p>
          <p className="card-caption">
            hikes
            <br />+ views
          </p>
        </div>
      </Box>
    </div>
  );
}

export default Happenings;
