import React from "react";
import "./listactivity.css";
import { Row, Col } from "react-bootstrap";
import { MDBSwitch } from "mdb-react-ui-kit";
import {
  MdOutlineEditNote,
  MdRestore,
  MdPhonelinkRing,
  MdOutlineMarkEmailUnread,
} from "react-icons/md";

const ApartmentList = (props) => {
  return (
    <Row className="list-container padding-bottom-20">
      <Col md={3}>
        <p className="list-head margin-top--5 ">Apartment Number</p>
        <p className="list-item-typ-1">{props.unit}</p>
      </Col>
      <Col md={2}>
        <p className="list-head margin-top--5">Is It Office </p>
        <MDBSwitch />
      </Col>
      <Col md={2} className="margin-bottom-20">
        <p className="list-head margin-top-5">Is Auto Approve</p>
        <MDBSwitch />
      </Col>
      <Col md={2}>
        <p className="list-head margin-top--5">Non-Residential</p>
        <MDBSwitch />
      </Col>

      <Col md={3}>
        <div className="list-action-btn">
          <i>
            <MdOutlineEditNote />
          </i>
          <i>
            <MdRestore />
          </i>
        </div>
      </Col>
    </Row>
  );
};

export default ApartmentList;
