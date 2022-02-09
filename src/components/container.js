import React from "react";
import { ContainerStyled } from "../styles/Container";

export default function Container({ children }) {
  return <ContainerStyled>{children}</ContainerStyled>;
}
