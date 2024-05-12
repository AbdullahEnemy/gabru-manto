import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res = await response.json();

      console.log(res.status);

      if (response.ok) {
        window.localStorage.setItem("token", res.token);
        window.localStorage.setItem("role", res.data.userType);
        window.localStorage.setItem("loggedIn", true);

        window.location.href = "/";
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen m-2">
      <div className="hero w-3/4 py-8 bordered-shadow">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* form element*/}
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-secondary ml-12">
            <form className="card-body" onSubmit={handleSubmit}>
              {/* email */}
              <div className="form-control">
                <div className="label">
                  <h1 className="text-slate-200 label-text">Email</h1>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <div className="label">
                  <h1 className="text-slate-200 label-text-alt">
                    Enter your email
                  </h1>
                </div>
              </div>

              {/* password */}
              <div className="form-control">
                <div className="label">
                  <h1 className="text-slate-200 label-text">Password</h1>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <div className="label">
                  <h1 className="text-slate-200 label-text-alt">
                    Enter your password
                  </h1>
                </div>
              </div>

              {/* Sign-in button */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign-in
                </button>
              </div>
            </form>
          </div>

          {/* left text*/}
          <div className="text-center lg:text-left">
            <div className="flex flex-col gap-24 font-bold">
              <h1 className="text-[128px] py-8">G&M</h1>
            </div>
            <h1 className="font-medium py-6">
              Sign-in to continue the <br />
              food exploration you <br />
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
}
