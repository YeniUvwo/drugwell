// Checkout.js
import React, { useState } from 'react';

function Checkout({ cartItems }) {
  const [deliveryLocation, setDeliveryLocation] = useState('');

  const handleCheckout = () => {
    // Logic for checking out
    console.log('Checking out with:', cartItems, 'to', deliveryLocation);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <input
        type="text"
        placeholder="Enter delivery location"
        value={deliveryLocation}
        onChange={(e) => setDeliveryLocation(e.target.value)}
      />
      <button onClick={handleCheckout}>Confirm and Checkout</button>
    </div>
  );
}

export default Checkout;
