import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "How should I take Her Cut?",
    answer:
      "Take 2 capsules each morning and each night with water before your first meal and last meal. For best results, stay consistent daily — especially during hormonal cycles or diet phases.",
  },
  {
    question: "Will it help control my cravings?",
    answer:
      "Yes. Her Cut targets the neurological and hormonal pathways behind hunger — including serotonin, cortisol, and ghrelin. Most users report reduced emotional eating within 7–10 days.",
  },
  {
    question: "Does Her Cut contain caffeine or stimulants?",
    answer:
      "No. It’s 100% stimulant-free — no caffeine, no yohimbine, no crash. Just clean, clinically-backed support for fat metabolism, appetite regulation, and metabolic health.",
  },
  {
    question: "Can I still take it if I already follow a diet or use other supplements?",
    answer:
      "Absolutely. Her Cut is designed to *enhance* your current habits — whether you’re on keto, fasting, or just trying to eat better. It also stacks safely with most other daily supplements.",
  },
  {
    question: "What makes Her Cut different from typical fat burners?",
    answer:
      "Most fat burners rely on harsh stimulants and dehydration tricks. Her Cut supports real, biological change — including fat oxidation, thyroid balance, blood sugar control, and appetite modulation — with zero fake energy or dependency.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Many women feel reduced cravings and better energy within the first 7–10 days. Visible fat loss and body composition changes typically build between weeks 3 and 12 with consistent use.",
  },
  {
    question: "Do I need to work out for it to work?",
    answer:
      "No — but movement will absolutely amplify your results. Even walking or light strength training can accelerate Her Cut’s metabolic effects. It’s a support system, not a replacement.",
  },
  {
    question: "Is Her Cut safe for long-term use?",
    answer:
      "Yes. It’s formulated with clinically studied ingredients at safe, effective dosages. There are no habit-forming ingredients, and many women use Her Cut for 3+ months during active fat loss phases.",
  },
];

export default function Section6_FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex justify-between items-center px-4 py-4 text-white font-medium text-base sm:text-lg transition"
              >
                <span>{faq.question}</span>
                <span className="text-pink-400 text-2xl leading-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-4 pb-4 text-sm sm:text-base text-white/70"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
