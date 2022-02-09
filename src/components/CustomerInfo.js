import React from "react";
import { PartecipantsWrapper } from "../styles/Order";
import PartecipantCounter from "./PartecipantCounter";

const CustomerInfo = ({ info, inputChange, infoType }) => {
  return (
    <PartecipantsWrapper>
      <input
        type="text"
        placeholder={infoType}
        value={info}
        onChange={inputChange}
      ></input>
    </PartecipantsWrapper>
  );
};

export default CustomerInfo;
