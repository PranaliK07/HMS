const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");

exports.getStats = async (req, res) => {
  try {
    const doctors = await Doctor.countDocuments();
    const patients = await Patient.countDocuments();
    const appointments = await Appointment.countDocuments();

    res.json({
      doctors,
      patients,
      appointments,
      revenue: 0
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};