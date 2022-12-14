import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import INPUT from "../input";
import { RiBuildingFill } from "react-icons/ri";
import TableVisitors from "../tablevisitors";

function Visitors() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Visitors</p>
          </Col>
        </Row>
        <Row className="page-content">
          <Row className="page-sections">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"Visitors Filter"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15">
                      <Row className=" margin-bottom-20">
                        <Col md={4}>
                          <Row>
                            <p className="secondary-font"> Name </p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                          </Row>
                        </Col>
                        <Col md={4}>
                          <Row>
                            <p className="secondary-font"> Phone Number </p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                          </Row>
                        </Col>

                        <Col md={2}>
                          <button className="margin-top-37" type="">
                            Search
                          </button>
                        </Col>

                        <Col md={2}>
                          <button className="margin-top-37" type="">
                            Add <RiBuildingFill />
                          </button>
                        </Col>
                      </Row>
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>
          <Row className="page-sections">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"Visiors List"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 table-list">
                      <TableVisitors />
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

export default Visitors;
