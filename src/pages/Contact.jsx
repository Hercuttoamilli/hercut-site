import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setStatus("Message sent. We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus("Something went wrong. Please try again later.");
    }

    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="bg-black text-white px-6 py-24 min-h-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-white/70 mb-10">
          Have a question or need support? Send us a message and we’ll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-white/50 focus:border-white transition"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-white/50 focus:border-white transition"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-white/50 focus:border-white transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <div className="mt-6 text-sm text-white/80 bg-white/10 border border-white/20 p-4 rounded-lg">
            {status}
          </div>
        )}
      </div>
    </section>
  );
}
