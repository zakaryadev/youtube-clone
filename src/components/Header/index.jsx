import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/searchSlice";
import debounce from "lodash.debounce";
import { Container, Img, Logo, Menus, Search } from "./styled";
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

  const [timeVal, setTimeVal] = React.useState("");
  const inputRef = React.useRef();

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 450),
    []
  );

  const handleChange = (event) => {
    setTimeVal(inputRef.current.value);
    if (event.key === "Enter") {
      updateSearchValue(inputRef.current.value);
    }
  };

  return (
    <Container>
      <Link to="/">
        <Logo>
          <img
            src="https://clone-afc5e.web.app/static/media/youtube_dark.7c6b240a.png"
            alt="Logo"
          />
        </Logo>
      </Link>
      <Search>
        <UilSearch />
        <input
          type="text"
          ref={inputRef}
          onChange={handleChange}
          value={timeVal ? timeVal : searchValue}
          onKeyDown={handleChange}
        />
        {timeVal.length > 0 ||
          (searchValue.length > 0 && (
            <UilTimes
              onClick={() => {
                dispatch(setSearchValue(""));
                setTimeVal("");
                localStorage.removeItem("nextPageToken");
              }}
            />
          ))}
      </Search>
      <Menus>
        <UilVideo />
        <UilBell />
        <Img href="https://github.com/zakaryadev" target="_blank">
          <img
            src="https://cdn.devdojo.com/users/August2022/zakaryamuratbaev13.jpg"
            alt="avatar"
          />
        </Img>
      </Menus>
    </Container>
  );
};

export default Header;
