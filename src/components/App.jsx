import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hot from "./Hot";
import Juicy from "./Juicy";
import Cozy from "./Cozy";

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hot />} />
        <Route path="/juicy" element={<Juicy />} />
        <Route path="/cozy" element={<Cozy />} />
      </Routes>
    </Router>
  );
}
