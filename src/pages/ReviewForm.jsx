// src/pages/ReviewForm.jsx
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [fullReview, setFullReview] = useState("");
  const [rating, setRating] = useState("");
  const [beforeAfter, setBeforeAfter] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !quote || !fullReview) return;

    await addDoc(collection(db, "userReviews"), {
      name,
      quote,
      fullReview,
      rating: rating || null,
      beforeAfter,
      createdAt: serverTimestamp(),
    });

    setSubmitted(true);
    setName("");
    setQuote("");
    setFullReview("");
    setRating("");
    setBeforeAfter(false);

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-black text-white px-6 py-24 min-h-screen">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Share Your Experience</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-white/80">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none"
              placeholder="e.g. Jasmine T."
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80">Short Quote (Headline)</label>
            <input
              type="text"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none"
              placeholder="e.g. Finally feel like myself again!"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80">Full Review</label>
            <textarea
              rows={6}
              value={fullReview}
              onChange={(e) => setFullReview(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none"
              placeholder="Share your journey, your results, and how you felt..."
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-white/80">Star Rating (Optional)</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20"
            >
              <option value="">Select a rating</option>
              <option value="5">★★★★★ (5/5)</option>
              <option value="4">★★★★☆ (4/5)</option>
              <option value="3">★★★☆☆ (3/5)</option>
              <option value="2">★★☆☆☆ (2/5)</option>
              <option value="1">★☆☆☆☆ (1/5)</option>
            </select>
          </div>

          
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 transition"
          >
            Submit Review
          </button>

          {submitted && (
            <p className="text-pink-400 text-center font-medium mt-4">Thank you! Your review has been submitted.</p>
          )}
        </form>
      </div>
    </section>
  );
}
