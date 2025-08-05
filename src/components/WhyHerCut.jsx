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
          Her Cut was built for the woman who’s tired of guessing, tired of bloating, and tired of chasing results that never stick. This isn’t another stim-heavy buzz pill — it’s clinical support for control, clarity, and fat loss that feels good.
        </p>

        <div className="grid gap-10 sm:grid-cols-3">
          <div className="group bg-white/5 rounded-xl border border-white/10 backdrop-blur-md px-6 py-8 transition hover:shadow-[0_0_40px_rgba(255,255,255,0.07)]">
            <h3 className="text-xl font-semibold text-f2 mb-3 group-hover:text-white transition">
              Real Ingredient Synergy
            </h3>
            <p className="text-sm text-white/80">
              A clinical stack of L-Carnitine, MCTs, Choline, and Chromium — working in harmony to spark fat metabolism and thermogenesis without chaos or crash.
            </p>
          </div>

          <div className="group bg-white/5 rounded-xl border border-white/10 backdrop-blur-md px-6 py-8 transition hover:shadow-[0_0_40px_rgba(255,255,255,0.07)]">
            <h3 className="text-xl font-semibold text-f2 mb-3 group-hover:text-white transition">
              Built for the Female Body
            </h3>
            <p className="text-sm text-white/80">
              Your hormones matter. Her Cut supports appetite, energy, and cycle rhythm through ingredients that align with how women actually function.
            </p>
          </div>

          <div className="group bg-white/5 rounded-xl border border-white/10 backdrop-blur-md px-6 py-8 transition hover:shadow-[0_0_40px_rgba(255,255,255,0.07)]">
            <h3 className="text-xl font-semibold text-f2 mb-3 group-hover:text-white transition">
              Craving-Blocking Botanicals
            </h3>
            <p className="text-sm text-white/80">
              Plant-based powerhouses like Gymnema and Garcinia help dull cravings, balance blood sugar, and bring calm to your cut. Less noise. More control.
            </p>
          </div>
        </div>

        <div
          className="mt-16 border-t border-white/10 pt-10 text-sm text-white/60 max-w-xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Manufactured in the USA. 90 capsules per bottle. Suggested use: 4 daily. Vegan. Non-GMO. No artificial hype — just clinical clarity. Made for women who are done guessing.
        </div>
      </div>
    </section>
  );
}
