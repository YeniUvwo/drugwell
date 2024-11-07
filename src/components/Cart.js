// Cart.js
import React from 'react';
import '../App.css';

function Cart({ cartItems, onClose, removeFromCart }) {
  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button onClick={onClose} className="close-cart">X Close</button>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
          <p>No Products In The Cart</p>
          <button class='btn'>Return To Shop</button>
          </>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ₦{item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
