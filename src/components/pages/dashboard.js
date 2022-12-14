import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import Total from "../totaldetail";
import { FaCarAlt } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import PieChart1 from "../piechart1";
import PieChart2 from "../piechart2";
import TableActivity from "../tableactivity";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TableContractor from "../tablecontractor";

function Dashboard() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Dashboard</p>
          </Col>
        </Row>
        <Row className="page-content">
          <Row className="page-sections">
            <Col md={6}>
              <Row className="inner-section">
                <Col md={6}>
                  <div className="card">
                    <Card
                      title={"Total Visitors"}
                      content={
                        <Total
                          number={"1150"}
                          icon={
                            <i>
                              <FaHouseUser />
                            </i>
                          }
                        />
                      }
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="card">
                    {" "}
                    <Card
                      title={"Total Walk-in"}
                      content={
                        <Total
                          number={"150"}
                          icon={
                            <i>
                              <FaUserClock />
                            </i>
                          }
                        />
                      }
                    />
                  </div>
                </Col>
              </Row>
              <Row className="inner-section">
                <Col md={6}>
                  <div className="card">
                    {" "}
                    <Card
                      title={"Total Vehicle"}
                      content={
                        <Total
                          number={"50"}
                          icon={
                            <i>
                              <FaCarAlt />
                            </i>
                          }
                        />
                      }
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="card">
                    {" "}
                    <Card
                      title={"Active Vehicle"}
                      content={
                        <Total
                          number={"23"}
                          icon={
                            <i>
                              <FaCarCrash />
                            </i>
                          }
                        />
                      }
                    />
                  </div>
                </Col>
              </Row>
              <Row className="inner-section">
                <Col md={6}>
                  <div className="card">
                    {" "}
                    <Card
                      title={"SMS Count"}
                      content={
                        <Total
                          number={"124"}
                          icon={
                            <i>
                              <FaEnvelope />
                            </i>
                          }
                        />
                      }
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="card">
                    {" "}
                    <Card
                      title={"Walk-in Registration"}
                      content={
                        <Total
                          number={"12"}
                          icon={
                            <i>
                              <FaUserPlus />
                            </i>
                          }
                        />
                      }
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row className="inner-section">
                <Col md={6}>
                  <div className="card">
                    {" "}
                    <Card
                      title={"Vehicle Registration"}
                      content={<PieChart1 />}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="card">
                    {" "}
                    <Card title={"Total Visitors"} content={<PieChart2 />} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="page-sections  ">
            <Col md={12} className="tab-container">
              <Tabs>
                <TabList className={"tab-nav ul-line-padding-unset"}>
                  <Tab>Activity</Tab>
                  <Tab>Contractors</Tab>
                </TabList>

                <TabPanel className={""}>
                  <TableActivity />
                </TabPanel>
                <TabPanel className={""}>
                  <TableContractor />
                </TabPanel>
              </Tabs>
            </Col>
          </Row>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
