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
`;

Content.Desc = styled.p`
  margin-top: 50px;
  font-weight: 400;
  line-height: 30px;
  font-size: 20px;
  white-space: break-spaces;
  white-space: break-spaces;
  & a {
    color: #3ea6ff;
  }
`;

const Tab = styled.span`
  margin-left: 20px;
`;

export { Container, Content, Tab };
