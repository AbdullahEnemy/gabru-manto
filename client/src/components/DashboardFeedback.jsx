import React from "react";

const DashboardFeedback = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <input
          type="text"
          className="input font-mono input-bordered rounded-none"
          placeholder="Feedback"
        />
        <button className="btn bg-secondary text-primary rounded-none font-mono">
          Submit
        </button>
      </div>
    </>
  );
};

export default DashboardFeedback;
