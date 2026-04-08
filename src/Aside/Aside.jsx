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
        <NavLink to="/dashboard" className={navItemClass}>
          <FaHome />
          {!isCollapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/dashboard/users" className={navItemClass}>
          <FaUsers />
          {!isCollapsed && <span>Users</span>}
        </NavLink>

        <NavLink to="/dashboard/add-request" className={navItemClass}>
          <FaBox />
          {!isCollapsed && <span>Add Request</span>}
        </NavLink>

        <NavLink to="/dashboard/analytics" className={navItemClass}>
          <FaChartBar />
          {!isCollapsed && <span>Analytics</span>}
        </NavLink>

        <NavLink to="/dashboard/settings" className={navItemClass}>
          <FaCog />
          {!isCollapsed && <span>Settings</span>}
        </NavLink>
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          Logout
        </div>
      )}
    </aside>
  );
};

export default Aside;
