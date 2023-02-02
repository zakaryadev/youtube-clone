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
  padding: 0 30px;
  width: 572px;

  & input {
    background: transparent;
    outline: none;
    border: none;
    width: 100%;
    color: #ffffff;
  }
`;

export { Container, Logo, Search };
