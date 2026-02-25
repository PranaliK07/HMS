import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PatientDashboard from "./pages/Patient/PatientDashboard";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import DoctorDashboard from "./pages/Doctor/DoctorDasboard";
import Register from "./pages/Register";



// import ReceptionDashboard from "./pages/reception/ReceptionDashboard";
// import BillingDashboard from "./pages/billing/BillingDashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      
    
<Route path="/doctor/dashboard" element={<DoctorDashboard />} />
<Route path="/patient/dashboard" element={<PatientDashboard />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />
<Route path="/register" element={<Register />} />
{/* <Route path="/Reception/ReceptionDashboard" element={<ReceptionDashboard />} /> */}
{/* <Route path="/billing/dashboard" element={<BillingDashboard />} /> */}


          

      
    </Routes>
  );
}

export default App;