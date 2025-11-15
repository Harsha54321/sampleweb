import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Details.css";

const Details = () => {
  return (
    <div className="details-layout">

      <div className="sidebar">
        <h2>Academy Data</h2>
        <NavLink
          to="student"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Student Registration
        </NavLink>
        <NavLink
          to="teacher"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Teacher Details
        </NavLink>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Details;
