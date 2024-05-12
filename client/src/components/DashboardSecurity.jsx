import React from "react";

// TODO: implement security and error handling

const DashboardSecurity = () => {
  return (
    <>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <input
            type="password"
            className="input input-bordered rounded-none font-mono"
            name=""
            id=""
            placeholder="Old Password"
          />
          <input
            type="password"
            className="input input-bordered rounded-none font-mono"
            name=""
            id=""
            placeholder="New Password"
          />
        </div>
        <button className="btn btn-accent font-mono rounded-none">
          Change Password
        </button>
      </div>
    </>
  );
};

export default DashboardSecurity;
