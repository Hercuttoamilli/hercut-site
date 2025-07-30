import React from "react";
import { XCircle } from "lucide-react";

export default function Cancel() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <XCircle size={48} className="text-red-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Payment Canceled</h1>
        <p className="text-white/70 mb-4">
          Looks like you didn’t complete your order. No stress — your cart is still saved.
        </p>
        <a
          href="/cart"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition"
        >
          Return to Cart
        </a>
      </div>
    </section>
  );
}
