import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import TableRequest from "../tablerequest";

function VisitRequest() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Visit Request</p>
          </Col>
        </Row>
        <Row className="page-content">
          <Row className="page-sections">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"Request List"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 table-list">
                      <TableRequest />
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

export default VisitRequest;
