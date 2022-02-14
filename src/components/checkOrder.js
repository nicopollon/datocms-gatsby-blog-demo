import React from "react";
import { BookBtn } from "../styles/Order";

const CheckOrder = ({ onClick }) => {
  return <BookBtn onClick={onClick}>Check for Tickets</BookBtn>;
};

export default CheckOrder;
