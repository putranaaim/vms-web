import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import INPUT from "../input";
import { RiBuildingFill } from "react-icons/ri";
import TableVisits from "../tablevisits";

function Visits() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Visits</p>
          </Col>
        </Row>
        <Row className="page-content">
          <Row className="page-sections">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"Visits Filter"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15">
                      <Row className=" margin-bottom-20">
                        <Col md={3}>
                          <Row>
                            <p className="secondary-font">
                              {" "}
                              Select Visitor Type{" "}
                            </p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                          </Row>
                        </Col>
                        <Col md={3}>
                          <Row>
                            <p className="secondary-font">Date From </p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                          </Row>
                        </Col>
                        <Col md={3}>
                          <Row>
                            <p className="secondary-font">Date To </p>
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
                        <Col md={1}>
                          <button className="margin-top-37" type="">
                            Add <RiBuildingFill />
                          </button>
                        </Col>
                      </Row>
                      <Row className=" margin-bottom-20">
                        <Col md={3}>
                          <Row>
                            <p className="secondary-font"> Name </p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                          </Row>
                        </Col>
                        <Col md={3}>
                          <Row>
                            <p className="secondary-font">Phone Number </p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                          </Row>
                        </Col>
                        <Col md={3}>
                          <Row>
                            <p className="secondary-font">Unit </p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                          </Row>
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
                  title={"Apartment List"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 table-list">
                      <TableVisits />
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

export default Visits;
