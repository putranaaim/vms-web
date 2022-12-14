import React from "react";
import "./pages.css";
import { Row, Col } from "react-bootstrap";
import Card from "../card";
import TableInvitations from "../tableinvitations";

function Invitation() {
  return (
    <>
      <div className="standard-page-container">
        <Row className="page-title">
          <Col md={6} className="title-container">
            <p>Invitation</p>
          </Col>
        </Row>
        <Row className="page-content">
          <Row className="page-sections">
            <Col md={2}>
              <div className="card">
                <Card
                  title={"Today Invitations"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 number-item">
                      {" "}
                      <p className="number-invite">2</p>
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="card">
                <Card
                  title={"Tomorrow Invitations"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 number-item">
                      {" "}
                      <p className="number-invite">0</p>
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="card">
                <Card
                  title={"Upcoming 7-Days"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 number-item">
                      {" "}
                      <p className="number-invite">3</p>
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="card">
                <Card
                  title={"All Invitations"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 number-item">
                      {" "}
                      <p className="number-invite"> 14</p>
                    </div>
                  }
                />
              </div>
            </Col>
            <Col md={2}>
              <div className="card">
                <Card
                  title={"Expired Invitations"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 number-item">
                      <p className="number-invite">7</p>
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>

          <Row className="page-sections">
            <Col md={12}>
              <div className="card">
                <Card
                  title={"Invitation List"}
                  content={
                    <div className="card-container padding-all-20 margin-top--15 table-list">
                      <TableInvitations />
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    </>
  );
}

export default Invitation;
