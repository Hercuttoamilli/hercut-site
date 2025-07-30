import React from "react";
import { Link } from "react-router-dom";

export default function AppetiteSupport() {
  return (
    <section className="bg-black text-white px-6 py-28">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-pink-200">
            Appetite Support
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Regulate cravings. Calm emotional eating. Stay in control — without fighting your biology.
          </p>
        </header>

        {/* How It Works */}
        <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3 text-pink-300">How It Works</h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
            Appetite Support targets the neurochemical and hormonal signals behind hunger and cravings. By naturally increasing serotonin and regulating ghrelin, it helps reduce emotional snacking, sugar urges, and late-night binges — all without relying on harsh stimulants or blunt suppressants.
          </p>
        </div>

        {/* Ingredient Breakdown */}
        <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-5 text-pink-300">Clinical Ingredient Breakdown</h2>
          <ul className="space-y-4 text-sm sm:text-base text-white/80">
            <li>
              <strong className="text-white">5-HTP</strong> — Supports serotonin synthesis to elevate mood and reduce appetite-related stress eating.
            </li>
            <li>
              <strong className="text-white">Garcinia Cambogia</strong> — Delivers HCA to help limit fat storage and reduce carb/sugar cravings.
            </li>
            <li>
              <strong className="text-white">GABA</strong> — Soothes the nervous system to limit stress-induced hunger and nighttime cortisol spikes.
            </li>
          </ul>
        </div>

        {/* Target Audience */}
        <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-5 text-pink-300">Who This Is For</h2>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base text-white/80">
            <li>Women who feel like cravings sabotage their cutting phase</li>
            <li>Those who eat in response to stress, anxiety, or overwhelm</li>
            <li>Anyone who experiences uncontrollable hunger during PMS or hormonal dips</li>
          </ul>
        </div>

        {/* Return CTA */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-pink-500 to-pink-300 text-black font-medium px-8 py-3 rounded-full shadow-md hover:brightness-110 transition"
          >
            Return to Purchase
          </Link>
        </div>
      </div>
    </section>
  );
}
