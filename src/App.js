
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { mockData } from "./mocks/mockData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App = () => {
  const [data, setData] = useState(mockData);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dashboard de Analytics",
      },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  const visitsChartData = {
    labels,
    datasets: [
      {
        label: "Visitas",
        data: data.visits,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const conversionsChartData = {
    labels,
    datasets: [
      {
        label: "Conversões",
        data: data.conversions,
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,0.2)",
        fill: true,
      },
    ],
  };

  const clickRateChartData = {
    labels,
    datasets: [
      {
        label: "Taxa de Cliques",
        data: data.clickRate,
        borderColor: "rgba(255,159,64,1)",
        backgroundColor: "rgba(255,159,64,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard de Analytics</h1>
      <div style={{ marginBottom: "30px" }}>
        <h2>Visitas</h2>
        <Line data={visitsChartData} options={chartOptions} />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h2>Conversões</h2>
        <Line data={conversionsChartData} options={chartOptions} />
      </div>
      <div>
        <h2>Taxa de Cliques</h2>
        <Line data={clickRateChartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default App;
