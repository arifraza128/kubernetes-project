import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-black bg-opacity-40 p-5">
      <h2 className="text-2xl font-bold text-pink-400 mb-6">
        Health Admin
      </h2>
      <ul className="space-y-4">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
      </ul>
    </div>
  );
}
