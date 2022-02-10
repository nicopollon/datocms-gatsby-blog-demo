import React from "react";
import { PartecipantsWrapper, Input } from "../styles/Order";

import PartecipantCounter from "./PartecipantCounter";

const CustomerInfo = ({ info, inputChange, infoType }) => {
  return (
    <Input
      type="text"
      placeholder={infoType}
      value={info}
      onChange={inputChange}
    ></Input>
  );
};

export default CustomerInfo;
