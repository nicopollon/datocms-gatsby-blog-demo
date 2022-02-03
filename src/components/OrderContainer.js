import React from "react";
import styled from "styled-components";
import OrderButton from "./OrderButton";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
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
  right: 32px;
  top: 52px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background-color: #fff;
  position: absolute;
  min-width: 100%;
  padding: 20px 12px;
  margin: 12px 0;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 25%);
  z-index: 100;
`;
const PartecipantStepperContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 100%;
  padding: 8px 0;
`;
const Stepper = styled.div`
  display: flex;
  * {
    padding: 0 4px;
  }
`;
const OrderContainer = ({ tour }) => {
  const [quantity, setQuantity] = useState(1);
  const [Partecipants, setPartecipants] = useState("Adult x " + quantity);
  const [visible, setVisible] = useState(false);
  return (
    <OrderWrapper>
      <Price>{tour.price}€ per Person</Price>
      <PartecipantsWrapper onClick={() => setVisible(!visible)}>
        <BsPerson size={25} />
        <PartecipantSpenWrap>
          <span style={{ fontSize: ".75rem" }}>Partecipants</span>
          <span>{Partecipants}</span>
        </PartecipantSpenWrap>
        <PartecipantFloating visible={visible}>
          <PartecipantStepperContainer>
            <span> Adults </span>
            <Stepper>
              <button>+</button>
              <input placeholder="a" size="1" />
              <button>-</button>
            </Stepper>
          </PartecipantStepperContainer>
        </PartecipantFloating>
      </PartecipantsWrapper>
      <OrderButton tour={tour} quantity={1} />
    </OrderWrapper>
  );
};

export default OrderContainer;
