import React from "react";
import "./listactivity.css";
import { Row, Col } from "react-bootstrap";
import { MDBSwitch } from "mdb-react-ui-kit";
import {
  MdOutlineEditNote,
  MdOutlineTextsms,
  MdOutlineMarkEmailUnread,
  MdPhonelinkRing,
  MdOutlineMarkEmailRead,
  MdOutlineResetTv,
} from "react-icons/md";

const VisitorsList = (props) => {
  return (
    <Row className="list-container padding-bottom-20">
      <Col md={1}>
        <div className="avatarlist">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
        </div>
      </Col>
      <Col md={3}>
        <p className="list-head margin-top-5">Full Name</p>
        <p className="list-item-typ-1">{props.fullname}</p>
      </Col>
      <Col md={2} className="margin-bottom-20">
        <Row>
          <p className="list-head margin-top-5">Phone Number</p>
          <p className="list-item-typ-1">{props.phone}</p>
        </Row>
      </Col>
      <Col md={1}>
        <Row>
          <p className="list-head margin-top-5å">Status</p>
          <p className="label-checkin">{props.status}</p>
        </Row>
      </Col>
      <Col md={2}></Col>

      <Col md={3}>
        <div className="list-action-btn">
          <i>
            <MdOutlineEditNote />
          </i>
        </div>
      </Col>
    </Row>
  );
};

export default VisitorsList;
