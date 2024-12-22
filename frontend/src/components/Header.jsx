import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex bg-primary text-white justify-between items-center p-2 sm:px-6 md:px-10 lg:px-20">
      {/* Left section with contact no and address (hidden on small screens) */}
      <div className="space-x-6 text-xs hidden sm:flex">
        {/* Contact Number */}
        <div className="flex items-center space-x-2">
          <PhoneIcon className="h-4 w-4" />
          <span>+977-9851089017, 01-4822261</span>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-2">
          <LocationMarkerIcon className="h-4 w-4" />
          <span>Chabahil, Saraswatinagar, Kathmandu</span>
        </div>
      </div>

      {/* Right section with social media links (hidden on small screens) */}
      <div className="space-x-4 text-xl hidden sm:flex">
        <a href="https://www.facebook.com/onpointedu/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
        <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-white-600 hover:text-gray-300 transition-all duration-300"
            }
          >
            Login
          </NavLink>
      </div>
    </div>
  );
};

export default Header;
