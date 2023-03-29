import React, { useEffect } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
   
    
    let total = 0;
    let totalShipping =  0;
    for(let product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = total * 7 /100;
    const grandTotal = total + totalShipping + tax;
    return (
        <>
            <h3>Shopping cart</h3>
            <p>Product items : {cart.length} </p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h5>Grand Total : ${grandTotal}</h5>
        </>
    );
};

export default Cart;