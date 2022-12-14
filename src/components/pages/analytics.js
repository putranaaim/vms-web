import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import INPUT from "../input";
import { BsCalendar4Week } from "react-icons/bs";
import BarChart1 from "../barchart1";
import { Pie } from "react-chartjs-2";
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

const DesignPie1 = {
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

const DesignBar1 = {
  indexAxis: "y",
  barThickness: 30,

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

const DesignBar2 = {
  indexAxis: "y",
  barThickness: 30,

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
};

const DesignBar3 = {
  barThickness: 30,

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

const datapie1 = {
  labels: ["Parcel Delivery", "Visitor", "Contractor", "Small Funiture"],
  datasets: [
    {
      label: "# of Votes",
      data: [44, 33, 10, 5],
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

const datapie2 = {
  labels: ["Parcel Delivery", "Visitor", "Contractor", "Small Funiture"],
  datasets: [
    {
      label: "# of Votes",
      data: [21, 22, 27, 30],
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

const datapie3 = {
  labels: ["Parcel Delivery", "Visitor", "Contractor", "Small Funiture"],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 75, 10, 5],
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

const labels = ["All"];

const databar1 = {
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

const databar2 = {
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

const labels3 = [
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

const databar3 = {
  labels: labels3,
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

const labels2 = [
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

const databar4 = {
  labels: labels2,
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

function Analytics() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Analytics</p>
          </Col>
        </Row>
        <Row className="page-content">
          <Row className="page-sections">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"Date Filter"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15">
                      <Row>
                        <Col md={5}>
                          <Row>
                            <p className="secondary-font"> Start Date</p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                            <i>
                              <BsCalendar4Week />
                            </i>
                          </Row>
                        </Col>
                        <Col md={5}>
                          <Row>
                            <p className="secondary-font">End Date</p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                            <i>
                              <BsCalendar4Week />
                            </i>
                          </Row>
                        </Col>{" "}
                        <Col md={2}>
                          <button className="margin-top-37" type="">
                            Search
                          </button>
                        </Col>
                      </Row>
                      <Row className="check-item">
                        <div className="check-container">
                          <FormCheckInput />
                          <p className="secondary-font margin-top--5">
                            Exclude public holidays
                          </p>
                        </div>
                        <div className="check-container">
                          <FormCheckInput />
                          <p className="secondary-font margin-top--5 ">
                            Exclude public holiday eve
                          </p>
                        </div>
                      </Row>
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>

          <Row className="page-sections  ">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"10 Units With Highest Visitor"}
                  content={
                    <div>
                      <BarChart1 />
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>

          <Row className="page-sections  ">
            <Col md={4}>
              <div className="card">
                <Card
                  title={"Walk in Registration"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Pie width={400} data={datapie1} options={DesignPie1} />
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="card">
                <Card
                  title={"Vehicle Registration"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Pie width={400} data={datapie2} options={DesignPie1} />
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="card">
                <Card
                  title={"Total Registration"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Pie width={400} data={datapie3} options={DesignPie1} />
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>

          <Row className="page-sections  ">
            {" "}
            <Col md={6}>
              <div className="card">
                <Card
                  title={"Walk in Registration"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Bar
                        width={750}
                        height={250}
                        data={databar1}
                        options={DesignBar1}
                      />
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="card">
                <Card
                  title={"Vehicle Registration"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Bar
                        width={750}
                        height={250}
                        data={databar2}
                        options={DesignBar1}
                      />
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>

          <Row className="page-sections  ">
            {" "}
            <Col md={6}>
              <div className="card">
                <Card
                  title={"Average Registration Per Hour"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Bar
                        width={750}
                        height={400}
                        data={databar4}
                        options={DesignBar2}
                      />
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="card">
                <Card
                  title={"Average Registration Time"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Bar
                        width={750}
                        height={400}
                        data={databar3}
                        options={DesignBar3}
                      />
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>

          <Row className="page-sections  ">
            {" "}
            <Col md={6}>
              <div className="card">
                <Card
                  title={"Breakdown of Registration Type"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Bar
                        width={750}
                        height={400}
                        data={databar4}
                        options={DesignBar2}
                      />
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="card">
                <Card
                  title={"Average Vehicle Per Day"}
                  content={
                    <div className="center-element padding-bot-30">
                      <Bar
                        width={750}
                        height={400}
                        data={databar3}
                        options={DesignBar3}
                      />
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    </>
  );
}

export default Analytics;
