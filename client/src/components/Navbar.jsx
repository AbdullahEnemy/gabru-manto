import React from "react";
import NavbarMenu from "./NavbarMenu";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <h1 className="text-4xl font-bold">G&M</h1>
      </Link>
      <SearchBar />
      <div className="flex gap-12">
        <NavbarMenu />
        <UserIcon />
      </div>
      {/* TODO: App Drawer Here, although I don't think we need it */}
    </div>
  );
};

export default Navbar;
