import React from "react";
import { BookBtn } from "../styles/Order";
export default function OrderButton({
  tour,
  quantity,
  partecipants,
  price,
  name,
  surname,
  qrcode,
  onClick,
}) {
  return (
    <BookBtn
      onClick={onClick}
      className="snipcart-add-item"
      data-item-id={tour.id}
      data-item-price={price}
      data-item-url={"/"}
      data-item-name={tour.title}
      data-item-quantity={quantity}
      data-item-image={tour.coverImage.gatsbyImageData}
      data-item-custom1-name="Ticket Type"
      data-item-custom1-type="readonly"
      data-item-custom1-value={partecipants}
      data-item-stackable="never"
      data-item-custom2-name="First Name"
      data-item-custom2-value={name}
      data-item-custom2-required="true"
      data-item-custom3-name="Surname"
      data-item-custom3-value={surname}
      data-item-custom3-required="true"
      data-item-custom4-name="QRCODE"
      data-item-custom4-value={qrcode}
      data-item-custom4-type="readonly"
    >
      Book Now
    </BookBtn>
  );
}
