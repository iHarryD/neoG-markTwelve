import React from "react";
import "../App.css";

function Footer() {
  return (
    <>
      <ul id="social-media-tab">
        <li>
          <a className="social-media-links" href="https://github.com/iHarryD">
            GitHub
          </a>
        </li>
        <li>
          <a
            className="social-media-links"
            href="https://www.linkedin.com/in/prashant-kumar-a97251195/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p id="portfolio-link">
        Website created by{" "}
        <a href="https://iharryd.github.io/personal-portfolio/">Harry</a>
      </p>
    </>
  );
}

export default Footer;
