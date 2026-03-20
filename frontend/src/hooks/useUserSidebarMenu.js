import { useState } from "react";
import {
  FaHome,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { cn } from "../lib/utils";

const useSidebarMenu = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menuItems = [
    { name: "Dashboard", icon: FaHome, path: "/user-dashboard" },
    { name: "Settings", icon: FaCog, path: "/settings" },
    { name: "Logout", icon: FaSignOutAlt, path: "#" , isLogout: true },
  ];
 const linkStyle = ({ isActive }) =>
      cn(
     "flex items-center gap-3 p-3 text-blue-500 rounded hover:bg-gray-700 transition cursor-pointer",
     isActive && "bg-blue-500 text-white"
     );


  return { open, handleOpen, handleClose, menuItems, linkStyle };
};

export default useSidebarMenu;

// For Users Menu imported in UserSidebar
