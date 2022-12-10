import React from "react";
import "./loginForm.css";
import INPUT from "./input";
import { Link } from "react-router-dom";

export const LoginForm = ({ type, onClick }) => {
  return (
    <div className="row login-form">
      <img src={require("../images/w.png")} alt="" />
      <label for="">Building Name or Code</label>
      <INPUT placeholder="Building Name" />
      <label for="">Username</label>
      <INPUT placeholder="Username" />
      <label for="">Password</label>
      <INPUT placeholder="Password" />
      <p>Forgot Password?</p>
      <Link to="/wms-web2/dashboard">
        <button className="btn-1" onClick={onClick} type={type}>
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default LoginForm;
