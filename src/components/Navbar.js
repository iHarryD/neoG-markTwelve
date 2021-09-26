import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav>
      <h1>Fun with Triangles</h1>
      <ul id="nav-links">
        <Link to="/">
          <li className="nav-items">Quiz</li>
        </Link>
        <Link to="/triangleornot">
          <li className="nav-items">Triangle or Not</li>
        </Link>

        <Link to="/hypotenuse">
          <li className="nav-items">Hypotenuse</li>
        </Link>

        <Link to="/areaoftriangle">
          <li className="nav-items">Area of Triangle</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
