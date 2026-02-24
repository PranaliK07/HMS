import { useEffect, useState } from "react";
import { getStaff } from "../../services/adminService";

const ManageStaff = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      const res = await getStaff();
      setStaffList(res.data);
    };
    fetchStaff();
  }, []);

  return (
    <div>
      <h2>Manage Staff</h2>
      <ul>
        {staffList.map((staff) => (
          <li key={staff._id}>
            {staff.name} - {staff.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageStaff;