import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import RestaurantDetails from "./pages/restaurantdetails";
import RestaurantComparison from "./pages/RestaurantComparison";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<RestaurantDetails />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/compare" element={<RestaurantComparison />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
