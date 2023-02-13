import React from "react";
import { Container } from "./styled";

const History = () => {
  return <Container>{localStorage.getItem("id-s")}</Container>;
};

export default History;
