import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
	<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <a className="navbar-brand" href="#">Time Manager</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/taskManager">
          Task Manager
        </Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More Options
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Make A Schedule</a>
          <a className="dropdown-item" href="#">Edit Calendar</a>
          <Link className="dropdown-item" to="/workLog">
            Work Log
          </Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
);

export default Navbar;