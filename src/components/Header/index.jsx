import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import debounce from "lodash.debounce";
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
  const [timeVal, setTimeVal] = React.useState("");
  const { searchValue } = useSelector((state) => state.search);
  const inputRef = React.useRef();

  const handleChange = () => {
    setTimeVal(inputRef.current.value);
    updateSearchValue(inputRef.current.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      updateSearchValue(inputRef.current.value);
    }
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

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
          value={timeVal}
          onKeyDown={handleKeyDown}
        />
        {searchValue.length > 1 && (
          <UilTimes
            onClick={() => {
              dispatch(setSearchValue(""));
              setTimeVal("");
            }}
          />
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
