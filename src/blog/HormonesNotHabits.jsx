import React from "react";
import { Link } from "react-router-dom";

export default function HormonesNotHabits() {
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
          Hormones, Not Habits: Why Your Weight Swings Aren’t About Eating More
        </h1>
        <p className="text-white/60 text-sm mb-10">Her Cut Blog · Cycles & Fat Loss · 5 min read</p>

        <div className="space-y-6 text-white/80 text-[16px] leading-relaxed">
          <p>
            You didn’t suddenly lose discipline. You didn’t “fall off.”  
            Your weight gain this week might have nothing to do with food — and everything to do with timing.
          </p>

          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-white/70">
            Hormonal shifts change how your body holds water, burns fat, stores energy, and triggers cravings — week to week.
          </blockquote>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">The 4-Phase Hormonal Rhythm</h2>
          <p>Your body doesn’t run on a 24-hour male cycle — it runs on a 28-day female cycle:</p>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>Menstrual (Days 1–5):</strong> Energy is low, cravings may calm.</li>
            <li><strong>Follicular (Days 6–13):</strong> Metabolism rises, mood lifts, fat burn improves.</li>
            <li><strong>Ovulation (Day 14):</strong> Peak energy. Appetite may drop.</li>
            <li><strong>Luteal (Days 15–28):</strong> Estrogen drops, progesterone rises — leading to more fat storage, fluid retention, and cravings.</li>
          </ul>

          <p>
            If your weight jumps 3–5 pounds in your luteal phase, it’s not “you slipping.” It’s your body responding to hormone shifts.
          </p>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">Why Most Fat-Loss Plans Fail Women</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>They ignore hormonal phases</li>
            <li>They rely on stimulants and restriction</li>
            <li>They treat female biology like male biology</li>
          </ul>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/70 text-sm leading-relaxed mt-6">
            <strong>Ritual Tip:</strong><br />
            Start tracking your cycle and cravings. Most women do better when they reduce intensity during the luteal phase and support detox during the follicular phase.
          </div>

          <h2 className="text-white font-semibold text-xl mt-10 mb-2">How Her Cut Helps Regulate the Swings</h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><strong>Chromium + Inositol:</strong> Help curb PMS cravings</li>
            <li><strong>Choline + B6:</strong> Support hormone processing and mood clarity</li>
            <li><strong>MCT + CLA:</strong> Encourage fat burn during the follicular and ovulation phase</li>
            <li><strong>Botanicals:</strong> Calm inflammation and support cycle consistency</li>
          </ul>

          <p>
            Your cravings, water weight, and fatigue aren’t just willpower issues. They’re biological phases — and they can be supported.
          </p>
        </div>

        <div className="mt-14 p-6 rounded-xl bg-gradient-to-br from-pink-500/10 via-white/5 to-pink-500/10 border border-white/10 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            Ready to stop guessing and start syncing?
          </h3>
          <p className="text-white/60 text-sm mb-4">
            Her Cut supports you through every phase — not just your “on” days.
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
