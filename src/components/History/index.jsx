import React from "react";
import { v4 as uuidv4 } from "uuid";
import VideoCard from "../Card";
import { CardWrapper } from "../Home/styled";
import { Container } from "./styled";

const History = () => {
  const data = JSON.parse(localStorage.getItem("id-s"));
  return (
    <Container>
      <CardWrapper>
        {data?.map((item) => {
          return <VideoCard {...item} key={uuidv4()} />;
        })}
      </CardWrapper>
    </Container>
  );
};

export default History;
