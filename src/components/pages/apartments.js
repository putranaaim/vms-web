import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import INPUT from "../input";
import { RiBuildingFill } from "react-icons/ri";
import TableApartment from "../tableapartment";

function Apartment() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Apartments</p>
          </Col>
        </Row>
        <Row className="page-content">
          <Row className="page-sections">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"Apartment Filter"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15">
                      <Row className=" margin-bottom-20">
                        <Col md={3}>
                          <Row>
                            <p className="secondary-font"> Block </p>
                          </Row>
                          <Row className="filter-input">
                            <INPUT />{" "}
                          </Row>
                        </Col>
                        <Col md={3}>
                          <Row>
                            <p className="secondary-font">Level </p>
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
                      <TableApartment />
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

export default Apartment;
