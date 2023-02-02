import React from "react";
import { Container, Search } from "./styled";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img
          src="https://clone-afc5e.web.app/static/media/youtube_dark.7c6b240a.png"
          alt="Logo"
        />
      </Link>
      <Search>
        <input type="text" />
      </Search>
    </Container>
  );
};

export default Header;
