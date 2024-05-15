import React, { useState } from "react";
import RestaurantIcon from "./RestaurantIcon";

// user can add restaurant details as 2 restaurant objects given as parameters

const ComparisonBox = ({ Restaurant1, Restaurant2 }) => {
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);

  const handleAccordionClick = (index, accordion) => {
    if (accordion === 1) {
      setSelectedItem1((prevSelectedItem) => {
        if (prevSelectedItem === index) {
          setSelectedItem2(null); // Deselect corresponding item in accordion 2
          return null;
        }
        setSelectedItem2(index); // Select corresponding item in accordion 2
        return index;
      });
    } else if (accordion === 2) {
      setSelectedItem2((prevSelectedItem) => {
        if (prevSelectedItem === index) {
          setSelectedItem1(null); // Deselect corresponding item in accordion 1
          return null;
        }
        setSelectedItem1(index); // Select corresponding item in accordion 1
        return index;
      });
    }
  };
  return (
    <div
      className="m-6 flex flex-row justify-center space-x-16"
      id="comparisonbox"
    >
      <div className="RestaurantCompMenu">
        <div className="flex flex-row items-center py-3 space-x-8">
          <RestaurantIcon image={Restaurant1.imgUrl} />
          <span>{Restaurant1.name}</span>
        </div>
        <div>
          {/* Accordion 1 */}
          <div className="space-y-3">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`collapse collapse-plus ${
                  index === selectedItem1 ? "bg-accent" : "bg-secondary"
                }  rounded-none`}
                onClick={() => {
                  handleAccordionClick(index, 1);
                  handleAccordionClick(index, 2);
                }}
              >
                <input
                  type="radio"
                  name="my-accordion-1"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-xl font-medium text-primary items-center justify-center">
                  <span className="text-sm">Comparison Property</span>
                </div>
                <div className="collapse-content">
                  <p className="text-xs">Details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="RestaurantCompMenu">
        <div className="flex flex-row items-center py-3 space-x-8">
          <RestaurantIcon image={Restaurant2.imgUrl} />
          <span>{Restaurant2.name}</span>
        </div>
        {/* Accordion 2 */}
        <div className="space-y-3">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`collapse collapse-plus ${
                index === selectedItem2 ? "bg-accent" : "bg-secondary"
              }  rounded-none`}
              onClick={() => {
                handleAccordionClick(index, 1);
                handleAccordionClick(index, 2);
              }}
            >
              <input
                type="radio"
                name="my-accordion-2"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium text-primary">
                <span className="text-sm">Comparison Property</span>
              </div>
              <div className="collapse-content">
                <p className="text-xs">Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonBox;
