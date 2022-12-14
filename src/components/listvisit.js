import React from "react";
import "./listactivity.css";
import { Row, Col } from "react-bootstrap";
import { MDBSwitch } from "mdb-react-ui-kit";
import { MdSupervisedUserCircle, MdPhonelinkRing } from "react-icons/md";

const VisitsList = (props) => {
  return (
    <Row className="list-container padding-bottom-20">
      <Col md={2}>
        <p className="list-head margin-top-5">Purpose</p>
        <p className="list-item-typ-1">{props.purpose}</p>
        <p className="list-head margin-top-5">Status</p>
        <p className="label-checkin">{props.status}</p>
      </Col>
      <Col md={2} className="margin-bottom-20">
        <Row>
          <p className="list-head margin-top-5">Destination</p>
          <p className="list-item-typ-1">{props.unitnumber}</p>
        </Row>
        <Row>
          <p className="list-head margin-top-5">Contact</p>

          <div className="contact-container">
            <i>
              <MdPhonelinkRing />
            </i>
            <p className="list-item-typ-1">{props.contact}</p>
          </div>
          <div className="contact-container">
            <i>
              <MdSupervisedUserCircle />
            </i>
            <p className="list-item-typ-1">{props.name}</p>
          </div>
        </Row>
      </Col>
      <Col md={2}>
        <Row>
          <p className="list-head margin-top-5">Plate Number</p>
          <p className="list-item-typ-1">{props.plate}</p>
        </Row>
      </Col>
      <Col md={2}>
        <p className="list-head margin-top-5">Arival</p>
        <p className="list-item-typ-1">{props.arival}</p>
        <p className="list-head margin-top-5">Leaving</p>
        <p className="list-item-typ-1">{props.leave}</p>
      </Col>

      <Col md={2}>
        <p className="list-head margin-top-5">Entrance Point</p>
        <p className="list-item-typ-1">{props.entrance}</p>
        <p className="list-head margin-top-5">Exit Point</p>
        <p className="list-item-typ-1">{props.exit}</p>
      </Col>

      <Col md={2}>
        <p className="list-head margin-top-5">Register Method</p>
        <p className="list-item-typ-1">{props.method}</p>
      </Col>
    </Row>
  );
};

export default VisitsList;
