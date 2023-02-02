import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Outlet />
    </React.Fragment>
  );
};

export default MainLayout;
