import React from "react";

function DMComponent({ details, menu }) {
  return (
    <div className="text-primary">
      <div className="m-10 mt-20">
        <h1 className="text-lg font-bold">Details</h1>
        <div className="bg-neutral p-5 mt-6 ">
          <p>{details}</p>
        </div>
      </div>
      <div className="m-10">
        <h1 className="text-lg font-bold">Menu</h1>
        <div className="bg-neutral p-5 mt-6">
          <p>{menu}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DMComponent;
