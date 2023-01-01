import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;

    }
    const tax = parseFloat((total * .1).toFixed(2));
    const grandTotal = parseFloat((total + shipping + tax).toFixed(2));


    return (
        <div className='cart'>
            <h3>Orders Summary</h3>
            <p>Selected Item:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <hr />
            <h4>Grand Total: ${grandTotal}</h4>


        </div>
    );
};

export default Cart;