import React from "react";
import { Box } from "@mui/system";
import Trees from "../images/pexels-matthew-montrone-1179229.jpg";

export function Dashboard() {
  return (
    <div className="dashboard btn1">
      <div className="welcome-wrapper">
        <h1 className="dash-welcome">
          welcome to <br /> Vancouver
        </h1>
      </div>
      <img width={"600px"} src={Trees}></img>
    </div>
  );
}
export default Dashboard;
