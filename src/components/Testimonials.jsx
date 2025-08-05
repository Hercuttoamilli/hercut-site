import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Arielle M.", quote: "Lost 11 pounds and finally got my waist back.", fullReview: "I’ve tried everything — keto, IF, you name it. But Her Cut made it effortless. No crashes, no jitters. I’m down 11 pounds and my waistline actually came back. Game changer." },
  { name: "Leila N.", quote: "Hormonal cravings during PMS? Gone.", fullReview: "Before my period, I’d binge like clockwork. Her Cut helped me sail through my cycle without needing to inhale chocolate. I feel way more emotionally stable, too." },
  { name: "Tasha R.", quote: "Down 2 dress sizes in 6 weeks.", fullReview: "I didn’t even change my workouts that much — just stayed consistent with Her Cut and walked every evening. My jeans are loose, and I feel like myself again." },
  { name: "Morgan C.", quote: "Cravings are finally manageable.", fullReview: "My biggest enemy was snacking after dinner. Her Cut killed that urge. It’s not magic — but it feels damn close." },
  { name: "Jade P.", quote: "It balanced my mood AND my weight.", fullReview: "I didn’t realize how much my hormones were affecting my weight until Her Cut. My mood swings calmed down and the scale started moving for the first time in 4 months." },
  { name: "Noelle B.", quote: "Energy is clean, hunger is lower.", fullReview: "Noticed a difference within the first 5 days. I wasn’t thinking about food 24/7, and my energy didn’t dip by noon like usual. That alone was worth it." },
  { name: "Rosa G.", quote: "Dropped 6 pounds and my face slimmed out.", fullReview: "The weight loss felt subtle but consistent. I didn’t obsess over the scale, but people started commenting. My face looks leaner and less puffy." },
  { name: "Chanel D.", quote: "This helped my thyroid & metabolism.", fullReview: "I have subclinical hypothyroidism and this gave me the extra push I needed. Not a cure — but I’m down 7 pounds and feel way more normal in my own body." },
  { name: "Amira S.", quote: "It works even when life gets hectic.", fullReview: "Between work and kids, I barely had time to eat clean. But Her Cut helped me avoid stress snacking and late-night carbs. I actually felt in control again." },
  { name: "Lana H.", quote: "Broke the plateau. Finally.", fullReview: "Was stuck at the same weight for months despite eating clean. Two weeks into Her Cut, the scale moved. I’ve lost 5 lbs and counting." },
  { name: "Kiana J.", quote: "My cycle symptoms eased up too.", fullReview: "Didn’t expect this, but my PMS bloating and cravings were less intense. I feel lighter mentally and physically." },
  { name: "Zahra A.", quote: "My stomach is visibly flatter.", fullReview: "Every morning, I’d wake up puffy. Now? My stomach actually feels flat when I wake up. Her Cut is the only thing I’ve stuck to for more than a month." },
  { name: "Tina L.", quote: "It’s subtle but real.", fullReview: "You won’t notice a huge change overnight, but after 3 weeks, you’ll see it in your face, your mood, and your pants. Steady, reliable results." },
  { name: "Renee K.", quote: "This is what a real supplement should feel like.", fullReview: "Not hyped up BS. No anxiety or caffeine buzz. Just better hunger control and the confidence that I’m doing something good for my metabolism." },
  { name: "Natalie V.", quote: "Lost 9 pounds without changing my workouts.", fullReview: "All I did was take Her Cut daily and clean up my dinner. That’s it. No extra cardio. No extreme diet. Just consistency and this formula. It actually works." },
];

export default function Section4_ReviewGallery() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [autoScrollActive, setAutoScrollActive] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    function startAutoScroll() {
      intervalRef.current = setInterval(() => {
        if (scrollContainer && autoScrollActive) {
          scrollContainer.scrollLeft += 1;
          if (
            scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
            scrollContainer.scrollWidth
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    }

    function stopAutoScroll() {
      clearInterval(intervalRef.current);
    }

    function disableAutoScroll() {
      stopAutoScroll();
      setAutoScrollActive(false);
    }

    if (autoScrollActive) startAutoScroll();

    scrollContainer.addEventListener("mouseenter", disableAutoScroll);
    scrollContainer.addEventListener("mousedown", disableAutoScroll);
    scrollContainer.addEventListener("touchstart", disableAutoScroll);
    scrollContainer.addEventListener("wheel", disableAutoScroll);

    return () => {
      stopAutoScroll();
      scrollContainer.removeEventListener("mouseenter", disableAutoScroll);
      scrollContainer.removeEventListener("mousedown", disableAutoScroll);
      scrollContainer.removeEventListener("touchstart", disableAutoScroll);
      scrollContainer.removeEventListener("wheel", disableAutoScroll);
    };
  }, [autoScrollActive]);

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center">
          What Women Are Saying
        </h2>
        <p className="text-white/60 text-center max-w-xl mx-auto mb-12 text-sm sm:text-base">
          These aren’t influencers. These are real women who tried Her Cut — and finally felt control, clarity, and results.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="snap-start shrink-0 w-80 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition"
            >
              <div>
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-xs text-white/60">Verified Review</p>
              </div>
              <blockquote>
                <p className="text-lg italic text-white/80 leading-snug">“{review.quote}”</p>
              </blockquote>
              <p className="text-sm text-white/60 leading-relaxed">{review.fullReview}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-white/70 text-sm underline hover:text-white transition">
            Read More Stories →
          </button>
        </div>
      </div>
    </section>
  );
}
