import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    // Step 1: Determine plan from cart
    const firstItemName = cartItems[0].name.toLowerCase().replace(/-/g, " ");
    let plan;

    if (firstItemName.includes("1 bottle")) {
      plan = "1month";
    } else if (firstItemName.includes("3 bottles")) {
      plan = "3month";
    } else {
      alert("Unrecognized product in cart");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://hercut-backend.onrender.com/create-checkout-session", {

        plan,
      });
      window.location.href = response.data.url;
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <p className="text-lg text-white/70">Your cart is empty.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Confirm Your Order</h2>
        <ul className="mb-6 space-y-2">
          {cartItems.map((item, idx) => (
            <li key={idx} className="flex justify-between text-sm text-white/80">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleCheckout}
          className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-white/90 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Redirecting..." : "Proceed to Payment"}
        </button>
      </div>
    </section>
  );
}
