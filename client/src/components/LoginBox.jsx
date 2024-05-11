import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const LoginBox = () => {
  return (
    <div className="flex justify-center items-center h-screen m-2">
      <div className="hero w-3/4 py-8 bordered-shadow">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* form element*/}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-secondary ml-12">
            <form className="card-body">
              
              {/* username */}
              <div className="form-control">
                <div className="label">
                  <h1 className="text-slate-200 label-text">Username</h1>
                </div>
                <label class="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" class="grow" placeholder="Username" />
                </label>
                <div className="label">
                  <h1 className="text-slate-200 label-text-alt">
                    Enter your username
                  </h1>
                </div>
              </div>

              {/* password */}
              <div className="form-control">
                <div className="label">
                  <h1 className="text-slate-200 label-text">Password</h1>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" />
                </label>
                <div className="label">
                  <h1 className="text-slate-200 label-text-alt">
                    Enter your password 
                  </h1>
                </div>
              </div>

              {/* Sign-up button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign-in</button>
              </div>
            </form>
          </div>

          {/* left text*/}
          <div className="text-center lg:text-left">
            <div className="flex flex-col gap-24 font-bold">
              <h1 className="text-[128px] py-8">G&M</h1>
            </div>
            <h1 className="font-medium py-6">
              Sign-in to continue the <br/>
              foody exploratin you <br />
              left off from!
            </h1>

            {/* bottom left text*/}
            <h1 className="font-medium py-3">
              Don't have <br />
              an account?
            </h1>
            <Link to="/signup">
            <button className="btn btn-secondary px-8">Sign-up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
