import React from "react";
import TopTextStrip from "../components/TopTextStrip";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ComparisonBox from "../components/ComparisonBox";

function RestaurantComparison() {
    return (
      <>
        <TopTextStrip />
        <Navbar />
        <ComparisonBox/>
        <Footer />
      </>
    );
  }
  
  export default RestaurantComparison;