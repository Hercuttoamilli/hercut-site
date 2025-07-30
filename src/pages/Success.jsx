import React, { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import Confetti from "react-confetti";
import { useCart } from "../context/CartContext";
export default function Success() {
  const { clearCart } = useCart();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set confetti window size and clear cart
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    clearCart();
  }, []);
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} recycle={false} />

      <div className="text-center max-w-md z-10">
        <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Payment Successful</h1>
        <p className="text-white/70 mb-4">
          Thank you for trusting <span className="text-pink-400 font-semibold">Her Cut</span>.
          Your order is confirmed and being prepared.
        </p>
        <p className="text-sm text-white/40 mb-6 italic">
          A receipt has been sent to your email. We’ll ship your supplements shortly.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition"
        >
          Return to Homepage
        </a>
      </div>
    </section>
  );
}
