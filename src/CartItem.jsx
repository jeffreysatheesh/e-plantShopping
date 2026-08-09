import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse dollar amounts safely (e.g., "$15" -> 15)
  const parsePrice = (priceString) => {
    if (typeof priceString === 'number') return priceString;
    return parseFloat(priceString.replace(/[^0-9.-]+/g, '')) || 0;
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const unitPrice = parsePrice(item.cost);
      return total + unitPrice * item.quantity;
    }, 0).toFixed(2);
  };

  // Calculate total cost for a single item (unit price * quantity)
  const calculateTotalCost = (item) => {
    const unitPrice = parsePrice(item.cost);
    return (unitPrice * item.quantity).toFixed(2);
  };

  // Handle increment quantity button (+)
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrement quantity button (-)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // If quantity is 1, decrementing removes the item
      dispatch(removeItem(item.name));
    }
  };

  // Handle delete item button
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Handle Checkout button ("Coming Soon" alert)
  const handleCheckout = () => {
    alert('Checkout Feature Coming Soon! Thank you for choosing Paradise Nursery.');
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <div className="total-cart-amount">
          Total Cart Amount: ${calculateTotalAmount()}
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <h3>Your cart is empty 🌿</h3>
          <p>Explore our lush collection and add your favorite houseplants!</p>
          <button 
            className="continue-shopping-btn" 
            style={{ marginTop: '1.5rem' }}
            onClick={(e) => onContinueShopping(e)}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item) => (
              <div className="cart-item-card" key={item.name}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-thumbnail" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-unit-price">
                    Unit Price: {typeof item.cost === 'number' ? `$${item.cost}` : item.cost}
                  </div>
                  <div className="cart-item-subtotal">
                    Subtotal: ${calculateTotalCost(item)}
                  </div>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button 
                    className="delete-item-btn" 
                    onClick={() => handleRemove(item)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-navigation-bar">
            <button 
              className="continue-shopping-btn" 
              onClick={(e) => onContinueShopping(e)}
            >
              Continue Shopping
            </button>
            <button 
              className="checkout-btn" 
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;