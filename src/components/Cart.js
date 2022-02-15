import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartIcon = () => {
  return (
    <CartWrapper>
      <button className="snipcart-checkout">
        <AiOutlineShopping size={35}></AiOutlineShopping>{" "}
      </button>
      <span className="snipcart-items-count"></span>
      <span className="snipcart-total-price"></span>
    </CartWrapper>
  );
};

export default CartIcon;
