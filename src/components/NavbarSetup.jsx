import React from "react";
import logo from "../assets/logo-png.png";
import { Link } from "react-router-dom";
import { Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavbarSetup = () => {
  return (
    <>
      {/** NAVBAR */}
      <nav className=" bg-indigo-200 w-full flex relative justify-between items-center mx-auto px-8 h-20">
        {/* logo */}
        <div className="inline-flex ml-4">
          <a className="_o6689fn" href="/">
            <div className="hidden md:block">
              <img src={logo} width={60} height={25} />
            </div>
            <div className="block md:hidden">
              <img src={logo} width={60} height={25} />
            </div>
          </a>
        </div>
        {/* end logo */}
        {/* search bar */}
        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <button
                className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border bg-white  rounded-full px-1  py-1"
                type="button"
              >
                <div className="block flex-grow flex-shrink overflow-hidden">
                  Start your search
                </div>
                <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: 12,
                      width: 12,
                      stroke: "currentcolor",
                      strokeWidth: "5.33333",
                      overflow: "visible",
                    }}
                  >
                    <g fill="none">
                      <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <a
                className="inline-block py-2 px-3 hover:bg-indigo-300 rounded-full"
                href="#"
              >
                <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                <Badge badgeContent={1} color="error">
                <ShoppingCartIcon fontSize='medium' />

                </Badge>
                </div>
              </a>
            </div>
            <div className="block">
              <div className="inline relative">
              <a
                className="inline-block py-2 px-3 hover:bg-indigo-300 rounded-full"
                href="#"
              >
                <div className="flex items-center relative cursor-pointer font-bold whitespace-nowrap">
                  Login
                </div>
              </a>
              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav>

    </>
  );
};

export default NavbarSetup;
