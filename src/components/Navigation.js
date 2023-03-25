import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav-active" : "nav")}
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to={"/blogs"}
          className={(nav) => (nav.isActive ? "nav-active" : "nav")}
        >
          <li>BLOGS</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
