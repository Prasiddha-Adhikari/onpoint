import React from 'react';
import AdminSideBar from './AdminSideBar';

const AdminDashboard = () => {
  return (
    <>
    <div className="flex h-screen bg-gray-100">
    <AdminSideBar />
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h1>
      <p className="mt-4 text-gray-600">
        Select an option from the sidebar to get started.
      </p>
    </div>
    </div>
    </>
  );
};

export default AdminDashboard;
