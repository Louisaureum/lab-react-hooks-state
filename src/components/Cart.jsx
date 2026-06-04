import React from 'react'

const Cart = ({ cartItems = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Cart Total: {cartItems.length}</p>
      <ul>
        {cartItems.length === 0 ? (
          <li>No items in your cart.</li>
        ) : (
          cartItems.map((item) => (
            <li key={item.id}>{item.name} is in your cart.</li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart
