import React from "react";
import TopDepartmentsChart from "./components/TopDepartmentsChart";

function App() {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <h1 className="text-3xl font-bold mb-6 text-center">Orbit Dashboard V2</h1>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Top Performing Departments</h2>
        <TopDepartmentsChart />
      </div>
    </div>
  );
}

export default App;