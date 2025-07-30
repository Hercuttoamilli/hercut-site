import React from "react";
import { Link } from "react-router-dom";

export default function MetabolicHealth() {
  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Metabolic Health</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Optimize blood sugar, thyroid, and hormone resilience — so your body becomes a fat-burning system, not a storage trap.
          </p>
        </header>

        {/* How it works */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-xl space-y-4 shadow-md">
          <h2 className="text-xl font-semibold text-pink-300">How It Works</h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Metabolic Health tackles the internal bottlenecks that quietly stall fat loss: insulin resistance, blood sugar crashes, thyroid dysfunction, and chronic cortisol. By restoring endocrine balance and metabolic responsiveness, this blend helps your body shift from survival mode to fat-burning mode.
          </p>

          <ul className="text-white/80 text-sm space-y-3 mt-4">
            <li>
              <strong className="text-white">Berberine</strong> — Mimics insulin and improves glucose regulation, helping prevent the fat-storing effects of sugar spikes.
            </li>
            <li>
              <strong className="text-white">Chromium</strong> — Supports insulin sensitivity and reduces post-meal crashes that trigger cravings and fat storage.
            </li>
            <li>
              <strong className="text-white">Ashwagandha</strong> — Calms cortisol, protects thyroid output, and reduces emotional weight gain linked to chronic stress.
            </li>
          </ul>
        </div>

        {/* Who this is for */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-pink-300 mb-4">Who This Is For</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
            <li>Women with hormonal weight fluctuations, especially after age 30 or childbirth</li>
            <li>Anyone who feels "puffy" or inflamed despite clean eating</li>
            <li>Those with low energy, brain fog, or signs of thyroid slowdown</li>
            <li>People who’ve hit a plateau after multiple diet attempts</li>
            <li>Anyone trying to correct blood sugar instability or emotional crashes</li>
          </ul>
        </div>

        {/* Button */}
        <div className="text-center">
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
