import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TopTextStrip from "../components/TopTextStrip";
import Footer from "../components/Footer";
import DashboardAccount from "../components/DashboardAccount";
import DashboardSecurity from "../components/DashboardSecurity";
import DashboardFavorites from "../components/DashboardFavorites";
import DashboardFeedback from "../components/DashboardFeedback";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // The four menus
  let menus = [
    <DashboardAccount />,
    <DashboardSecurity />,
    <DashboardFavorites />,
    <DashboardFeedback />,
  ];

  // testing
  let [currentMenu, setCurrentMenu] = useState();

  const activateMenu = (event) => {
    menus.forEach((_, index) => {
      if (index === event) setCurrentMenu(menus[index]);
    });
  };

  return (
    <>
      <TopTextStrip />
      <Navbar />

      <div className="page-section border-default mb-16 flex items-center">
        {/* Side Menu */}
        <div className="flex flex-col w-1/4 h-fit bg-secondary items-center">
          <div className="m-8">
            <h1 className="text-primary">
              {/* TODO: add user's name */}
              Hi, <span className="font-bold">Hassan Mudassir.</span>
            </h1>
            {/* Buttons */}
            <div className="flex flex-col gap-8 mt-16">
              <button
                className="dashboard-nav-btn"
                onClick={() => activateMenu(0)}
              >
                Account
              </button>
              <button
                className="dashboard-nav-btn"
                onClick={() => activateMenu(1)}
              >
                Security
              </button>
              <button
                className="dashboard-nav-btn"
                onClick={() => activateMenu(2)}
              >
                Favorites
              </button>
              <button
                className="dashboard-nav-btn"
                onClick={() => activateMenu(3)}
              >
                Feedback
              </button>
            </div>

            {/* SideMenu footer */}
            <div className="flex justify-between items-center mt-20">
              <Link to={"/"}>
                <button className="btn btn-circle btn-accent">
                  <img className="w-5 mr-2" src="btn-arrow.svg" alt="" />
                </button>
              </Link>
              <h1 className="text-[64px] text-neutral font-bold">G&M</h1>
            </div>
          </div>
        </div>

        {/* Render Menu Here */}
        <div className="m-16">{currentMenu}</div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
