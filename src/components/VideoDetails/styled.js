import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

const Video = styled.div`
  flex-basis: 70%;
  & iframe {
    width: 1080px;
    height: 540px;
  }
`;

export {Container, Video};

