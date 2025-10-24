import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="pt-24 bg-gradient-to-br from-red-50 to-amber-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold font-playfair text-red-900 mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-lg">
            <p className="text-xl text-gray-700 mb-6">Your cart is currently empty.</p>
            <Link to="/marketplace-locator">
              <Button className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-8 py-3 text-lg rounded-md shadow-lg">Explore Markets</Button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ul className="space-y-6">
              {cartItems.map(item => (
                <li key={item.id} className="flex items-center justify-between border-b border-amber-500/30 pb-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-6"/>
                    <div>
                      <h2 className="text-xl font-semibold font-playfair text-red-900">{item.name}</h2>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="number" 
                      value={item.quantity} 
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 text-center border rounded-md mx-4"
                      min="1"
                    />
                    <Button variant="ghost" className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)}>Remove</Button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 text-right">
              <h2 className="text-3xl font-bold font-playfair text-red-900">Total: ₹{getCartTotal()}</h2>
              <Button className="mt-6 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-10 py-3 text-xl rounded-md shadow-lg">Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;