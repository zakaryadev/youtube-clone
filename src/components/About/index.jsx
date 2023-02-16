import React from "react";
import { Container, Content, Tab } from "./styled";

const About = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Hi👋</Content.Title>
        <Content.Desc>
          <Tab />I am Zakarya, Frontend developer from Karakalpakstan. I really
          like to try new things. <br />
          All I need is coffee and a laptop. I am learning programming by
          myself. And if this program seems interesting, if you have any
          thoughts, send an email to
          <Tab />{" "}
          <a target="_blank" href="https://t.me/zakariadev">
            https://t.me/zakariadev
          </a>
          <Tab />
          or
          <Tab />
          <a target="_blank" href="mailto:zakaryamuratbaev13@gmail.com">
            zakaryamuratbaev13@gmail.com
          </a>
        </Content.Desc>
      </Content>
    </Container>
  );
};

export default About;
