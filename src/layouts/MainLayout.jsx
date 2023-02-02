import React from "react";
import { Container } from "@mui/system";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

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
