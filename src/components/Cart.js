import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-left: 5px;
  }
`;

const CartIcon = () => {
  return (
    <CartWrapper>
      <button className="snipcart-checkout">
        <AiOutlineShoppingCart size={35}></AiOutlineShoppingCart>
      </button>
      <span>Cart</span>
      <p className="snipcart-items-count"></p>
    </CartWrapper>
  );
};

export default CartIcon;
