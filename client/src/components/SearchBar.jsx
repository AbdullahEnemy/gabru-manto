import React from "react";

// TODO: implement search bar functionality
// TODO: remove blue border on searchbox select

const SearchBar = () => {
  return (
    <label className="navbar-search-bar bordered-shadow h-10">
      <input
        type="text"
        className="shrink-0 w-[600px] ml-4 bg-base-100"
        placeholder="Search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="w-4 h-4 opacity-70 mr-4"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
  );
};

export default SearchBar;
