import React from "react";
import { Box } from "@mui/system";

export function Happenings() {
  return (
    <div className="card-container btn5">
      <Box className="card-box">
        <div className="card-grid">
          <p className="card-emoji">💼</p>
          <button className="color5-button">
            TODAY'S
            <br />
            EVENTS
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🎶</p>
          <button className="color5-button">
            LIVE
            <br />
            MUSIC
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🗞️</p>
          <button className="color5-button">
            TODAY'S
            <br />
            NEWS
          </button>
        </div>
        <div className="card-grid">
          <p className="card-emoji">🌳</p>
          <button className="color5-button">
            HIKES
            <br />+ VIEWS
          </button>
        </div>
      </Box>
    </div>
  );
}

export default Happenings;
