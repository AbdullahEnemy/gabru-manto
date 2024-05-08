import React from "react";
import { Link } from "react-router-dom";

// TODO: visualize active link

const NavbarMenu = () => {
  return (
    <div id="navbar-menu">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/compare">
        <p>Compare</p>
      </Link>
    </div>
  );
};

export default NavbarMenu;
