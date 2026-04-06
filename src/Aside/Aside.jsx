import { useState } from "react";
import { NavLink } from "react-router";
import {
  FaHome,
  FaUsers,
  FaBox,
  FaChartBar,
  FaCog,
  FaBars,
} from "react-icons/fa";

const Aside = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: "/dashboard", icon: <FaHome />, label: "Dashboard" },
    { path: "/dashboard/users", icon: <FaUsers />, label: "Users" },
    { path: "/dashboard/products", icon: <FaBox />, label: "Products" },
    { path: "/dashboard/analytics", icon: <FaChartBar />, label: "Analytics" },
    { path: "/dashboard/settings", icon: <FaCog />, label: "Settings" },
  ];

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      isActive ? "bg-green-600" : "hover:bg-gray-700"
    }`;

  return (
    <aside
      className={`bg-gray-900 text-white flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } min-h-screen`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-700">
        {!isCollapsed && (
          <span className="text-2xl font-bold">Admin Panel</span>
        )}
        <button
          className="text-white text-xl focus:outline-none"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FaBars />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={navItemClass}>
            {item.icon}
            {!isCollapsed && item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          Logaut
        </div>
      )}
    </aside>
  );
};

export default Aside;
