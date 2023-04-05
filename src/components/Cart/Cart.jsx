import React, { useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (let product of cart) {
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  let tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;
  return (
    <>
      <h3>Shopping cart</h3>
      <p>Product items : {quantity} </p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping Charge : ${totalShipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
    </>
  );
};

export default Cart;
