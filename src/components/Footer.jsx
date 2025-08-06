import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";
import { submitNewsletterEmail } from "../submitNewsletter";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitNewsletterEmail(email);

    if (result.success) {
      setPopup("You're on the list. Welcome to the ritual.");
      setEmail("");
    } else {
      setPopup("Something went wrong. Please try again.");
    }

    setTimeout(() => setPopup(null), 3000);
  };

  return (
    <footer className="bg-black border-t border-white/10 text-white px-6 py-16 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        
        {/* Column 1: Explore */}
        <div className="space-y-4">
          <h4 className="font-semibold text-lg text-white tracking-tight">Explore</h4>
          <ul className="space-y-2 text-white/70">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/estimator" className="hover:text-white transition">Estimator</Link></li>
            <li><Link to="/ingredients" className="hover:text-white transition">Ingredients</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 2: Newsletter */}
        <div className="space-y-5">
          <h4 className="font-semibold text-lg text-white tracking-tight">Join the Ritual</h4>
          <p className="text-white/70 leading-relaxed">
            Receive exclusive drops, ritual insights, and research-backed guidance. No spam — just clarity.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold text-sm px-5 py-2 rounded-lg hover:bg-white/90 transition"
            >
              Sign Up
            </button>
          </form>
          {popup && (
            <div className="bg-white/10 text-white/80 border border-white/20 px-4 py-2 rounded-md">
              {popup}
            </div>
          )}
        </div>

        {/* Column 3: Trust & Connect */}
        <div className="space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white tracking-tight">Trust & Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><a href="mailto:hercutofficial@gmail.com" className="hover:text-white transition">hercutofficial@gmail.com</a></li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-white/50 mt-12">
        © {new Date().getFullYear()} Her Cut — Designed for the woman who wants control. All rights reserved.
      </div>
    </footer>
  );
}
