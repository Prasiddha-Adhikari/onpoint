import React, { useState, useEffect } from "react";
import AdminSideBar from "./AdminSideBar";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch messages from the backend
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(`${API_URL}/blog.php`)
      .then((response) => response.json())
      .then((data) => setMessages(data));
  };

  const handleDelete = async (id) => {
    const response = await fetch(`${API_URL}/blog.php?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.status === "success") {
      alert("Message deleted successfully!");
      fetchMessages(); // Fetch messages again after deletion
    } else {
      alert("Failed to delete message.");
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <AdminSideBar />
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-semibold text-gray-800">Messages</h1>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700">Messages</h2>
            <table className="mt-4 w-full table-auto border-collapse bg-white rounded shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border-b text-left text-sm text-gray-600">ID</th>
                  <th className="px-4 py-2 border-b text-left text-sm text-gray-600">Full Name</th>
                  <th className="px-4 py-2 border-b text-left text-sm text-gray-600">Subject</th>
                  <th className="px-4 py-2 border-b text-left text-sm text-gray-600">Email</th>
                  <th className="px-4 py-2 border-b text-left text-sm text-gray-600">Message</th>
                  <th className="px-4 py-2 border-b text-left text-sm text-gray-600">Created At</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b text-sm text-gray-800">{message.id}</td>
                    <td className="px-4 py-2 border-b text-sm text-gray-800">{message.fullname}</td>
                    <td className="px-4 py-2 border-b text-sm text-gray-800">{message.subject}</td>
                    <td className="px-4 py-2 border-b text-sm text-gray-800">{message.email}</td>
                    <td className="px-4 py-2 border-b text-sm text-gray-800">{message.message}</td>
                    <td className="px-4 py-2 border-b text-sm text-gray-800">{new Date(message.created_at).toLocaleString()}</td>
                    {/* <td className="px-4 py-2 border-b text-sm text-gray-800">
                      <button
                        onClick={() => handleDelete(message.id)}
                        className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMessages;
