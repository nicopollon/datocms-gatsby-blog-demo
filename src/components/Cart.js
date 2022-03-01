import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CartItems = styled.span`
  border-radius: 50px/50px;
  width: 25px;
  height: 25px;
  text-align: center;
  background: #e77137;
  position: relative;
  right: 10px;
  top: -10px;
`;
const CartIcon = () => {
  return (
    <CartWrapper>
      <button className="snipcart-checkout">
        <AiOutlineShopping size={35}></AiOutlineShopping>{" "}
      </button>
      <span className="snipcart-items-count"></span>
    </CartWrapper>
  );
};

export default CartIcon;
