import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
  if (cartItems.length === 0) return;

  const lineItems = cartItems.map((item) => {
    let id;

    if (item.name.toLowerCase().includes("1 bottle")) {
      id = "1month";
    } else if (item.name.toLowerCase().includes("3 bottles")) {
      id = "3month";
    } else {
      alert("Unrecognized product: " + item.name);
      throw new Error("Unrecognized product: " + item.name);
    }

    return {
      id,
      quantity: item.quantity,
    };
  });

  setLoading(true);
  try {
    const response = await axios.post(
      "https://hercut-site.onrender.com/create-checkout-session",
      { cartItems: lineItems }
    );

    if (response.data?.url) {
      window.location.href = response.data.url;
    } else {
      throw new Error("Stripe URL not received");
    }
  } catch (error) {
    console.error("Checkout error:", error);
    alert("Something went wrong. Please try again.");
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
