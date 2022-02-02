import React from "react";

const OrderButton = ({ activity }) => {
  return (
    <button
      style={{ background: "red", padding: "24px" }}
      class="snipcart-add-item"
      data-item-id={activity.id}
      data-item-price={activity.price}
      data-item-url={"/"}
      data-item-name={activity.title}
    >
      Order me
    </button>
  );
};

export default OrderButton;
