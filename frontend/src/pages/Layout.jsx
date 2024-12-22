import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
