import React from "react";
import styled from "styled-components";
import { useState } from "react";
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
const PartecipantCounter = ({
  personType,
  persons,
  decreaseCounter,
  incrementCounter,
}) => {
  return (
    <PartecipantCounterContainer>
      <span style={{ width: "75%" }}> {personType} </span>
      <Counter>
        {" "}
        <button disabled={persons < 2} onClick={decreaseCounter}>
          -
        </button>
        <input placeholder="1" size="1" maxLength={1} value={persons} />
        <button disabled={persons >= 9} onClick={incrementCounter}>
          +
        </button>
      </Counter>
    </PartecipantCounterContainer>
  );
};

export default PartecipantCounter;
