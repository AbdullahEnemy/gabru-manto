import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className="flex gap-4 text-accent">
      <Link to="/">Home</Link>
      <h1>|</h1>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default FooterMenu;
