import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Wrapper } from "./style";

const MainLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Sidebar />
        <Outlet />
      </Wrapper>
    </React.Fragment>
  );
};

export default MainLayout;
