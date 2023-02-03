import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import { Container, Img, Menus, Search } from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.search);
  const inputRef = React.useRef();
  const handleChange = () => {
    dispatch(setSearchValue(inputRef.current.value));
  };

  return (
    <Container>
      <Link to="/">
        <img
          src="https://clone-afc5e.web.app/static/media/youtube_dark.7c6b240a.png"
          alt="Logo"
        />
      </Link>
      <Search>
        <i className="uil uil-search"></i>
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={searchValue}
        />
        {searchValue.length > 0 && (
          <i
            className="uil uil-times"
            onClick={() => dispatch(setSearchValue(""))}
          ></i>
        )}
      </Search>
      <Menus>
        <i className="uil uil-video"></i>
        <i className="uil uil-bell"></i>
        <Img>
          <img
            src="https://avatars.githubusercontent.com/u/99710957?v=4"
            alt="logo"
          />
        </Img>
      </Menus>
    </Container>
  );
};

export default Header;
