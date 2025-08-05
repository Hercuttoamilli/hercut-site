import React from "react";
import { Link } from "react-router-dom";

export default function CleanEatingBloat() {
  return (
    <section className="bg-black text-white min-h-screen pt-24 pb-32 px-4">
      <div className="max-w-3xl mx-auto font-sans border border-white/10 rounded-2xl p-6 sm:p-10 bg-white/5 backdrop-blur-sm shadow-xl">

        {/* Back link */}
        <Link
          to="/"
          className="text-sm text-white/50 hover:text-white transition mb-6 inline-block"
        >
          ← Back to homepage
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
          Clean Eating & Constant Bloat: Why Healthy Food Isn’t Always Hormone-Friendly
        </h1>
        <p className="text-white/60 text-sm mb-10">Her Cut Blog · Gut & Hormones · 6 min read</p>

        {/* Body */}
        <div className="space-y-6 text-white/80 text-[16px] leading-relaxed">

          <p>
            You’re doing all the right things — salads, smoothies, clean meals. But your stomach still feels heavy. Your jeans feel tight. You’re bloated by noon. What gives?
          </p>

          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-white/70">
            Gut issues and hormonal imbalance often hide behind “healthy habits.” Clean eating isn’t helpful if your body can’t process it calmly.
          </blockquote>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">The Bloat You’re Feeling Isn’t Always Food Quantity</h2>
          <p>
            It's about <em>how your body is handling</em> what you eat — digestion, inflammation, and hormone–gut communication.
          </p>

          <p>Here are 3 hidden triggers of “clean bloat” most people miss:</p>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>Fiber overload:</strong> Salads, seed mixes, and “gut-healthy” snacks can overwhelm a sensitive gut lining.</li>
            <li><strong>Estrogen congestion:</strong> When your liver and gut can’t detox spent hormones, you feel inflamed, puffy, and slow.</li>
            <li><strong>Low stomach acid:</strong> Clean food ≠ easy to digest. Protein + veggies still require fire to break down.</li>
          </ul>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">The Gut–Hormone Connection</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>80% of serotonin is made in your gut</strong> — affecting mood and cravings</li>
            <li><strong>Detox pathways for estrogen</strong> depend on microbial balance + fiber processing</li>
            <li><strong>Sluggish gut = sluggish thyroid</strong> = low metabolism and fluid retention</li>
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/70 text-sm leading-relaxed mt-6">
            <strong>Ritual Tip:</strong><br />
            Try 3 days of cooked, low-inflammation meals: squash, wild rice, steamed greens, warm tea.  
            Ditch raw veggies and cold smoothies — and see what clears.
          </div>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">How Her Cut Supports Gut-Hormone Balance</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>Bladderwrack + Inositol:</strong> Support thyroid and insulin function</li>
            <li><strong>Turmeric + CoQ10:</strong> Calm gut-driven inflammation</li>
            <li><strong>Choline:</strong> Supports hormone detox & bile flow</li>
            <li><strong>L-Carnitine:</strong> Converts stubborn fat into fuel</li>
          </ul>

          <p>
            When digestion is aligned and inflammation is down, everything else starts to click: energy, cravings, bloating, clarity — and yes, fat loss.
          </p>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">Final Thought: Clean Doesn’t Always Mean Clear</h2>
          <p>
            Just because it’s healthy doesn’t mean it’s healing.  
            You need meals your body can actually process — and supplements that help clear what’s silently building up inside.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 p-6 rounded-xl bg-gradient-to-br from-pink-500/10 via-white/5 to-pink-500/10 border border-white/10 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Feeling this? Time to start your Her Cut ritual.
          </h3>
          <p className="text-white/60 text-sm mb-4">
            Support fat loss by restoring gut–hormone balance from the inside out.
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
