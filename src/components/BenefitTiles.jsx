import React from "react";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Appetite Support",
    description:
      "Targets neurological hunger cues and emotional eating triggers with compounds that regulate satiety and calm cravings.",
    link: "/appetite-support",
    ingredients: ["Garcinia", "5-HTP", "GABA"],
  },
  {
    title: "Fat Metabolism",
    description:
      "Elevates your body's fat-to-fuel efficiency using thermogenic and mitochondrial-enhancing compounds.",
    link: "/fat-metabolism",
    ingredients: ["L-Carnitine", "Green Tea", "Capsaicin"],
  },
  {
    title: "Metabolic Health",
    description:
      "Supports blood sugar balance, insulin response, and thyroid wellness — often overlooked pillars of fat loss.",
    link: "/metabolic-health",
    ingredients: ["Berberine", "Chromium", "Ashwagandha"],
  },
];

export default function Section3_Benefits() {
  return (
    <section className="bg-black text-white py-28 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 animate-fade-up">
          The 3 Core Benefits
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Link
              key={index}
              to={benefit.link}
              className="group block bg-white/5 rounded-2xl border border-white/10 px-6 py-8 shadow-xl hover:border-pink-500/40 hover:bg-white/10 transition-all backdrop-blur-lg"
            >
              <h3 className="text-xl font-semibold text-f2 mb-3 group-hover:text-pink-300 transition">
                {benefit.title}
              </h3>
              <p className="text-sm text-white/80 mb-5 leading-relaxed">
                {benefit.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {benefit.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="bg-pink-500/10 text-pink-300 text-[11px] px-3 py-1 rounded-full border border-pink-400/20 backdrop-blur-sm"
                  >
                    {ing}
                  </span>
                ))}
              </div>

              <span className="text-pink-400 text-sm font-medium underline underline-offset-2 group-hover:underline-offset-4 transition-all">
                See more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
