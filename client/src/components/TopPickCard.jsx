import React from "react";

// TODO: finish this component

const TopPickCard = ({ imgUrl, name, price }) => {
  return (
    <div className="flex flex-col w-72 h-56 border-default text-lg font-mono font-bold">
      <div className="w-full h-32 border-default overflow-hidden">
        <img src={imgUrl} alt="Food" />
      </div>

      <div className="flex items-center w-full h-12 border-default bg-primary">
        <p className="mx-2">{name}</p>
      </div>

      <div className="flex">
        <div className="flex items-center w-48 h-full bg-secondary border-default">
          <p className="mx-2 text-primary">{price} PKR</p>
        </div>
        <div className="border-default">
          <button className="btn w-24 rounded-none btn-accent text-xl">
            ♥︎
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPickCard;
