import React from "react";
import { Container, Content, Tab } from "./styled";

const About = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Hi👋</Content.Title>
        <Content.Desc>
          <Tab />I am Shakhzod, Frontend developer from Karakalpakstan. I really
          like to try new things. <br />
          All I need is coffee and a laptop. I am learning programming by
          myself. And if this program seems interesting, if you have any
          thoughts, send an email to
          <Tab />{" "}
        </Content.Desc>
      </Content>
    </Container>
  );
};

export default About;
