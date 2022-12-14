import React from "react";
import "./listactivity.css";
import { Row, Col } from "react-bootstrap";

const ContractorList = (props) => {
  return (
    <Row className="list-container">
      <Col md={2}>
        <p className="list-head margin-top--5">Purpose</p>
        <p className="list-item-typ-1">{props.purpose}</p>
      </Col>
      <Col md={2}>
        <Row>
          <p className="list-head margin-top-5">Visitor Details</p>
          <p className="list-item-typ-2">{props.detail}</p>
        </Row>
        <Row>
          <p className="list-head">Plate Number</p>
          <p className="list-item-typ-2">{props.plate}</p>
        </Row>
      </Col>
      <Col md={4}></Col>
      <Col md={2}>
        <p className="list-head margin-top--5">Registration Date & Time</p>
        <p className="list-item-typ-1">{props.time}</p>
      </Col>
      <Col md={2}>
        <p className="list-head margin-top--5">Visit Status</p>
        {props.status}
      </Col>
    </Row>
  );
};

export default ContractorList;
