import Button from "../Button";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useAdminSidebarMenu from "../../hooks/useAdminSidebarMenu";
const AdminSidebar = () => {
  const { open, handleOpen, handleClose, menuItems, linkStyle } =
    useAdminSidebarMenu();

  return (
    <>
      <header className="md:hidden flex justify-between items-center p-4 bg-gray-100 shadow">
        <h1 className="font-bold text-lg">Hi Admin</h1>
        <Button className="bg-white" onClick={handleOpen}>
          ☰
        </Button>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={handleClose}
        />
      )}

      <aside
        className={cn(
          "bg-gray-800 text-white h-screen w-64 transition-transform duration-300 z-50",
          // sa mobile, sliding effect ng sidebar
          "fixed top-0 left-0 md:static md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo Mobile Close */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                <FaHome className="w-5 h-5 text-white" />
              </div>
              <span>Dashboard</span>
            </div>
            <Button
              className="md:hidden bg-transparent p-1 rounded"
              onClick={handleClose}
            >
              ✖
            </Button>
          </div>
          {/* Navigation */}

          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {menuItems.map((item) => {
                const Icon = item.icon;

                // If item has action (Logout)
                if (item.action) {
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          item.action();
                          handleClose();
                        }}
                        className="flex items-center gap-3 p-3 w-full text-left text-blue-500 rounded hover:bg-gray-700 transition"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </button>
                    </li>
                  );
                }

                // Normal navigation
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={linkStyle}
                      onClick={handleClose}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">John Doe</p>
                <p className="text-xs text-gray-400 truncate">
                  john@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
export default AdminSidebar;
