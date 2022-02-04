import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
`;

const CartIcon = () => {
  return (
    <CartWrapper>
      <button className="snipcart-checkout">
        <AiOutlineShoppingCart size={35}></AiOutlineShoppingCart>{" "}
      </button>
    </CartWrapper>
  );
};

export default CartIcon;
