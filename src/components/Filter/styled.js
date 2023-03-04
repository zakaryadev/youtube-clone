import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background: #3e3e3e;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ffffff;
  cursor: pointer;
  border-radius: 8px;
  & input {
    color: #ffffff;
    background: transparent;
    ::placeholder {
      color: lightgray;
    }
    ::active {
      outline: none;

      box-shadow: none;
    }
  }
  & select {
    background: #3e3e3e;
    outline: none;
    color: white;
    padding: 10px;
    border-radius: inherit;
  }
`;

export { Container };
