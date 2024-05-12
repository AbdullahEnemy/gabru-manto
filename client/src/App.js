import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantDetails from "./pages/restaurantdetails";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RestaurantComparison from "./pages/RestaurantComparison";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<RestaurantDetails />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/compare" element={<RestaurantComparison />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
