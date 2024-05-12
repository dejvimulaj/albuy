import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavbarSetup from "./components/NavbarSetup";

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? (

   <>
   <NavbarSetup>
    </NavbarSetup>
      <Outlet />
      <footer className=" rounded-lg shadow m-4 bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl  p-4 md:flex md:items-center md:justify-between">
    <span className="text-md text-white font-extrabold sm:text-center ">
      © 2024{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        ALBuy™
      </a>
      . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-md text-white font-extrabold sm:mt-0">
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">
          About
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">
          Licensing
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </li>
    </ul>
  </div>
</footer>

   </> 
   
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
