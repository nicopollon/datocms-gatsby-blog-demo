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
  const childprice = 20;
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
      data-item-custom1-name="Ticket Type"
      data-item-custom1-type="readonly"
      data-item-custom1-value={partecipants}
      data-item-custom2-name="qrCode"
      data-item-custom2-type="hidden"
      data-item-custom2-value={qrcode}
      data-item-custom3-name="Ticket Type"
      data-item-custom3-options={`Adult | Child [${-childprice}]`}
    >
      Book Now
    </BookBtn>
  );
}
