// App.jsx - Main App File
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import JLPT from './pages/Services';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial_page.jsx';
import Gallery from './pages/Gallery.jsx';
import Nat from './pages/Nat.jsx';
import Service from './pages/Service.jsx';
import Layout from './pages/Layout.jsx';
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import AdminEditAds from "./pages/AdminEditAds";
import AdminEditStory from "./pages/AdminEditStory";
import AdminPostBlogs from "./pages/AdminPostBlogs";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });

    // Check authentication status
    const checkAuth = async () => {
      try {
        const response = await fetch("onpoint/backend/api/isAuthenticated", {
          credentials: "include", // Ensures cookies (e.g., session) are sent
        });
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
    AOS.refresh();
  }, []);
  return (
    <Router>
    
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/jlpt" element={<JLPT />} />
            <Route path="/nat" element={<Nat />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Service />} />
            <Route path="login" element={<Login />} />
            </Route>
          </Routes>


          <Routes > 
    {/* Admin Routes */}
    <Route
      path="admindashboard"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="admindashboard/edit-gallery"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminEditAds />
        </ProtectedRoute>
      }
    />
    <Route
      path="admindashboard/edit-testimonial"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminEditStory />
        </ProtectedRoute>
      }
    />
    <Route
      path="admindashboard/messages"
      element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <AdminPostBlogs />
        </ProtectedRoute>
      }
    />
    </Routes>
    </Router>
  );
}
export default App;