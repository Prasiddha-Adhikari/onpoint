import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check login state on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) navigate("/admindashboard"); // Redirect if logged in
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !validateEmail(formData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.password || formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }
    if (!isLogin && (!formData.fullName || formData.fullName.trim().length < 3)) {
      setMessage("Full Name must be at least 3 characters long.");
      return;
    }

    const endpoint = `${import.meta.env.VITE_API_URL}/${isLogin ? "login.php" : "signup.php"}`;
    try {
      setLoading(true);
      setMessage("");
      const response = await axios.post(endpoint, formData, {
        headers: { Accept: "application/json", "Content-Type": "application/json" },
      });

      const result = response.data;
      setMessage(result.message);

      if (response.status === 200) {
        if (isLogin) {
          localStorage.setItem("authToken", result.token); // Save token
          navigate("/admindashboard");
        } else {
          setIsLogin(true); // Switch to login form
        }
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "An error occurred.");
      } else {
        setMessage("Unable to connect to the server. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear token
    setMessage("You have successfully logged out.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-96 p-8 bg-white rounded-xl shadow-lg">
        {/* Title */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`py-2 px-6 rounded-full text-sm font-semibold transition-all ${
              isLogin
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`py-2 px-6 rounded-full text-sm font-semibold transition-all ${
              !isLogin
                ? "bg-purple-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Forms */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-purple-300"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "👁️‍🗨️" : "👁️"}
            </button>
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white rounded-md shadow-lg ${
              isLogin ? "bg-blue-500 hover:bg-blue-600" : "bg-purple-500 hover:bg-purple-600"
            }`}
            disabled={loading}
          >
            {loading ? "Please Wait..." : isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.toLowerCase().includes("success")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Logout Option */}
        {localStorage.getItem("authToken") && (
          <div className="mt-6 text-center">
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
