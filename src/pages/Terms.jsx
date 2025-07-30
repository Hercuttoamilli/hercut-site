import React from "react";

export default function Terms() {
  return (
    <section className="bg-black text-white px-6 py-24 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Please read these terms carefully before using the Her Cut website or purchasing our product.
          </p>
        </header>

        <div className="space-y-8 text-sm text-white/80 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-2">1. Use of Website</h2>
            <p>
              By accessing our website, you agree to comply with these Terms of Service and all applicable laws and
              regulations. You may not use our site or products for any unlawful purpose.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">2. Medical Disclaimer</h2>
            <p>
              Her Cut is a dietary supplement, not a medication. It is not intended to diagnose, treat, cure, or prevent
              any disease. Always consult your healthcare provider before starting any supplement regimen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">3. Purchases & No Refund Policy</h2>
            <p>
              All purchases are final. Due to the nature of our product, we do not accept returns or offer refunds. Please
              read the product descriptions carefully before purchase.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">4. Product Use & Safety</h2>
            <p>
              Use only as directed. Do not exceed the recommended dose. Her Cut is not intended for use by individuals
              under 18, pregnant or nursing women, or anyone with pre-existing medical conditions without medical
              supervision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">5. Intellectual Property</h2>
            <p>
              All content, design, branding, and imagery on this site is the property of Her Cut and may not be reused or
              repurposed without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">6. Limitation of Liability</h2>
            <p>
              We are not liable for any damages or losses resulting from the use or misuse of Her Cut. Your use of our
              product and website is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">7. Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of the website or products after changes means you
              accept the new terms.
            </p>
          </section>
        </div>

        <footer className="text-center text-sm text-white/50 pt-10">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </footer>
      </div>
    </section>
  );
}
