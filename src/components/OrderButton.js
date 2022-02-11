import React from "react";
import { BookBtn } from "../styles/Order";
export default function OrderButton({
  tour,
  partecipants,
  price,
  qrcode,
  onClick,
  itemURL,
}) {
  return (
    <BookBtn
      onClick={onClick}
      className="snipcart-add-item"
      data-item-id={tour.id}
      data-item-price={price}
      data-item-name={tour.title}
      data-item-url={itemURL}
      data-item-image={tour.coverImage.gatsbyImageData}
      data-item-custom1-name="Ticket Type"
      data-item-custom1-type="readonly"
      data-item-custom1-value={partecipants}
      data-item-stackable="never"
      data-item-custom2-name="First Name"
      data-item-custom2-value=""
      data-item-custom2-required="true"
      data-item-custom3-name="Surname"
      data-item-custom3-value=""
      data-item-custom3-required="true"
      data-item-custom4-name="qrCode"
      data-item-custom4-type="hidden"
      data-item-custom4-value={qrcode}
    >
      Book Now
    </BookBtn>
  );
}
