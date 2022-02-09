import React from "react";
import { useState } from "react";
import Intro from "./intro";
import Container from "./container";
import QrCodeComponent from "./qrcode";

const Test = ({ firstName, surname, tourName, ticketPrice, uniqueId }) => {
  const [QrCodeValue, setQrCodeValue] = useState({
    Name: firstName,
    Surname: surname,
    TourName: tourName,
    TicketPrice: ticketPrice,
    UniqueID: uniqueId,
  });

  return (
    <Container>
      <Intro />
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <QrCodeComponent value={JSON.stringify(QrCodeValue)} />
      </div>{" "}
    </Container>
  );
};

export default Test;
