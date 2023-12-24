import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="nav_list">
        <li>
          <a href="/" className="nav_link">
            1337?
          </a>
        </li>
        <li>
          <a href="/" className="nav_link">
            CLUB
          </a>
        </li>
        <li>
          <a href="/" className="nav_link">
            FAQ
          </a>
        </li>
      </ul>
      <h1 className="nav_title">LEET COMMUNITY</h1>
      <a href="" className="nav_button">
        JOIN US
      </a>
    </nav>
  );
}

export default Nav;
