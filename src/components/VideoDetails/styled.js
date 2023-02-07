import styled from "styled-components";

const Container = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: row;
  ~ canvas {
    display: none;
  }
`;

const Video = styled.div`
  color: white;
  flex-basis: 70%;
  & iframe {
    width: 100%;
    height: 500px;
  }
`;

Video.Title = styled.h1`
  padding-top: 10px;
  word-break: break-word;
  font-size: 1.5rem;
  line-height: 2.8rem;
  font-weight: 600;
  overflow: hidden;
  display: block;
  max-height: 5.6rem;
  -webkit-line-clamp: 2;
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
`;

Video.Desc = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 400;
  // white-space: pre;
  box-sizing: border-box;
  width: 500px;
`;

export { Container, Video };
