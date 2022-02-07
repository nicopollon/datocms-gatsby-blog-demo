import React from "react";
import {
  MobileOrderContainer,
  MobileOrderWrapper,
  PriceContainer,
  PriceTag,
} from "../styles/activityPage";
import OrderButton from "./OrderButton";
import { useState } from "react";
const MobileOrder = ({ tour }) => {
  const [adults, setAdults] = useState(1);
  const [Partecipants, setPartecipants] = useState(["Adult x" + adults], [""]);
  const [price, setPrice] = useState(tour.price);
  return (
    <MobileOrderWrapper>
      <MobileOrderContainer>
        <PriceContainer>
          Starting from
          <PriceTag>{price}€</PriceTag>
        </PriceContainer>
        <OrderButton
          tour={tour}
          quantity={1}
          price={price}
          partecipants={Partecipants}
        ></OrderButton>
      </MobileOrderContainer>
    </MobileOrderWrapper>
  );
};

export default MobileOrder;
