import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
