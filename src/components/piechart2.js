import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import "./piechart.css";

const data = {
  labels: ["Parcel Delivery", "Visitor", "Contractor", "Small Funiture"],
  datasets: [
    {
      label: "# of Votes",
      data: [20, 45, 10, 25],
      backgroundColor: [
        "#567836",
        "#F47424",
        "#FFCE00",
        "#B1B84C",
        "#F99E3D",
        "#FE452A",
      ],
      borderColor: "#fff",

      borderWidth: 2,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom",
      rtl: false,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 10,
      },
    },
  },
};

const PieChart2 = () => {
  return (
    <div className="pie-container">
      <Pie data={data} options={options} />
    </div>
  );
};
export default PieChart2;
