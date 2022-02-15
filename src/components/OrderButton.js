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
      data-item-stackable="never"
      data-item-custom1-name="Partecipants"
      data-item-custom1-type="readonly"
      data-item-custom1-value={partecipants}
      data-item-custom2-name="qrCode"
      data-item-custom2-type="hidden"
      data-item-custom2-value={qrcode}
    >
      Book Now
    </BookBtn>
  );
}
