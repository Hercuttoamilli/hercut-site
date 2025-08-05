import React from "react";
import { Link } from "react-router-dom";

export default function RealWeightLoss() {
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
          The Real Way Women Lose Weight — And Keep It Off
        </h1>
        <p className="text-white/60 text-sm mb-10">Her Cut Blog · Weight Clarity · 6 min read</p>

        <div className="space-y-6 text-white/80 text-[16px] leading-relaxed">
          <p>
            If you’ve ever lost weight only to gain it all back, you’re not alone.  
            It’s not because you “fell off.” It’s because the plan you were on was never built to last — or to work with your biology.
          </p>

          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-white/70">
            Sustainable weight loss isn’t about restriction. It’s about regulation. And for women, that starts with rhythm, not intensity.
          </blockquote>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">Why Most Plans Fail Women</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>They ignore hormonal phases</strong></li>
            <li><strong>They cause stress spikes</strong> (aka cortisol storage)</li>
            <li><strong>They focus on the scale</strong>, not inflammation or cycle retention</li>
            <li><strong>They’re built for men</strong>, not female biology</li>
          </ul>

          <p>
            If your plan doesn’t consider your gut, mood, cravings, and energy — it’s not sustainable.
          </p>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">What Actually Works</h2>
          <ol className="list-decimal list-inside text-white/70 space-y-1">
            <li><strong>Stabilize blood sugar</strong> — through protein and fiber</li>
            <li><strong>Move daily</strong> — walking + strength > endless cardio</li>
            <li><strong>Prioritize sleep</strong> — fat burn is hormone-dependent</li>
            <li><strong>Support digestion and detox</strong> — not restrict harder</li>
            <li><strong>Align with your cycle</strong> — some weeks need grace, others momentum</li>
          </ol>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/70 text-sm leading-relaxed mt-6">
            <strong>Ritual Tip:</strong><br />
            Weight loss happens easiest when your body is regulated — not when it’s punished. Support your metabolism, don’t suppress it.
          </div>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">Where Her Cut Comes In</h2>
          <p>
            Her Cut is not a magic pill. It’s a tool that helps your body:
          </p>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>Control cravings:</strong> with Gymnema + Inositol + Chromium</li>
            <li><strong>Burn stored fat:</strong> with L-Carnitine, MCT, and CLA</li>
            <li><strong>Reduce bloat + inflammation:</strong> with Turmeric and CoQ10</li>
            <li><strong>Clear hormone congestion:</strong> with Choline and detox-support nutrients</li>
          </ul>

          <p>
            When your system is supported and consistent, weight loss becomes a side effect — not a battle.
          </p>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">Final Thought: Consistency Over Intensity</h2>
          <p>
            Her Cut is for the woman who’s done chasing hype. Who wants results that don’t disappear.  
            Who wants her metabolism to work — even when life gets busy.
          </p>
        </div>

        <div className="mt-14 p-6 rounded-xl bg-gradient-to-br from-pink-500/10 via-white/5 to-pink-500/10 border border-white/10 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Support your metabolism — not just your motivation.
          </h3>
          <p className="text-white/60 text-sm mb-4">
            Take 90 days and give your body what it actually needs to burn.
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
