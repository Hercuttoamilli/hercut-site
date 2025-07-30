import React from "react";

export default function WhyHerCut() {
  return (
    <section className="bg-black text-white px-6 py-28 text-center font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white animate-fade-up">
          Why Her Cut?
        </h2>
        <p
          className="text-white/70 text-base sm:text-lg mb-16 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Her Cut is a refined fat-loss supplement engineered for sustainable results — not synthetic hype.
          Each capsule draws from biochemistry, not buzzwords — helping you cut with control.
        </p>

        <div className="grid gap-10 sm:grid-cols-3">
          <div className="group bg-white/5 rounded-xl border border-white/10 backdrop-blur-md px-6 py-8 transition hover:shadow-[0_0_40px_rgba(255,255,255,0.07)]">
            <h3 className="text-xl font-semibold text-f2 mb-3 group-hover:text-white transition">
              Ingredient Synergy
            </h3>
            <p className="text-sm text-white/80">
              Combines Vitamin C, B6, Choline, MCTs, Chromium, and L-Carnitine to elevate metabolism and support natural thermogenesis.
            </p>
          </div>

          <div className="group bg-white/5 rounded-xl border border-white/10 backdrop-blur-md px-6 py-8 transition hover:shadow-[0_0_40px_rgba(255,255,255,0.07)]">
            <h3 className="text-xl font-semibold text-f2 mb-3 group-hover:text-white transition">
              Female-Centric Formula
            </h3>
            <p className="text-sm text-white/80">
              From hormonal rhythm balance to neurochemical appetite control, Her Cut works *with* your biology — not against it.
            </p>
          </div>

          <div className="group bg-white/5 rounded-xl border border-white/10 backdrop-blur-md px-6 py-8 transition hover:shadow-[0_0_40px_rgba(255,255,255,0.07)]">
            <h3 className="text-xl font-semibold text-f2 mb-3 group-hover:text-white transition">
              Beyond the Burn
            </h3>
            <p className="text-sm text-white/80">
              Includes rare botanicals like Gymnema, Bladderwrack, and Garcinia — to calm cravings, optimize digestion, and energize your cut.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 text-sm text-white/60 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Manufactured in the USA. 90 capsules per bottle. Suggested use: 4 daily. Non-GMO. No artificial hype — just clinical clarity.
        </div>
      </div>
    </section>
  );
}
