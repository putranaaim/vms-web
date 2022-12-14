import React from "react";
import Header from "../header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Navbar from "../navbar";
import Analytics from "./analytics";
import Apartment from "./apartments";
import Residents from "./residents";
import ResetPassword from "./resetpassword";
import Visits from "./visits";
import Visitors from "./visitors";
import VisitRequest from "./visitrequest";
import Summary from "./sumarry";
import Settings from "./setting";
import Privacy from "./privacy";
import Invitation from "./invitation";
import ActivityPage from "./activity";

import Users from "./users";

function Main() {
  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/analytic" element={<Analytics />} />
        <Route path="/apartments" element={<Apartment />} />
        <Route path="/residents" element={<Residents />} />
        <Route path="/resetpass" element={<ResetPassword />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/users" element={<Users />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/visitrequest" element={<VisitRequest />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default Main;
