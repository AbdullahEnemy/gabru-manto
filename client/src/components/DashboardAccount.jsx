import React from "react";

// TODO: connect backend and add props

const DashboardAccount = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div>
          <p>Username:</p>
          <h1>hmudassir</h1>
        </div>

        <div>
          <p>Email:</p>
          <h1>hassan@gmail.com</h1>
        </div>

        <div className="flex gap-16">
          <div>
            <p>First Name:</p>
            <h1>Hassan</h1>
          </div>
          <div>
            <p>Last Name:</p>
            <h1>Mudassir</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAccount;
