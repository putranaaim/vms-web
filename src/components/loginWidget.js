import React from "react";
import "./loginWidget.css";
import LoginCol1 from "./LoginCol-1";
import LoginForm from "./loginForm";
import { Col, Row } from "react-bootstrap";

function LoginWidget() {
  return (
    <Row>
      <Col md={6}>
        <LoginCol1 />
      </Col>
      <Col md={6}>
        <LoginForm />
      </Col>
    </Row>
  );
}

export default LoginWidget;
