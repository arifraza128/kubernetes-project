import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function Dashboard() {

  const data = {
    labels: ["Jan","Feb","Mar","Apr","May"],
    datasets: [{
      label: "Appointments",
      data: [30,50,70,40,90],
      backgroundColor: "rgba(255,99,132,0.7)"
    }]
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-pink-300">
        Healthcare Analytics
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-indigo-600 p-6 rounded-xl">Patients: 1200</div>
        <div className="bg-purple-600 p-6 rounded-xl">Doctors: 85</div>
        <div className="bg-pink-600 p-6 rounded-xl">Appointments: 320</div>
      </div>

      <div className="bg-black bg-opacity-30 p-6 rounded-xl">
        <Bar data={data} />
      </div>
    </div>
  );
}
