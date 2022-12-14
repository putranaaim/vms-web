import React from "react";
import "./listactivity.css";
import { Row, Col } from "react-bootstrap";

const InvitationList = (props) => {
  return (
    <Row className="list-container padding-bottom-20">
      <Col md={3}>
        <p className="list-head margin-top-5">Visit Purpose </p>
        <p className="list-item-typ-1">{props.purpose}</p>
      </Col>
      <Col md={3}>
        <p className="list-head margin-top-5">Name </p>
        <p className="list-item-typ-1">{props.name}</p>
      </Col>
      <Col md={2}>
        <p className="list-head margin-top-5">destination </p>
        <p className="list-item-typ-1">{props.destination}</p>
      </Col>
      <Col md={3}>
        <p className="list-head margin-top-5">Date/Time </p>
        <p className="list-item-typ-1">{props.time}</p>
      </Col>
      <Col md={1}>
        <p className="list-head margin-top-5">status</p>
        <p className="label-checkin">{props.status}</p>
      </Col>
    </Row>
  );
};

export default InvitationList;
