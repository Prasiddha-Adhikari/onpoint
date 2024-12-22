import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from "../assets/Logo.jpg";
import Header from "./Header";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg top-0 z-50"> 
      <Header />
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-16">
        {/* Centered Logo on Mobile */}
        <div className="flex-1 flex justify-center sm:justify-start">
          <NavLink to="/" className="flex -ml-16 items-center rotate-[16deg]">
            <img src={logo} alt="logo" className="h-28 w-auto" />
          </NavLink>
        </div>

        {/* Hamburger Menu Icon (only visible on mobile) */}
        <div className="sm:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={28} className="text-green-600" /> : <FaBars size={28} className="text-green-600" />}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex space-x-6 -mr-[75px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-green-600 hover:text-gray-300 transition-all duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-green-600 hover:text-gray-300 transition-all duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-green-600 hover:text-gray-300 transition-all duration-300"
            }
          >
            Services
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="text-green-600 hover:text-gray-300 transition-all duration-300 flex items-center"
              onClick={toggleDropdown}
            >
              Courses
              <FaChevronDown size={12} className="ml-2" /> {/* Arrow icon */}
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-100 shadow-lg rounded-lg z-10">
                <NavLink
                  to="/jlpt"
                  className="block px-4 py-2 text-green-600 hover:text-gray-300"
                >
                  JLPT
                </NavLink>
                <NavLink
                  to="/nat"
                  className="block px-4 py-2 text-green-600 hover:text-gray-300"
                >
                  NAT
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/testimonial"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-green-600 hover:text-gray-300 transition-all duration-300"
            }
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-green-600 hover:text-gray-300 transition-all duration-300"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-green-600 hover:text-gray-300 transition-all duration-300"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Links with Smooth Transition */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-8 space-y-6 py-6 bg-gray-100 shadow-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-primary"
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-primary"
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-primary"
            }
            onClick={toggleMenu}
          >
            Services
          </NavLink>
          
          {/* Mobile Services Dropdown */}
          <div className="relative">
            <button
              className="text-green-600 hover:text-gray-300 transition-all duration-300 flex items-center"
              onClick={toggleDropdown}
            >
              Courses
              <FaChevronDown size={18} className="ml-2" /> {/* Arrow icon */}
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col mt-2 w-48 bg-gray-100 shadow-lg rounded-lg z-10">
                <NavLink
                  to="/jlpt"
                  className="block px-4 py-2 text-green-600 hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  JLPT
                </NavLink>
                <NavLink
                  to="/nat"
                  className="block px-4 py-2 text-green-600 hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  NAT
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/testimonial"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-primary"
            }
            onClick={toggleMenu}
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-primary"
            }
            onClick={toggleMenu}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-primary"
            }
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
