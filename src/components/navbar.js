import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { RiBuildingLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="site-logo">
        <img src={require("../images/optivolve2.png")} alt="" />
      </div>
      <div className="projectsite-name">
        <i>
          <RiBuildingLine />
        </i>
        <p>Edifice</p>
      </div>
      <div className="menu-item">
        <ul className="ul-line-padding-unset">
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">
              <i class="fa fa-sliders" aria-hidden="true"></i>
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytic"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-bar-chart" aria-hidden="true"></i>
              <p>Analytics</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apartments"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-street-view" aria-hidden="true"></i>
              <p>Apartments</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/residents"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-sitemap" aria-hidden="true"></i>
              <p>Residents</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/visits" className="nav-link" activeClassName="active">
              <i class="fa fa-address-card" aria-hidden="true"></i>
              <p>Visits</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visitors"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-users" aria-hidden="true"></i>
              <p>Visitors</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="nav-link" activeClassName="active">
              <i class="fa fa-user" aria-hidden="true"></i>
              <p>Users</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/activity"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-outdent" aria-hidden="true"></i>
              <p>Activity</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visitrequest"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-address-book" aria-hidden="true"></i>
              <p>Visit Request</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/invitation"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
              <p>Invitation</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/settings"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-cogs" aria-hidden="true"></i> <p>Settings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-lock" aria-hidden="true"></i>

              <p>Privacy</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logout-container">
        <ul className="ul-line-padding-unset">
          <li>
            <NavLink
              to="/wms-web"
              className="nav-link"
              activeClassName="active"
            >
              <i class="fa fa-power-off" aria-hidden="true"></i>
              <p>Logout</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
