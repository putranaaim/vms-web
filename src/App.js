import "./App.css";
import React from "react";
import Login from "./components/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/wms-web2" element={<Login />} />
          <Route path="/wms-web2/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
