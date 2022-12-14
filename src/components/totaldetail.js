import React from "react";
import { Row, Col } from "react-bootstrap";
import "./totaldetail.css";

const Total = (props) => {
  return (
    <Row className="total-container">
      <Col md={8} className="number-container">
        <div className="number-item">
          <p>{props.number}</p>
        </div>
      </Col>

      <Col md={4} className="detailIcon-container">
        <div className="detailIcon-item">{props.icon}</div>
      </Col>
    </Row>
  );
};

export default Total;
