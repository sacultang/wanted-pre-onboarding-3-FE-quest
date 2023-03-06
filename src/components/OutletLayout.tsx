import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const OutletLayout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default OutletLayout;
