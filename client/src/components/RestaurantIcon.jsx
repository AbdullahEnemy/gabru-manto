import React from "react";

const RestaurantIcon = ({image}) => {
return(

    <div className="flex items-center">
      {image !== null && image !== undefined ? (
        <img className="w-24 rounded-full object-cover" src={image} alt="Avatar" />
      ) : (
        <div className="avatar placeholder">
        <div className="bg-accent text-neutral-content rounded-full w-24 ring ring-secondary ring-offset-base-100">
            <span className="text-3xl">R</span>
        </div>
        </div> 
      )}
    </div>

    
);

};

export default RestaurantIcon;