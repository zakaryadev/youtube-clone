import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Menu } from "./styled";
const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <Menu.Item>
          <NavLink to={"/"} className={({ isActive }) => isActive && "active"}>
            <i className="uil uil-estate"></i>
            <p>Главная</p>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to={"/subscribe"}
            className={({ isActive }) => isActive && "active"}
          >
            <i className="uil uil-channel"></i>
            <p>Подписки</p>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to={"/history"}
            className={({ isActive }) => isActive && "active"}
          >
            <i class="uil uil-history"></i>
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
