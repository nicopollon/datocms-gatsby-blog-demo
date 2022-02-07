import React from "react";
import styled from "styled-components";
import OrderButton from "./OrderButton";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import PartecipantCounter from "./PartecipantCounter";
const Price = styled.h3`
  font-weight: 600;
  font-size: 20px;
`;
const OrderWrapper = styled.div`
  flex: 1;
  padding: 16px;
  border: 2px solid #dcdfe4;
  border-radius: 16px;
  position: sticky;
  top: 0;
  margin: 16px 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const PartecipantsWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  padding: 8px 12px;
  border: 3px solid #dcdfe4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 12px 0;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  :hover {
    border: 3px solid #0066ff;
    background-color: #ebeef1;
  }
`;
const PartecipantSpenWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const PartecipantFloating = styled.div`
  right: 42px;
  top: 62px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background-color: #fff;
  position: absolute;
  min-width: 100%;
  padding: 20px 12px;
  margin: 12px 0;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 25%);
  z-index: 100;
  flex-direction: column;
`;

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
      setPrice(price + tour.childPrice);
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
