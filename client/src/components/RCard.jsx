import * as React from "react";

export default function RestaurantCard({ image, name }) {
  return (
    <div className="max-w-sm rounded overflow-hidden border border-black	">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="text-center px-6 py-4 text-primary bg-secondary">
        <h1 className="text-2xl	p-5">{name}</h1>
      </div>
    </div>
  );
}
