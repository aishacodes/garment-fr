import React, { Fragment, useState } from "react";
import LogoIcon from "../icons/LogoIcon";
import CloseIcon from "../icons/CloseIcon";

import { toggleAuthWidget } from "../../entities/platformEntity";

const Auth = () => {
  const [mode, setMode] = useState("signup");

  return (
    <div className="Auth">
      <div className="bg-white w-96 p-6 pb-12">
        <div className="flex items-center justify-center relative pt-5">
          <div
            className="absolute right-0 top-0 link"
            onClick={toggleAuthWidget}
          >
            <CloseIcon />
          </div>
          <LogoIcon size="60" />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid gap-y-4 py-5"
        >
          {mode === "login" ? (
            <Fragment>
              <input type="email" className="input" placeholder="Email" />
              <input type="password" placeholder="Password" className="input" />
            </Fragment>
          ) : (
            <Fragment>
              <input type="text" className="input" placeholder="First Name" />
              <input type="text" className="input" placeholder="Last Name" />

              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
            </Fragment>
          )}

          <button className="border border-gray-900 bg-gray-900 text-white py-2 font-semibold">
            {mode === "login" ? "Log in" : "Sign up"}
          </button>

          <p className="flex justify-center text-sm">
            <span className="mr-1">
              {mode === "signup"
                ? "Do you have an account?"
                : "Don't have an account?"}
            </span>

            <span
              onClick={() => setMode(mode === "signup" ? "login" : "signup")}
              className="text-gray-900 font-bold cursor-pointer hover:underline"
            >
              {mode === "login" ? "Sign up" : "Log in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
