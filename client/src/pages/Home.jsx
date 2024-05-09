import React from "react";
import TopTextStrip from "../components/TopTextStrip";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopPickCard from "../components/TopPickCard";
import RestaurantCard from "../components/RestaurantCard";

function Home() {
  return (
    <>
      <TopTextStrip />
      <Navbar />

      {/* Hero Section */}
      <div className="hero my-36">
        <div className="hero-content flex">
          <div className="flex flex-col gap-24 font-bold">
            <h1 className="text-[128px]">GABRU</h1>
            <h1 className="text-[128px]">& MANTO.</h1>
          </div>
          <img className="ml-16" src="home-hero-graphic.png" alt="" />
        </div>
      </div>

      {/* Top Picks Section */}

      <div className="flex flex-col mx-20">
        <h1 className="mb-8">Top Picks For You.</h1>

        {/* TODO: Make this a scrollable daisy component or just use scroll-x */}
        {/* TODO: render this through a loop on database */}
        <div className="flex justify-center gap-16 border-y-2 border-secondary py-8 overflow-scroll">
          <TopPickCard imgUrl={""} name={"Apple Crumble Pie"} price={"299"} />
          <TopPickCard imgUrl={""} name={"Apple Crumble Pie"} price={"299"} />
          <TopPickCard imgUrl={""} name={"Apple Crumble Pie"} price={"299"} />
          <TopPickCard imgUrl={""} name={"Apple Crumble Pie"} price={"299"} />
        </div>
      </div>

      <div className="flex flex-col page-section mb-16">
        <h1>Gabru-Manto Selections.</h1>

        <div className="flex justify-between mt-12">
          <div className="selections-section">
            <div className="selections-title">
              <h1>Gabru</h1>
            </div>

            <div className="flex flex-wrap mt-16 gap-16 justify-center">
              <RestaurantCard imgUrl={""} name={"Arcadian Cafe"} />
              <RestaurantCard imgUrl={""} name={"Arcadian Cafe"} />
              <RestaurantCard imgUrl={""} name={"Arcadian Cafe"} />
              <RestaurantCard imgUrl={""} name={"Arcadian Cafe"} />
            </div>
          </div>

          <div className="selections-section">
            <div className="selections-title">
              <h1>Manto</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
