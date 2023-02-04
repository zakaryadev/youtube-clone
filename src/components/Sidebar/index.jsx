import React from "react";
import { NavLink } from "react-router-dom";
import { UilEstate, UilChannel, UilHistory } from "@iconscout/react-unicons";
import { Container, Menu } from "./styled";

const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <Menu.Item>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            <UilEstate />
            <p>Home</p>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to={"/subscribe"}
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            <UilChannel />
            <p>Subscriptions</p>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to={"/history"}
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            <UilHistory />
            <p>History</p>
          </NavLink>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default Sidebar;
