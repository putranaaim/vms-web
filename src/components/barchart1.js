import React from "react";
import Chart from "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart1 = () => {
  const labels = [
    "A-1-1",
    "C-3-2",
    "C-17-1",
    "A-4-3",
    "B-2-3",
    "A-1-1",
    "C-3-2",
    "C-17-1",
    "A-4-3",
    "B-2-3",
  ];

  const options = {
    indexAxis: "y",

    plugins: {
      legend: {
        position: "top",
        rtl: false,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 10,
        },
      },
      title: {
        display: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Parcel Delivery",
        data: labels.map(() => faker.datatype.number({ max: 25 })),
        backgroundColor: "#567836",
      },
      {
        label: "Visitor",
        data: labels.map(() => faker.datatype.number({ max: 25 })),
        backgroundColor: "#F47424",
      },
      {
        label: "Contructor",
        data: labels.map(() => faker.datatype.number({ max: 25 })),
        backgroundColor: "#FFCE00",
      },
      {
        label: "Small Funiture",
        data: labels.map(() => faker.datatype.number({ max: 25 })),
        backgroundColor: "#B1B84C",
      },
    ],
  };
  return (
    <div className="pie-container margin-top--55">
      <Bar data={data} options={options} width={1400} height={300} />
    </div>
  );
};

export default BarChart1;
