import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import INPUT from "../input";
import TableActivity from "../tableactivity";

function ActivityPage() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Activity</p>
          </Col>
        </Row>
        <Row className="page-content">
          <Row className="page-sections">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"Activity Filter"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15">
                      <Row className=" margin-bottom-20">
                        <Col md={8}>
                          <Row>
                            <p className="secondary-font"> Keywords </p>
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
                            Reset
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
                  title={"Activity List"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 table-list">
                      <TableActivity />
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

export default ActivityPage;
