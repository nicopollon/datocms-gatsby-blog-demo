import React from "react";
import styled from "styled-components";
import OrderButton from "./OrderButton";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import PartecipantCounter from "./PartecipantCounter";
import {
  Price,
  OrderWrapper,
  PartecipantsWrapper,
  PartecipantSpenWrap,
  PartecipantFloating,
} from "../styles/Order";

const OrderContainer = ({ tour }) => {
  const [adults, setAdults] = useState(1);
  const [Partecipants, setPartecipants] = useState(["Adult x" + adults], [""]);
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState(tour.price);
  const [children, setChildren] = useState(0);

  const incrementCounter = (person, setPersons, personType) => {
    setPersons(person + 1);

    if (personType === "Adults") {
      setPrice(price + tour.price);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[0] = "Adult x " + (person + 1);
      setPartecipants(PartecipantsCopy);
    }
    if (personType === "Children") {
      setPrice(price + tour.childPrice);
      let PartecipantsCopy = [...Partecipants];

      PartecipantsCopy[1] = " Child x " + (person + 1);
      setPartecipants(PartecipantsCopy);
    }
  };

  const decreaseCounter = (person, setPersons, personType) => {
    setPersons(person - 1);
    if (personType === "Adults") {
      setPrice(price - tour.price);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[0] = "Adult x " + (person - 1);
      setPartecipants(PartecipantsCopy);
    }
    if (personType === "Children") {
      setPrice(price - tour.childPrice);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[1] = " Child x " + (person - 1);
      setPartecipants(PartecipantsCopy);
    }
  };

  return (
    <OrderWrapper>
      <Price>{tour.price}€ per Person</Price>
      <PartecipantsWrapper onClick={() => setVisible(!visible)}>
        <BsPerson size={25} />
        <PartecipantSpenWrap>
          <span style={{ fontSize: ".75rem" }}>Partecipants</span>
          <span>{Partecipants}</span>
        </PartecipantSpenWrap>
      </PartecipantsWrapper>
      <PartecipantFloating visible={visible}>
        <PartecipantCounter
          persons={adults}
          incrementCounter={() => incrementCounter(adults, setAdults, "Adults")}
          decreaseCounter={() => decreaseCounter(adults, setAdults, "Adults")}
          personType="Adults"
        />
        <PartecipantCounter
          persons={children}
          incrementCounter={() =>
            incrementCounter(children, setChildren, "Children")
          }
          decreaseCounter={() =>
            decreaseCounter(children, setChildren, "Children")
          }
          personType="Children"
        />
      </PartecipantFloating>
      <OrderButton
        tour={tour}
        quantity={1}
        price={price}
        partecipants={Partecipants}
      />
    </OrderWrapper>
  );
};

export default OrderContainer;
