import React from "react";

// TODO: make this functional

const UserIcon = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabindex="0" role="button" id="user-avatar">
        <div className="w-20 rounded-full">
          <img
            alt="User Profile"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <ul tabIndex="0" id="navbar-user-menu">
        <li>
          <p>Dashboard</p>
        </li>
        <li>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default UserIcon;
