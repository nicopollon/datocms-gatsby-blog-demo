import React from "react";
import styled from "styled-components";

const BookBtn = styled.button`
  border-radius: 500px;
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
`;

export default function OrderButton({ tour, quantity }) {
  return (
    <BookBtn
      className="snipcart-add-item"
      data-item-id={tour.id}
      data-item-price={tour.price}
      data-item-url={"/"}
      data-item-name={tour.title}
      data-item-quantity={quantity}
    >
      Book Now
    </BookBtn>
  );
}
