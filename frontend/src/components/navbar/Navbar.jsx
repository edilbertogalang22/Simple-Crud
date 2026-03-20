import { NavLink } from "react-router-dom";
import useNavbarMenu from "../../hooks/useNavbarMenu";
const Navbar = () => {
  const { open, handleOpen, handleClose, menuItems, navStyle } =
    useNavbarMenu();

  return (
    <nav className="bg-blue-800 text-white ">
      <div className="w-full px-10 uppercase">
        <div className="flex justify-between items-center h-16 text-2xl">
          <div className="font-bold">
            <h1 className="">USM</h1>
          </div>

          <div className="hidden md:flex space-x-8 ml-auto">
            {menuItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={navStyle}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div>
            <button className="md:hidden  " onClick={handleOpen}>
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
        {open && (
          <div className="fixed inset-0 z-50 bg-black/70 flex flex-col items-center justify-center space-y-6 md:hidden">
            {/* class="fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden opacity-100 pointer-events-auto"*/}
            <button
              className="absolute top-5 right-5 text-2xl"
              onClick={handleClose}
            >
              ✖
            </button>

            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={navStyle}
                onClick={handleClose}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
