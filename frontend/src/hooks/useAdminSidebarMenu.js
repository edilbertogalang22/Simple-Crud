import { useState } from "react";
import { FaHome, FaBook, FaClipboardList, FaChartLine, FaUsers, FaComments, FaFolderOpen, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { cn } from "../lib/utils";
import { logout } from "../helper/AdminAuthLogout.js";
import { useNavigate } from "react-router-dom";
const useAdminSidebarMenu = () => {
  const navigate = useNavigate();
 const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    logout(navigate);
  }

  const menuItems = [
    { name: "Dashboard", icon: FaHome, path: "/admin-dashboard" },
    { name: "Manage Users", icon: FaUsers, path: "/manage-users" },
    // { name: "Manage Courses", icon: FaBook, path: "/manage-courses" },
    // {
    //   name: "Manage Assignments",
    //   icon: FaClipboardList,
    //   path: "/manage-assignments",
    // },
    // { name: "Reports & Analytics", icon: FaChartLine, path: "/reports" },
    // { name: "Discussions", icon: FaComments, path: "/admin-discussions" },
    // { name: "Resources", icon: FaFolderOpen, path: "/admin-resources" },
    // { name: "Settings", icon: FaCogs, path: "/admin-settings" },
    { name: "Logout", icon: FaSignOutAlt, action: handleLogout },
  ];

    const linkStyle = ({ isActive }) =>
     cn(
    "flex items-center gap-3 p-3 text-blue-500 rounded hover:bg-gray-700 transition cursor-pointer",
    isActive && "bg-blue-500 text-white"
)


  return { open, handleOpen, handleClose, menuItems, linkStyle };
};
export default useAdminSidebarMenu;