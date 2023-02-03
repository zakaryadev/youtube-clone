import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import { Container, Img, Menus, Search } from "./styled";
import { Link } from "react-router-dom";
import {
  UilSearch,
  UilTimes,
  UilVideo,
  UilBell,
} from "@iconscout/react-unicons";
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
        <UilSearch />
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={searchValue}
        />
        {searchValue.length > 0 && (
          <UilTimes onClick={() => dispatch(setSearchValue(""))} />
        )}
      </Search>
      <Menus>
        <UilVideo />
        <UilBell />
        <Img>
          <img
            src="https://yt3.ggpht.com/ILMOLWQODN1-TX3Cg2DNZzol60eAMxBgf_9Z_Y6-BUDWBboGFynDC1P-cfuqd4pjzTVIJylEZg=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="avatar"
          />
        </Img>
      </Menus>
    </Container>
  );
};

export default Header;
