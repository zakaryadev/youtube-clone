import styled from "styled-components";

const Container = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  ~ canvas {
    display: none;
  }
`;

const Video = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-basis: 70%;
  width: 70%;
  & iframe {
    width: 100%;
    height: 500px;
  }
`;

Video.Title = styled.h1`
  padding-top: 10px;
  word-break: break-word;
  font-size: 20px;
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

Video.Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 60px;
  }
`;

Video.ChannelTitle = styled.div`
  cursor: pointer;
`;

Video.Statistics = styled.div`
  display: flex;
  gap: 20px;
`;

Video.View = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`;

Video.Desc = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  white-space: break-spaces;
  box-sizing: border-box;
  width: inherit;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
  height: 10%;
  word-wrap: break-word;
  & a {
    color: #3ea6ff;
  }
`;

const Toggler = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.6rem;
  padding: 5px;
`;

export { Container, Video, Toggler };
