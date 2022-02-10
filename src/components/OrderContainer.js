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
import CustomerInfo from "./CustomerInfo";

const OrderContainer = ({ tour }) => {
  const [adults, setAdults] = useState(1);
  const [Partecipants, setPartecipants] = useState(
    ["Adult x" + adults + " "],
    [""]
  );
  const [visible, setVisible] = useState(false);
  const [price, setPrice] = useState(tour.price);
  const [children, setChildren] = useState(0);
  const [firstName, setFirstName] = useState("");

  const [surname, setSurname] = useState("");
  const incrementCounter = (person, setPersons, personType) => {
    const personInt = parseInt(person);
    const tourPriceInt = parseInt(tour.price);

    const tourChildPriceInt = parseInt(tour.childPrice);
    setPersons(personInt + 1);

    if (personType === "Adults") {
      setPrice(price + tourPriceInt);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[0] = "Adult x " + (personInt + 1);
      setPartecipants(PartecipantsCopy);
    }
    if (personType === "Children") {
      setPrice(price + tourChildPriceInt);
      let PartecipantsCopy = [...Partecipants];

      PartecipantsCopy[1] = " Child x " + (personInt + 1);
      setPartecipants(PartecipantsCopy);
    }
  };

  const decreaseCounter = (person, setPersons, personType) => {
    const personInt = parseInt(person);
    const tourPriceInt = parseInt(tour.price);

    const tourChildPriceInt = parseInt(tour.childPrice);
    setPersons(personInt - 1);
    if (personType === "Adults") {
      setPrice(price - tourPriceInt);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[0] = "Adult x " + (personInt - 1);
      setPartecipants(PartecipantsCopy);
    }
    if (personType === "Children") {
      setPrice(price - tourChildPriceInt);
      let PartecipantsCopy = [...Partecipants];
      PartecipantsCopy[1] = " Child x " + (personInt - 1);
      setPartecipants(PartecipantsCopy);
    }
  };

  const handleNameChange = (e, firstName) => {
    setFirstName(e.target.value);
  };
  const handleSurnameChange = (e, firstName) => {
    setSurname(e.target.value);
  };

  return (
    <OrderWrapper>
      <Price>{tour.price}€ per Person</Price>
      <Price>{price}€ Total</Price>
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
      <CustomerInfo
        infoType={"Your Name"}
        info={firstName}
        inputChange={(e) => handleNameChange(e, firstName)}
      />
      <CustomerInfo
        info={surname}
        infoType="Your surname"
        inputChange={(e) => handleSurnameChange(e, surname)}
      />
      <OrderButton
        infoType={"Your Surname"}
        tour={tour}
        quantity={1}
        price={price}
        partecipants={Partecipants}
        name={firstName}
        surname={surname}
        qrcode={"My QR CODE "}
      />
    </OrderWrapper>
  );
};

export default OrderContainer;
