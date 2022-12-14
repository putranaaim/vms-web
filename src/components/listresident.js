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

const ResidentsList = (props) => {
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
        <p className="list-head margin-top-5">Contact</p>

        <div className="contact-container">
          <i>
            <MdPhonelinkRing />
          </i>
          <p className="list-item-typ-1">{props.contact}</p>
        </div>
        <div className="contact-container">
          <i>
            <MdOutlineMarkEmailUnread />
          </i>
          <p className="list-item-typ-1">{props.email}</p>
        </div>
      </Col>
      <Col md={2} className="margin-bottom-20">
        <Row>
          <p className="list-head margin-top-5">Apartment</p>
          <p className="list-item-typ-1">{props.unitnumber}</p>
        </Row>
        <Row>
          <p className="list-head margin-top-5å">User Name</p>
          <p className="list-item-typ-1">{props.username}</p>
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
          <i>
            <MdOutlineTextsms />
          </i>
          <i>
            <MdOutlineResetTv />
          </i>

          <i>
            <MdOutlineMarkEmailRead />
          </i>
        </div>
      </Col>
    </Row>
  );
};

export default ResidentsList;
