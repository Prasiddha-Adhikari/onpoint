import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null means we haven't checked yet

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []); // Empty dependency array ensures this only runs once on mount

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading state while checking
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected content if authenticated
};

export default ProtectedRoute;
