import React from "react";

export default function Privacy() {
  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-lg">
            Your privacy matters. Here’s exactly how we collect, protect, and use your data.
          </p>
        </header>

        <div className="space-y-6 text-white/80 text-sm">
          <div>
            <h2 className="text-pink-400 font-semibold mb-2">1. What We Collect</h2>
            <p>
              When you browse our site, join our newsletter, or make a purchase, we may collect:
              your name, email address, shipping address, and order history. We do not collect or store payment details — all transactions are securely processed via Stripe.
            </p>
          </div>

          <div>
            <h2 className="text-pink-400 font-semibold mb-2">2. How Your Data Is Used</h2>
            <p>
              We use your information to:
              <ul className="list-disc list-inside mt-2">
                <li>Process and fulfill your orders</li>
                <li>Send transactional and promotional emails</li>
                <li>Understand how customers use our site to improve UX</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-pink-400 font-semibold mb-2">3. Cookies & Tracking</h2>
            <p>
              We use cookies to personalize your experience and analyze traffic. You can disable cookies through your browser settings — but parts of the site may stop working correctly.
            </p>
          </div>

          <div>
            <h2 className="text-pink-400 font-semibold mb-2">4. Data Security</h2>
            <p>
              Your data is stored on secure servers with strict access controls. We never sell or rent your information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-pink-400 font-semibold mb-2">5. Third-Party Services</h2>
            <p>
              We use trusted third-party tools (e.g. Stripe, Firebase) to power this website. Their policies may apply in addition to ours.
            </p>
          </div>

          <div>
            <h2 className="text-pink-400 font-semibold mb-2">6. Your Choices</h2>
            <p>
              You can unsubscribe from emails at any time, request your data, or delete your account by contacting us at <a href="mailto:hercutoffical@gmail.com" className="text-white underline">hercutoffical@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-pink-400 font-semibold mb-2">7. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of the site means you agree to the latest version.
            </p>
          </div>

          <div className="text-xs text-white/40">
            Last updated: July 2025
          </div>
        </div>
      </div>
    </section>
  );
}
