import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #0f0f0f;
  color: white;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  color: #fff !important;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2000000 !important;
  & a {
    & img {
      height: 48px;
    }
  }
`;

const Logo = styled.div``;

const Search = styled.div`
  position: relative;
  border-radius: 100px;
  border: 1px solid hsl(0, 0%, 18.82%);
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  width: 572px;
  background: #121212;

  & svg {
    width: fit-content;
    position: absolute;
    padding: 8px;
    &:first-child {
      left: 10px;
      height: 20px;
    }
    right: 10px;
    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
    }
    &:active {
      transform: scale(0.9);
    }
  }
  & input {
    background: transparent;
    outline: none;
    border: none;
    width: 100%;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & svg {
    padding: 8px;
    cursor: pointer;

    &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
    }
  }
`;

const Img = styled.div`
  & img {
    height: 36px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export { Container, Logo, Search, Menus, Img };
