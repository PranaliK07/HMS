const Appointment = require("../models/Appointment");

// Create appointment
exports.createAppointment = async (req, res) => {
  try {
    const { patient, doctor, date } = req.body;
    const appointment = await Appointment.create({ patient, doctor, date });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient", "name")
      .populate("doctor", "name specialization");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update appointment
exports.updateAppointment = async (req, res) => {
  try {
    const { date, status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { date, status },
      { new: true }
    );
    res.json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};