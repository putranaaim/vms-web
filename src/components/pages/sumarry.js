import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import INPUT from "../input";

function Summary() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Summary</p>
          </Col>
        </Row>
        <Row className="page-content"></Row>
      </div>
    </>
  );
}

export default Summary;
