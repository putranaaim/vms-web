import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./header.css";
import Popup from "./popup";

function Header() {
  const [isOpenQR, setIsOpenQR] = useState(false);
  const [isOpenIN, setIsOpenIN] = useState(false);
  const [isOpenInvite, setIsOpenInvite] = useState(false);
  const [isOpenSMS, setIsOpenSMS] = useState(false);

  const toggleQR = () => {
    setIsOpenQR(!isOpenQR);
  };
  const toggleIN = () => {
    setIsOpenIN(!isOpenIN);
  };
  const toggleInvite = () => {
    setIsOpenInvite(!isOpenInvite);
  };
  const toggleSMS = () => {
    setIsOpenSMS(!isOpenSMS);
  };

  return (
    <header>
      <Row>
        <Col md={2}></Col>
        <Col md={6}></Col>
        <Col md={4}>
          <Row>
            <Col md={5}>
              <Row>
                <Col md={4} />
                <Col md={2}>
                  <i
                    onClick={toggleQR}
                    class="fa fa-qrcode"
                    aria-hidden="true"
                  ></i>
                </Col>
                <Col md={2}>
                  <i
                    onClick={toggleIN}
                    class="fa fa-pencil-square-o"
                    aria-hidden="true"
                  ></i>
                </Col>
                <Col md={2}>
                  <i
                    onClick={toggleInvite}
                    class="fa fa-wpforms"
                    aria-hidden="true"
                  ></i>
                </Col>
                <Col md={2}>
                  <i
                    onClick={toggleSMS}
                    class="fa fa-envelope-open-o"
                    aria-hidden="true"
                  ></i>
                </Col>
              </Row>
            </Col>
            <Col md={7}>
              <Row>
                <Col md={9}>
                  <p>Welcome, Thomas Shelby</p>
                  <p className="timestamp">Timestamp</p>
                </Col>
                <Col md={3}>
                  <div className="avatar">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      {isOpenQR && (
        <Popup
          title={
            <div>
              <p>Scan QR</p>
            </div>
          }
          handleClose={toggleQR}
          content={
            <div>
              <p>QR Code Display</p>
            </div>
          }
        />
      )}

      {isOpenIN && (
        <Popup
          title={
            <div>
              <p>Check-in Details</p>
            </div>
          }
          handleClose={toggleIN}
          content={
            <div>
              <p>Detail Display</p>
            </div>
          }
        />
      )}

      {isOpenInvite && (
        <Popup
          title={
            <div>
              <p>Invitation Form</p>
            </div>
          }
          handleClose={toggleInvite}
          content={
            <div>
              <p>Form Display</p>
            </div>
          }
        />
      )}

      {isOpenSMS && (
        <Popup
          title={
            <div>
              <p>Send Message</p>
            </div>
          }
          handleClose={toggleSMS}
          content={
            <div>
              <p>Send Form Display</p>
            </div>
          }
        />
      )}
    </header>
  );
}

export default Header;
