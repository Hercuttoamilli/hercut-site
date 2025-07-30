import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  {
    title: "Active Ingredients",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Vitamin C (ascorbic acid):</strong> Supports immune and metabolic function.</li>
        <li><strong>Vitamin B6 (Pyridoxine HCL):</strong> Aids energy metabolism and hormonal balance.</li>
        <li><strong>Choline (choline bitartrate):</strong> Supports liver health and fat transport.</li>
        <li><strong>Chromium (polynicotinate):</strong> Helps control blood sugar and cravings.</li>
        <li><strong>Medium Chain Triglycerides (MCT):</strong> Fuels thermogenesis and energy.</li>
        <li><strong>CLA & GLA:</strong> Fatty acids that support fat metabolism and reduce inflammation.</li>
        <li><strong>Bladderwrack, Inositol, Gymnema, Garcinia, Turmeric, CoQ10:</strong> Plant-based compounds that support insulin, digestion, and energy.</li>
        <li><strong>L-Carnitine:</strong> Transports fat to mitochondria for burning.</li>
        <li><strong>Proprietary Blend:</strong> Includes Spirulina, Amino Acids, Herbal Extracts, Kelp, Cranberry, Cinnamon, Grapefruit, and more.</li>
      </ul>
    ),
  },
  {
    title: "Suggested Use",
    content: (
      <p>
        Take 4 capsules daily with meals, or as directed by your healthcare provider. For best results, take 2 capsules with water before breakfast and 2 before dinner, alongside a balanced diet and physical activity.
      </p>
    ),
  },
  {
    title: "Cautions & Warnings",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Do not exceed the recommended dose.</li>
        <li>Not intended for pregnant or nursing mothers or children under 18.</li>
        <li>Consult a doctor before use if diabetic or on medications.</li>
        <li>Do not use if the safety seal is broken or missing.</li>
        <li>Keep out of reach of children. Store in a cool, dry place.</li>
      </ul>
    ),
  },
  {
    title: "Disclaimers",
    content: (
      <p className="text-sm">
        *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
        <br />
        Manufactured in the USA in a facility that may also process milk, soy, wheat, egg, peanuts, tree nuts, fish, and shellfish.
      </p>
    ),
  },
  {
    title: "Product Specs",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Capsules per bottle: 90</li>
        <li>Suggested daily dose: 4 capsules</li>
        <li>Gross Weight: 0.2 lb (90.7g)</li>
        <li>Non-GMO. Gelatin capsule (bovine).</li>
        <li>Country of Origin: USA</li>
      </ul>
    ),
  },
];

export default function Ingredients() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Full Ingredients Breakdown</h1>
        <p className="text-center text-white/70 mb-12">
          A clinical-grade blend of vitamins, lipids, amino acids, herbs, and thermogenic agents — backed by real science.
        </p>

        <div className="space-y-4">
          {sections.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm p-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex justify-between items-center text-white"
              >
                <span className="text-base font-semibold">{item.title}</span>
                <span className="text-pink-400">{openIndex === index ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3 text-sm text-white/70"
                  >
                    {item.content}
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
