import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// Layout folder import
import PublicLayout from "./Layout/PublicLayout";
import PrivateLayout from "./Layout/PrivateLayout";
import UserLayout from "./Layout/UserLayout";
// Components folder import
import PrivateRoute from "./components/PrivateRoute";
// Page folder Import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
// Admin folder import
import AdminDashboard from "./pages/dashboard/admin-panel/AdminDashboard";
import AdminUsersManage from "./pages/dashboard/admin-panel/AdminUsersManage";
import UserDashboard from "./pages/dashboard/user-panel/UserDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      {/* Protected Admin Routes */}
      <Route element={<PrivateRoute requiredRole={1} />}>
        <Route element={<PrivateLayout />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-users" element={<AdminUsersManage />} />
        </Route>
      </Route>

      {/* Protected User Routes */}
      <Route element={<PrivateRoute requiredRole={2} />}>
        <Route element={<UserLayout />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>
      </Route>

      {/* Fallback Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
