import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import QRCode from "qrcode.react";

const QrCodeComponent = ({
  firstName,
  surname,
  tourName,
  ticketPrice,
  uniqueId,
  canvasUrl,
  elementId,
  partecipants,
}) => {
  const [QrCodeValue, setQrCodeValue] = useState({
    Name: firstName,
    Surname: surname,
    TourName: tourName,
    TicketPrice: ticketPrice,
    UniqueID: uniqueId,
    Partecipants: partecipants,
  });
  const downloadQR = () => {
    const canvas = document.getElementById(elementId);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(pngUrl);
  };
  return (
    <div style={{ display: "none" }}>
      <QRCode
        size={256}
        value={JSON.stringify(QrCodeValue)}
        id={elementId}
      ></QRCode>
    </div>
  );
};

export default QrCodeComponent;
