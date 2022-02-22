import React from "react";
import reactLogo from "../images/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactLogo} className="nav-logo" alt="navbar logo" />
      <h3>React App</h3>
      <ul>
        <li><h4>React Course - Project 1</h4></li>
      </ul>
    </nav>
  );
}
