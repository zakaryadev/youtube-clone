import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & img {
    height: 64px;
    animation-name: anim;
    animation-duration: 10s;
  }
`;

export { LoaderContainer };
