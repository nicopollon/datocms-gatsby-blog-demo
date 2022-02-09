import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const PartecipantCounterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 100%;
  padding: 8px 0;
`;
const Counter = styled.div`
  display: flex;
  * {
    padding: 0 4px;
    text-align: center;
  }
`;
const CounterButton = styled.button`
  color: ${({ disabled }) => (disabled ? "#ccc" : "#0066ff")};
`;
const PartecipantCounter = ({
  personType,
  persons,
  decreaseCounter,
  incrementCounter,
  inputChange,
}) => {
  return (
    <PartecipantCounterContainer>
      <span style={{ width: "75%" }}> {personType} </span>
      <Counter>
        {" "}
        <CounterButton
          disabled={personType == "Children" ? persons < 1 : persons < 2}
          onClick={decreaseCounter}
        >
          <AiOutlineMinusCircle size={30} />
        </CounterButton>
        <input
          type="text"
          placeholder={1}
          size="1"
          maxLength={1}
          value={persons}
        />
        <CounterButton disabled={persons >= 9} onClick={incrementCounter}>
          <AiOutlinePlusCircle size={30} />
        </CounterButton>
      </Counter>
    </PartecipantCounterContainer>
  );
};

export default PartecipantCounter;
