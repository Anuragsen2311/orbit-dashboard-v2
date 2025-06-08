import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const departments = ["Marketing", "Product", "HR", "Finance", "Tech"];
const engagementValues = [78, 65, 58, 41, 32];

const getBarColor = (value) => {
  if (value >= 70) return "rgba(0, 246, 237, 0.9)";
  if (value >= 50) return "rgba(255, 205, 86, 0.9)";
  return "rgba(255, 99, 132, 0.9)";
};

const data = {
  labels: departments,
  datasets: [
    {
      label: "% Engagement",
      data: engagementValues,
      backgroundColor: engagementValues.map(getBarColor),
      borderRadius: 12,
      borderSkipped: false,
      barThickness: 30,
    },
  ],
};

const options = {
  responsive: true,
  animation: {
    duration: 1200,
    easing: "easeOutQuart",
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#1E1E2F",
      titleColor: "#fff",
      bodyColor: "#fff",
      callbacks: {
        label: (context) => `${context.parsed.y}% engagement`,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#E2E8F0",
        font: { size: 14, weight: "bold" },
      },
      grid: { display: false },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        color: "#CBD5E1",
        stepSize: 20,
        callback: (val) => `${val}%`,
      },
      grid: {
        color: "#2D3748",
        borderDash: [6, 6],
      },
    },
  },
};

function TopDepartmentsChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
}

export default TopDepartmentsChart;