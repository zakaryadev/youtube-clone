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
            <p>Главная</p>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to={"/subscribe"}
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            <UilChannel />
            <p>Подписки</p>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to={"/history"}
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            <UilHistory />
            <p>История</p>
          </NavLink>
        </Menu.Item>
        <Menu.Item>AWa</Menu.Item>
        <Menu.Item>AWa</Menu.Item>
      </Menu>
    </Container>
  );
};

export default Sidebar;
