import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Reservation from "./pages/Reservation";
// import Restaurant from "./pages/Restaurant";
// import SpaFitness from "./pages/SpaFitness";
// import Happenings from "./pages/Happenings";

function App() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   if (currentPage === "HOME") {
  //     return <Home />;
  //   }
  //   if (currentPage === "DASHBOARD") {
  //     return <Dashboard />;
  //   }
  //   if (currentPage === "MY RESERVATION") {
  //     return <Reservation />;
  //   }
  //   if (currentPage === "RESTAURANT") {
  //     return <Restaurant />;
  //   }
  //   if (currentPage === "SPA + FITNESS") {
  //     return <SpaFitness />;
  //   }
  //   if (currentPage === "HAPPENINGS") {
  //     return <Happenings />;
  //   }
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Navigation
      // currentPage={currentPage}
      // handlePageChange={handlePageChange}
      />
      {/* {renderPage()} */}
    </div>
  );
}

export default App;
