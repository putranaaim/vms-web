import React from "react";
import "./listactivity.css";
import { Row, Col } from "react-bootstrap";
import { MdGroupOff } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";

const RequestList = (props) => {
  return (
    <Row className="list-container padding-bottom-20">
      <Col md={1}>
        <p className="list-head margin-top-5">Purpose </p>
        <p className="list-item-typ-1">{props.purpose}</p>
      </Col>
      <Col md={2}>
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
      <Col md={3}>
        <div className="list-action-btn">
          <i>
            <IoMdCheckboxOutline />
          </i>
          <i>
            <MdGroupOff />
          </i>
        </div>
      </Col>
    </Row>
  );
};

export default RequestList;
