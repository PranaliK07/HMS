import { useEffect, useState } from "react";
import { getDoctors } from "../../services/adminService";

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await getDoctors();
      setDoctors(res.data);
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <h2>Manage Doctors</h2>
      <ul>
        {doctors.map((doc) => (
          <li key={doc._id}>
            {doc.name} - {doc.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageDoctors;