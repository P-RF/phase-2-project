import React from "react";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import '../Calendar.css';


function App() {
  return (  // renders NavBar and AppRoutes together without extra wrappers
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;
