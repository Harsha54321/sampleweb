import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Navigation/Navbar";

import Home from "./Navigation/Home";
import About from "./Navigation/About";
import Details from "./Navigation/Details";
import Dashboard from "./Navigation/Dashboard";
import Contact from "./Navigation/Contact";
import StudentData from "./Navigation/StudentData";
import TeacherData from "./Navigation/TeacherData";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/details" element={<Details />}>
              <Route path="student" element={<StudentData />} />
              <Route path="teacher" element={<TeacherData />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
