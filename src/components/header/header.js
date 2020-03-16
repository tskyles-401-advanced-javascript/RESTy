import React from "react";
import Nav from "../nav/nav";
import "./header.scss";
/**

 * @param {*} props
 * @description renders header
 */
const Header = props => {
  return (
    <div id="headerContainer">
      <h1>RESTy</h1>
      <Nav />
    </div>
  );
};

export default Header;
