import { useState } from "react";
import { addDoctor } from "../../services/adminService";

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
    specialization: "",
    phone: "",
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoctor(doctor);
      alert("Doctor added successfully");
      setDoctor({ name: "", email: "", specialization: "", phone: "" });
    } catch (error) {
      alert("Error adding doctor");
    }
  };

  return (
    <div>
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={doctor.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={doctor.email} onChange={handleChange} />
        <input name="specialization" placeholder="Specialization" value={doctor.specialization} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={doctor.phone} onChange={handleChange} />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;