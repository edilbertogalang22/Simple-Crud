import { useState } from "react";
const useNavbarMenu = () => {
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Contact", path: "/contact" },
    { name: "Register", path: "/register" },
    { name: "Login", path: "/login" },
  ];

  const navStyle = ({ isActive }) =>
    isActive
      ? "bg-indigo-100 rounded px-4 py-2 text-black"
      : "hover:bg-blue-100 rounded px-2 transition duration-300 ";

      return { open, handleOpen, handleClose, menuItems, navStyle };
};

export default useNavbarMenu;

// for Public Layout Navbar