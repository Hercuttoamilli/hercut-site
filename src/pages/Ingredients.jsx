import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections = [
  {
    title: "Active Ingredients",
    content: (
      <ul className="list-disc list-inside space-y-3">
        <li><strong>Vitamin C (ascorbic acid):</strong> Strengthens immune defenses while supporting metabolic clarity.</li>
        <li><strong>Vitamin B6 (Pyridoxine HCL):</strong> Essential for hormone balance and mood stability, especially during your cycle.</li>
        <li><strong>Choline (choline bitartrate):</strong> Supports liver detox + fat mobilization — key for healthy weight control.</li>
        <li><strong>Chromium (polynicotinate):</strong> Helps tame cravings by balancing blood sugar and insulin response.</li>
        <li><strong>Medium Chain Triglycerides (MCT):</strong> Clean fat-based energy to boost thermogenesis and mental clarity.</li>
        <li><strong>CLA & GLA:</strong> Healthy fatty acids that support fat loss and calm low-grade inflammation.</li>
        <li><strong>Bladderwrack, Inositol, Gymnema, Garcinia, Turmeric, CoQ10:</strong> A botanical matrix for appetite control, thyroid function, and digestive ease.</li>
        <li><strong>L-Carnitine:</strong> Helps transport fat into mitochondria — literally turning stored fat into usable energy.</li>
        <li><strong>Proprietary Blend:</strong> Spirulina, Kelp, Cranberry, Cinnamon, Amino Acids, and Herbal Extracts for metabolic protection and cellular support.</li>
      </ul>
    ),
  },
  {
    title: "Suggested Use",
    content: (
      <p className="leading-relaxed">
        Take 4 capsules daily with meals, or as advised by your healthcare provider. <br />
        For optimal results: Take 2 capsules with water 15–30 minutes before breakfast and 2 before dinner. Pair with movement and nutrient-dense meals.
      </p>
    ),
  },
  {
    title: "Cautions & Warnings",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Do not exceed the recommended dose.</li>
        <li>Not intended for pregnant or nursing women, or individuals under 18.</li>
        <li>Consult your physician prior to use if taking medication or managing a health condition (especially thyroid or blood sugar related).</li>
        <li>Do not use if safety seal is broken or missing.</li>
        <li>Keep out of reach of children. Store in a cool, dry place.</li>
      </ul>
    ),
  },
  {
    title: "Disclaimers",
    content: (
      <p className="text-sm leading-relaxed">
        *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        <br />
        Manufactured in the USA in a facility that may also process allergens including: milk, soy, wheat, egg, peanuts, tree nuts, fish, and shellfish.
      </p>
    ),
  },
  {
    title: "Product Specs",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Capsules per bottle: 90</li>
        <li>Suggested daily dose: 4 capsules</li>
        <li>Capsule Type: Gelatin (bovine)</li>
        <li>Gross Weight: 0.2 lb (90.7g)</li>
        <li>Manufactured in: USA</li>
        <li>Non-GMO. No synthetic stimulants.</li>
      </ul>
    ),
  },
];

export default function Ingredients() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          The Formula Behind Her Cut
        </h1>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          Every capsule is designed to work *with* your biology — not against it. This is clinical-grade support for women who want better appetite control, hormonal balance, and fat-burning clarity.
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
