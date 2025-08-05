import React from "react";
import BlogTile from "./BlogTile";

import hormones from "../assets/hormones-not-habits.jpg";
import bloat from "../assets/clean-eating-bloat.jpg";
import after25 from "../assets/fat-loss-after-25.jpg";
import chemistry from "../assets/metabolic-chemistry.jpg";
import weightloss from "../assets/real-weight-loss.png";

const blogData = [
  {
    title: "Hormones, Not Habits",
    image: hormones,
    link: "/blog/hormones-not-habits",
  },
  {
    title: "Clean Eating & Constant Bloat",
    image: bloat,
    link: "/blog/clean-eating-bloat",
  },
  {
    title: "Why Fat Loss After 25 Feels Different",
    image: after25,
    link: "/blog/fat-loss-after-25",
  },
  {
    title: "Her Cut Isn’t Magic — It’s Metabolic Chemistry",
    image: chemistry,
    link: "/blog/metabolic-chemistry",
  },
  {
    title: "The Real Way Women Lose Weight — And Keep It Off",
    image: weightloss,
    link: "/blog/real-weight-loss",
  },
];

export default function BlogScroll() {
  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">The Her Cut Blog</h2>
        <p className="text-white/60 text-base mb-8 max-w-xl">
          Science-backed clarity. Ritual-ready insights. Everything real women need to lose fat without losing themselves.
        </p>

        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {blogData.map((blog, i) => (
            <BlogTile
              key={i}
              title={blog.title}
              image={blog.image}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
