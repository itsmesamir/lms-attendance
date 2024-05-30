import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoute = ({ path, children, ...rest }: any) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route path={path} {...rest}>
      {isAuthenticated ? children : <Navigate to="/login" replace />}
    </Route>
  );
};

export default PrivateRoute;
