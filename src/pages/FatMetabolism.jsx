import React from "react";
import { Link } from "react-router-dom";

export default function FatMetabolism() {
  return (
    <section className="bg-black text-white px-6 py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-4xl mx-auto space-y-14 relative z-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
            Fat Metabolism
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            When your body stores fat but refuses to burn it — this is the biological reset button.
          </p>
        </header>

        {/* Section: What’s Going On */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm space-y-4">
          <h2 className="text-xl font-semibold text-pink-300">The Metabolic Disconnect</h2>
          <p className="text-white/80 text-sm leading-relaxed">
            You’re doing the workouts. You’re eating clean. But the scale won’t move. Why?
            <br /><br />
            In many women, fat becomes metabolically “stuck.” The issue isn’t effort — it’s that your mitochondria aren’t signaling to burn. This formula addresses that block.
          </p>
        </div>

        {/* Section: Ingredient Deep Dive */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm space-y-5">
          <h2 className="text-xl font-semibold text-pink-300">Clinical Ingredient Breakdown</h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <strong className="text-white">L-Carnitine</strong> — Helps shuttle fatty acids into your mitochondria for clean, stimulant-free energy.
            </li>
            <li>
              <strong className="text-white">Green Tea Extract (EGCG)</strong> — A gentle thermogenic that ramps up fat-burning *without overstimulation*.
            </li>
            <li>
              <strong className="text-white">Capsaicin</strong> — Turns on your body’s heat mechanism to burn more calories at rest, by activating brown fat.
            </li>
          </ul>
        </div>

        {/* Section: Who It's For */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm space-y-4">
          <h2 className="text-xl font-semibold text-pink-300">Who This Helps</h2>
          <ul className="list-disc list-inside space-y-3 text-sm text-white/80">
            <li>Women whose bodies feel “resistant” to fat loss even with diet and exercise</li>
            <li>Those with cold extremities, low energy, or sluggish metabolism</li>
            <li>Anyone who wants fat-burning without caffeine overload</li>
            <li>People interested in deep metabolic rewiring — not just masking symptoms</li>
          </ul>
          <p className="text-xs text-white/50 italic pt-3 text-center">
            This isn’t a stimulant high. It’s a biological unlock.
          </p>
        </div>

        {/* Return CTA */}
        <div className="relative flex justify-center mt-10">
          {/* glowing ring */}
          <div className="absolute w-40 h-40 rounded-full bg-pink-500/10 blur-2xl animate-pulse-slow" />

          <Link
            to="/"
            className="relative z-10 inline-block bg-gradient-to-r from-white to-pink-100 text-black px-8 py-3 font-semibold rounded-full hover:brightness-105 transition shadow-lg"
          >
            Return to Purchase
          </Link>
        </div>
      </div>
    </section>
  );
}
