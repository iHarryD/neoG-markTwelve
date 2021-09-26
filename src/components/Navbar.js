import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  let navItems = document.querySelectorAll(".nav-items");

  navItems.forEach((item) => {
    if (item.href === window.location.href) {
      item.classList.toggle("active");
    }
  });

  return (
    <nav>
      <h1>Fun with Triangles</h1>
      <ul id="nav-links">
        <NavLink to="/" exact activeClassName="active-nav-item">
          <li className="nav-items">Quiz</li>
        </NavLink>
        <NavLink to="/triangleornot" activeClassName="active-nav-item">
          <li className="nav-items">Triangle or Not</li>
        </NavLink>

        <NavLink to="/hypotenuse" activeClassName="active-nav-item">
          <li className="nav-items">Hypotenuse</li>
        </NavLink>

        <NavLink to="/areaoftriangle" activeClassName="active-nav-item">
          <li className="nav-items">Area of Triangle</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
