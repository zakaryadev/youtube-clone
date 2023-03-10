import styled from "styled-components";

const Container = styled.div`
  background-color: #0f0f0f;
  position: sticky;
  top: 56px;
  left: 0;
  height: calc(100vh - 56px);
  flex-basis: 16%;
  min-width: 240px;
  max-width: 240px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 10px;
`;

Menu.Item = styled.div`
  & a {
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    padding: 8px 15px;
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 20px;

    &:hover {
      background: #ffffff1f;
    }
  }
`;

export { Container, Menu };
