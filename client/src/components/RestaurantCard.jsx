import React from "react";

const RestaurantCard = ({ imgUrl, name }) => {
  return (
    <div className="flex flex-col w-72 h-56 border-default text-lg font-mono font-bold">
      <div className="w-full h-32 border-default">
        <img src={imgUrl} alt="Restaurant" />
      </div>

      <div className="flex items-center w-full h-12 border-default bg-secondary justify-center text-primary">
        <p className="text-2xl">{name}</p>
      </div>

      <div className="flex">
        <div className="border-default w-full">
          <button className="btn w-full rounded-none btn-accent text-lg">
            VISIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;