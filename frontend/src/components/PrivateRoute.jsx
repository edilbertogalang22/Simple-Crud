// components/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ requiredRole }) => {
  
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && Number(user.usertype) !== requiredRole) {
    // Logged in but not authorized
    return <Navigate to="/login" replace />;
  }

  // User is authorized — render nested routes
  return <Outlet />;
};

export default PrivateRoute;
