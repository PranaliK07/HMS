import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// Admin Pages
import AddDoctor from "./pages/Admin/AddDoctor";
import ManageDoctor from "./pages/Admin/ManageDoctor";
import AddStaff from "./pages/Admin/AddStaff";
import ManageStaff from "./pages/Admin/ManageStaff";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />

      <Route
        path="/admin/manage-doctors"
        element={<ProtectedRoute><ManageDoctor /></ProtectedRoute>}
      />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;