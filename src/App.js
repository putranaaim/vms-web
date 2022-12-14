import "./App.css";
import React from "react";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/wms-web" element={<Login />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
