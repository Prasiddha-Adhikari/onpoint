import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faMailchimp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faMapMarkerAlt, faGlobe, faMailBulk, faMailForward, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/Logo.jpg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <NavLink to="/" className="flex justify-center rotate-[16deg] mb-4">
              <img src={logo} alt="logo" className="h-28 w-auto" />
            </NavLink>
            <ul className="list-disc">
            <li className="text-sm mb-4 leading-relaxed text-justify">
              Intensive Japanese Language courses and test preparation taught by experienced instructors.
            </li>
            <li className="text-sm mb-4 leading-relaxed text-justify">
              Proper guidance on required documents provided by dedicated professionals.
            </li>
            <li className="text-sm mb-4 leading-relaxed text-justify">
              Genuine counseling for studies and pathways, offered by licensed and dedicated counselors.
            </li>
            <li className="text-sm leading-relaxed text-justify font-semibold">
              Your trusted educational partner.
            </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="">
            <h3 className="text-lg font-semibold ml-4 mt-32 mb-6">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mr-3 mt-1" />
                <p>Chabahil, Saraswatinagar, Kathmandu</p>
              </div>
              <div className="flex items-start text-sm">
                <FontAwesomeIcon icon={faPhone} className="text-white mr-3 mt-1" />
                <p>+977-9851089017, 01-4822261</p>
              </div>
              <div className="flex items-start text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="text-white mr-3 mt-1" />
                <p>surain977@gmail.com</p>
              </div>
              <div className="flex items-start text-sm">
                <FontAwesomeIcon icon={faGlobe} className="text-white mr-3 mt-1" />
                <a
                  href="http://www.onpointeducation.edu.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 underline"
                >
                  www.onpointeducation.edu.np
                </a>
              </div>
            </div>
          </div>

          {/* Destinations Section */}
          <div>
            <h3 className="text-lg font-semibold mt-32 mb-6 text-center">Destinations</h3>
            <ul className="space-y-3 flex flex-col items-center">
              <li className="text-sm hover:text-gray-300 transition duration-200">Tokyo</li>
              <li className="text-sm hover:text-gray-300 transition duration-200">Kyoto</li>
              <li className="text-sm hover:text-gray-300 transition duration-200">Osaka</li>
              <li className="text-sm hover:text-gray-300 transition duration-200">Hiroshima</li>
              <li className="text-sm hover:text-gray-300 transition duration-200">Nagoya</li>
              <li className="text-sm hover:text-gray-300 transition duration-200">Sapporo</li>
              <li className="text-sm hover:text-gray-300 transition duration-200">Fukuoka</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-center mb-6 mt-32">Follow Us</h3>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.facebook.com/onpointedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 transition duration-200"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-400 transition duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-500 transition duration-200"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 text-center text-white mt-12 py-4">
        <p className="text-sm">
          &copy; 2024 Onpoint Education Services Pvt. Ltd. All Rights Reserved.
          <br />
          Developed by{" "}
          <a
            href="https://unitechit.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-300 underline"
          >
            Unitech IT Solution
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
