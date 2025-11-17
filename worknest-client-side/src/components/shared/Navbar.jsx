import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-gray-200 ">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-0">
        <div className="flex items-center justify-between whitespace-nowrap  py-4">
          <div className="flex items-center gap-4 text-primary ">
            <Link>
              <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">
                WorkNest
              </h2>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to={"/login"}>
              <button className="btn-secondary">Login</button>
            </Link>
            <Link to={"/signup"}>
              <button className="btn-primary h-10">
                <span className="truncate">Sign Up</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
