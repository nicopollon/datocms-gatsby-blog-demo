import React from "react";
import { BookBtn } from "../styles/Order";
export default function OrderButton({ tour, quantity, partecipants, price }) {
  return (
    <BookBtn
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
      data-item-custom3-name="Surname"
    >
      Book Now
    </BookBtn>
  );
}
