import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    id: "30-day",
    title: "1 Bottle",
    sub: "30-Day Supply",
    price: 38.0,
    quantity: 1,
    highlight: false,
    badges: ["Starter Plan", "Stimulant-Free"],
    note: "Great for a light reset or trial month.",
  },
  {
    id: "90-day",
    title: "3 Bottles",
    sub: "90-Day Supply • Best Results",
    price: 96.0,
    quantity: 1, // Just 1 product in cart; logic handled in backend
    highlight: true,
    badges: ["Best Value", "Free U.S. Shipping", "Stimulant-Free"],
    note: "Clinically-backed window to experience true change.",
  },
];

export default function Section5_PurchaseOptions() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { addToCart } = useCart();

  const handleAdd = (plan) => {
    setSelectedPlan(plan.id);
    addToCart({
      id: plan.id,
      name: plan.title,
      price: plan.price,
      quantity: 1, // always 1, we treat 3-bottle plan as one unit
    });
    toast.success(`${plan.title} added to cart`);
  };

  return (
    <section className="bg-black text-white px-6 py-28" id="purchase">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-white/60 text-sm max-w-xl mx-auto mb-14">
          No subscriptions. No auto-billing. Just real results backed by science.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border border-white/10 p-8 relative transition-all hover:scale-[1.015] backdrop-blur-xl ${
                plan.highlight
                  ? "bg-gradient-to-br from-pink-400/10 via-white/5 to-pink-500/10 ring-2 ring-pink-400/40"
                  : "bg-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-3 right-4 bg-pink-400 text-xs px-3 py-1 rounded-full font-medium tracking-wide text-black">
                  Best Results
                </div>
              )}

              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-sm text-white/70 mb-3">{plan.sub}</p>
              <p className="text-3xl font-bold mb-4">${plan.price.toFixed(2)}</p>

              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {plan.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="bg-pink-500/10 text-pink-300 text-xs font-medium px-3 py-1 rounded-full border border-pink-500/30"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <p className="text-xs text-white/60 mb-6 italic">{plan.note}</p>

              <button
                onClick={() => handleAdd(plan)}
                className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-white/90 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Trust Markers */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-sm text-white/60">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={16} className="text-green-400" />
            USA-Manufactured in GMP-Certified Facility
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={16} className="text-green-400" />
            Transparent, Clinical-Backed Dosing
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={16} className="text-green-400" />
            No Auto-Billing or Hidden Charges
          </div>
        </div>
      </div>
    </section>
  );
}
