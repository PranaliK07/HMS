const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db"); // import the function

// Import all routes
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const staffRoutes = require("./routes/staffRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const billingRoutes = require("./routes/billingRoutes");
const reportRoutes = require("./routes/reportRoutes");


const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // call the function to actually connect

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/report", reportRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



