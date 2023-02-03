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

  & i {
    width: fit-content;
    position: absolute;
    padding: 5px 7px;
    &:first-child {
      font-size: 20px;
      left: 10px;
    }
    font-size: 25px;
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

  & i {
    font-size: 25px;
    padding: 5px 8px;

    & :before {
      font-weight: 200;
    }

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
  }
`;

export { Container, Logo, Search, Menus, Img };
