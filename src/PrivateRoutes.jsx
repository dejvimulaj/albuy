import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavbarSetup from "./components/NavbarSetup";

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? (
    <NavbarSetup>
      <Outlet />
    </NavbarSetup>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
