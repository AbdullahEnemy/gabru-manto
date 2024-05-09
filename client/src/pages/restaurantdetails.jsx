import React from "react";
import TopTextStrip from "../components/TopTextStrip";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DMComponent from "../components/DetailMenuComponent";
import RestaurantCard from "../components/RestaurantCard";
import GMChart from "../components/Chart";

function RestaurantDetails({ resPoint, image, name, details, menu }) {
  return (
    <>
      <TopTextStrip />
      <Navbar></Navbar>
      <div className="w-full h-full flex justify-center items-center my-20">
        <div className="w-5/6 h-5/6 flex justify-between">
          <div className="w-1/2 flex flex-col items-center">
            <div className="">
              <RestaurantCard image={image} name={name} />
            </div>
            <div className="mt-10 max-w-sm w-full p-4">
              <GMChart restaurantPoint={resPoint}></GMChart>
            </div>
          </div>
          <div className="w-1/2 bg-secondary">
            <DMComponent details={details} menu={menu} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RestaurantDetails;
