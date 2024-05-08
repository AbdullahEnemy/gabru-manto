import React from "react";
import TopTextStrip from "../components/TopTextStrip";
import Footer from "../components/Footer";
import ActionAreaCard from "../components/ActionAreaCard";

function RestaurantDetails() {
  return (
    <>
      <TopTextStrip />
      {/* Installed npm install @mui/material for this*/}
      <ActionAreaCard></ActionAreaCard>
      {/* <div className="m-8 flex h-screen ">
        <div className="w-2/6  flex flex-col ">
          <RestaurantCard></RestaurantCard>
          <div className="h-1/3 ">
            <h1 class="">Arcadian Cafe</h1>
          </div>
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-between bg-secondary">
          <div className="bg-gray-700 h-1/3 mb-4 p-4 text-white">Details</div>
          <div className="bg-gray-800 h-2/3 p-4 text-white">Menu</div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default RestaurantDetails;
