import React from "react";
import { Link } from "react-router-dom";
import hercutbottle from '../assets/hercut-bottle.svg';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-center flex flex-col justify-center items-center px-6 pt-36 pb-20 relative overflow-hidden">
      {/* Title */}
      <h1 className="text-f2 text-4xl sm:text-5xl font-semibold tracking-tight mb-3 animate-fade-up">
        Her Cut
      </h1>

      {/* Subheadline */}
      <h2
        className="text-d4 text-lg sm:text-xl font-medium mb-4 max-w-md animate-fade-up"
        style={{ animationDelay: "0.2s", animationFillMode: "both" }}
      >
        Clinical Fat-Loss Support — Refined.
      </h2>

      {/* Body Copy */}
      <p
        className="text-white/80 text-base max-w-md leading-relaxed mb-6 animate-fade-up"
        style={{ animationDelay: "0.4s", animationFillMode: "both" }}
      >
        Her Cut blends L-Carnitine, MCTs, Choline, and botanical extracts to support fat metabolism, appetite control, and energy balance — all while respecting female hormonal rhythms. No fluff. Just clinical formulation.
      </p>

      {/* Luxury Pills */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up"
        style={{ animationDelay: "0.5s", animationFillMode: "both" }}
      >
        <span className="px-4 py-1 text-xs rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:border-white transition">
          Precision-crafted
        </span>
        <span className="px-4 py-1 text-xs rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:border-white transition">
          USA-manufactured
        </span>
        <span className="px-4 py-1 text-xs rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:border-white transition">
          90 capsules
        </span>
      </div>

      {/* CTAs */}
      <div
        className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up"
        style={{ animationDelay: "0.6s", animationFillMode: "both" }}
      >
        <Link
          to="/estimator"
          className="inline-block bg-white text-black font-medium px-6 py-3 rounded-full shadow hover:bg-white/90 transition"
        >
          Start Estimator
        </Link>
        <a
          href="#purchase"
          className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-sm backdrop-blur-sm hover:bg-white/15 transition"
        >
          Purchase Now
        </a>
      </div>

      {/* Bottle + Glow */}
      <div className="relative flex flex-col justify-center items-center">
        {/* Softer glow */}
        <div className="w-[300px] h-[300px] rounded-full bg-[#ffffff0c] blur-3xl absolute z-0" />

        {/* Bottle image */}
        <img
          src={hercutbottle}
          alt="Her Cut Bottle"
          className="relative z-10 w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] drop-shadow-xl transition-transform duration-700 hover:rotate-[-1.5deg]"
        />

        {/* Scroll cue */}
        <p className="mt-10 text-white/50 text-sm animate-pulse">↓ scroll</p>
      </div>
    </section>
  );
}
