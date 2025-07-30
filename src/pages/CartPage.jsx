// pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Your Cart</h1>
          <p className="text-white/60 text-sm sm:text-base">
            You’re one step closer to unlocking your transformation.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <p className="text-white/50 text-lg">Your cart is currently empty.</p>
            <Link
              to="/#purchase"
              className="inline-block bg-white text-black px-6 py-3 font-medium rounded-full hover:bg-white/90 transition"
            >
              Return to Purchase
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cartItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex justify-between items-center bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm text-white/60">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-pink-400 text-sm font-medium hover:underline"
                  >
                    Remove
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Total + Actions */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-medium text-white/80">Total</span>
                <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="w-full sm:w-auto border border-white/20 bg-white/5 text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
                >
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="w-full sm:w-auto text-center bg-white text-black px-5 py-2 font-semibold rounded-full hover:bg-white/90 transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
