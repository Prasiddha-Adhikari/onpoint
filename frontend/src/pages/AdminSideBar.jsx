import React from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminSideBar = () => {
  const navItems = [
    { label: "Edit Gallery", path: "/admindashboard/edit-gallery" },
    { label: "Edit Testimonial", path: "/admindashboard/edit-testimonial" },
    { label: "Messages", path: "/admindashboard/messages" },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication data (e.g., tokens) here
    localStorage.removeItem("authToken"); // Example for token removal
    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        <Link to="/admindashboard" className="hover:underline">
          Admin Dashboard
        </Link>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.label} className="mb-2">
              <button
                onClick={() => navigate(item.path)}
                className="block w-full px-4 py-2 text-left rounded hover:bg-gray-700"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="p-4 bg-red-600 hover:bg-red-700 text-white font-bold"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSideBar;
