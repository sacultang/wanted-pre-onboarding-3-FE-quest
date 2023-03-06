import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div
      style={{ borderRight: "1px solid gray", width: "400px", height: "100vh" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">page1</Link>
        <Link to="/page2">page2</Link>
        <Link to="/page3">page3</Link>
      </div>
    </div>
  );
};

export default NavBar;
