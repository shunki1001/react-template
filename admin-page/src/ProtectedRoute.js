import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth = true;
  //   if (localStorage.getItem("user")) {
  //     return <Outlet />;
  //   } else {
  //     return <Navigate to="/signin" replace />;
  //   }
  if (!isAuth) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
