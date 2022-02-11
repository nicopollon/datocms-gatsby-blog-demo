import React from "react";
import {
  MobileOrderContainer,
  MobileOrderWrapper,
  PriceContainer,
  PriceTag,
} from "../styles/activityPage";
import { BookBtn } from "../styles/Order";
import { useState } from "react";
import MobileOrderMenu from "./MobileOrderMenu";
const MobileOrder = ({ tour, url }) => {
  const [adults, setAdults] = useState(1);
  const [Partecipants, setPartecipants] = useState(["Adult x" + adults], [""]);
  const [price, setPrice] = useState(tour.price);
  const [open, setopen] = useState(false);
  return (
    <>
      <MobileOrderWrapper>
        <MobileOrderContainer>
          <PriceContainer>
            Starting from
            <PriceTag>{price}€</PriceTag>
          </PriceContainer>
          <BookBtn onClick={() => setopen(!open)}>Order Now</BookBtn>
        </MobileOrderContainer>
      </MobileOrderWrapper>
      <MobileOrderMenu
        tour={tour}
        open={open}
        setOpen={() => setopen(false)}
        url={url}
      ></MobileOrderMenu>
    </>
  );
};

export default MobileOrder;
