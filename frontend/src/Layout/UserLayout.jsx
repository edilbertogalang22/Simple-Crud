import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/navbar/UserSidebar";

const UserLayout = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <UserNavbar />

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;


