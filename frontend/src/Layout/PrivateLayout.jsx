import React from "react";
import AdminSidebar from "../components/navbar/AdminSidebar";
import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <AdminSidebar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default PrivateLayout;
