import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  margin-top: 50px;
  width: 80%;
`;

Content.Title = styled.h1`
  font-family: "Inter";
  font-weight: 700;
  text-align: center;
  font-size: 64px;
  background-image: linear-gradient(90deg, #4ca5ff 2.34%, #b673f8 100.78%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

Content.Desc = styled.p`
  margin-top: 50px;
  font-weight: 400;
  line-height: 27px;
  font-size: 20px;
  white-space: break-spaces;
`;

export { Container, Content };
