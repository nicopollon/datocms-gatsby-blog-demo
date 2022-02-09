import React from "react";
import QRCode from "react-qr-code";

const QrCodeComponent = ({ value }) => {
  return <QRCode size={256} value={value}></QRCode>;
};

export default QrCodeComponent;
