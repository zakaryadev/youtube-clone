import React from "react";
import logo from "../../../public/logo.png";
import { LoaderContainer } from "./styled";
const Loader = () => {
  return (
    <LoaderContainer>
      <img src={logo} alt="Logo" />
    </LoaderContainer>
  );
};

export default Loader;
