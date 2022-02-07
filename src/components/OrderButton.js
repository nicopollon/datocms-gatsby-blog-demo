import React from "react";
import styled from "styled-components";

const BookBtn = styled.button`
  border-radius: 24px;
  padding: 9px 24px;
  background-color: #0066ff;
  color: #fff;
  font-weight: 600;
  margin-top: 4px;
  width: 100%;
  &:hover {
    opacity: 0.75;
  }
  transition: all 0.4s ease-in;
  @media screen and (max-width: 768px) {
    flex-basis: fit-content;
  }
`;

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
