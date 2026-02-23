import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

// Admin Pages
import AddDoctor from "./pages/Admin/AddDoctor";
import ManageDoctors from "./pages/Admin/ManageDoctors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/admin/add-doctor"
          element={<ProtectedRoute><AddDoctor /></ProtectedRoute>}
        />
        <Route
          path="/admin/manage-doctors"
          element={<ProtectedRoute><ManageDoctors /></ProtectedRoute>}
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;