import React from "react";
import { Link } from "react-router-dom";

export default function FatLossAfter25() {
  return (
    <section className="bg-black text-white min-h-screen pt-24 pb-32 px-4">
      <div className="max-w-3xl mx-auto font-sans border border-white/10 rounded-2xl p-6 sm:p-10 bg-white/5 backdrop-blur-sm shadow-xl">

        <Link
          to="/"
          className="text-sm text-white/50 hover:text-white transition mb-6 inline-block"
        >
          ← Back to homepage
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
          Why Fat Loss After 25 Feels So Different — And What To Do About It
        </h1>
        <p className="text-white/60 text-sm mb-10">Her Cut Blog · Metabolism · 6 min read</p>

        <div className="space-y-6 text-white/80 text-[16px] leading-relaxed">
          <p>
            You used to drop 5 pounds in a week just by skipping dessert.  
            Now, you're meal prepping, walking, drinking water… and the scale won’t budge.
          </p>

          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-white/70">
            Your body isn’t broken — it’s just evolving. Fat loss after 25 isn’t harder because you’re doing something wrong. It’s harder because your biology has shifted.
          </blockquote>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">Here’s What Changes After 25</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>Muscle mass naturally declines</strong> — lowering your resting burn rate</li>
            <li><strong>Stress increases</strong> — careers, life, responsibility = more cortisol</li>
            <li><strong>Your cycle may shift</strong> — leading to stronger cravings and water retention</li>
            <li><strong>Gut reactions grow</strong> — inflammation from foods gets more noticeable</li>
            <li><strong>Sleep worsens</strong> — meaning less recovery, more fat storage</li>
          </ul>

          <p>
            It’s not your fault. It’s just that the metabolism you had at 19 isn’t the same one you’re working with now. You need a strategy built for this version of you.
          </p>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">How to Support the 25+ Metabolism</h2>
          <p>
            Women over 25 thrive with sustainable rituals, not extremes:
          </p>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>Eat enough protein to fuel muscle and stabilize hunger</li>
            <li>Walk daily, strength train when you can</li>
            <li>Track sleep like it matters (because it does)</li>
            <li>Lower inflammation with less processed food and smarter fat-burning support</li>
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/70 text-sm leading-relaxed mt-6">
            <strong>Ritual Tip:</strong><br />
            Try tracking energy and hunger across your cycle instead of only tracking weight. You’ll start noticing which weeks your body needs support — not starvation.
          </div>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">Where Her Cut Fits In</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>L-Carnitine:</strong> Helps convert stored fat to fuel</li>
            <li><strong>MCTs + CLA:</strong> Encourage healthy metabolism without caffeine</li>
            <li><strong>Choline + B6:</strong> Support detox, liver function, and hormone clarity</li>
            <li><strong>Botanicals:</strong> Calm cravings and reduce water retention</li>
          </ul>

          <p>
            Her Cut helps your body burn smarter, not harder — especially as it ages and adapts.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 p-6 rounded-xl bg-gradient-to-br from-pink-500/10 via-white/5 to-pink-500/10 border border-white/10 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Your strategy needs to evolve with your body.
          </h3>
          <p className="text-white/60 text-sm mb-4">
            Her Cut was made for grown-woman metabolism — not crash-diet culture.
          </p>
          <Link
            to="/estimator"
            className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-white/90 transition"
          >
            Start Estimator
          </Link>
        </div>
      </div>
    </section>
  );
}
