import { useState } from "react";
import { addStaff } from "../../services/adminService";

const AddStaff = () => {
  const [staff, setStaff] = useState({
    name: "",
    role: "",
    phone: "",
  });

  const handleChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStaff(staff);
      alert("Staff added successfully");
      setStaff({ name: "", role: "", phone: "" });
    } catch {
      alert("Error adding staff");
    }
  };

  return (
    <div>
      <h2>Add Staff</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={staff.name} onChange={handleChange} />
        <input name="role" placeholder="Role" value={staff.role} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={staff.phone} onChange={handleChange} />
        <button type="submit">Add Staff</button>
      </form>
    </div>
  );
};

export default AddStaff;