import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { db } from "../firebaseConfig"; // make sure this points to your Firebase config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Estimator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("female");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [goal, setGoal] = useState("moderate");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleEstimate = () => {
    if (!weight || !height || !age || isNaN(weight) || isNaN(height) || isNaN(age)) {
      setResult("Please enter valid numbers for all fields.");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    const bmr =
      sex === "female"
        ? 655 + 9.6 * w + 1.8 * h - 4.7 * a
        : 66 + 13.7 * w + 5 * h - 6.8 * a;

    const activityMultiplier =
      activityLevel === "low"
        ? 1.2
        : activityLevel === "moderate"
          ? 1.4
          : 1.6;

    const goalMultiplier =
      goal === "mild" ? 0.9 : goal === "moderate" ? 0.8 : 0.7;

    const caloriesBurnedPerDay = bmr * activityMultiplier;
    const deficitCalories = caloriesBurnedPerDay - caloriesBurnedPerDay * goalMultiplier;
    const estimatedFatLoss = (deficitCalories * 90) / 3500;

    setResult(
      `Estimated fat loss over 1–3 months: ~${estimatedFatLoss.toFixed(1)} lbs with consistent Her Cut use and ${activityLevel} activity.`
    );
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    try {
      await addDoc(collection(db, "workout_signups"), {
        email,
        timestamp: serverTimestamp(),
      });
      setSignupSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Error saving workout signup:", error);
    }
  };

  return (
    <>
      {/* Floating Return Home Button */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white/60 hover:text-white bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-sm transition-all hover:bg-white/10"
      >
        <Home size={16} />
        <span className="text-sm font-medium">Home</span>
      </Link>

      <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col justify-center items-center">
        <div className="max-w-lg w-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl">
          <h1 className="text-3xl font-semibold text-center mb-4">Estimate Your Results</h1>
          <p className="text-sm text-white/70 text-center mb-6">
            Fill in the details below to estimate how much weight you can expect to lose
            using Her Cut alongside your current routine.
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Weight (lbs)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 focus:outline-none focus:border-white"
                placeholder="e.g. 150"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 focus:outline-none focus:border-white"
                placeholder="e.g. 165"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 focus:outline-none focus:border-white"
                placeholder="e.g. 25"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Sex</label>
              <select
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 focus:outline-none focus:border-white"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Activity Level</label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 focus:outline-none focus:border-white"
              >
                <option value="low">Low (mostly sedentary)</option>
                <option value="moderate">Moderate (light exercise 2–3x/week)</option>
                <option value="high">High (intense workouts 4–6x/week)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Fat Loss Intensity</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/10 focus:outline-none focus:border-white"
              >
                <option value="mild">Mild (slow & steady)</option>
                <option value="moderate">Moderate (safe average)</option>
                <option value="aggressive">Aggressive (short-term cut)</option>
              </select>
            </div>

            <button
              onClick={handleEstimate}
              className="w-full bg-white text-black font-semibold py-3 rounded-full hover:bg-white/90 transition-all"
            >
              Get My Estimate
            </button>

            {result && (
              <>
                <div className="mt-6 p-4 bg-white/10 border border-white/10 rounded-xl text-center text-lg text-white animate-fadeIn">
                  {result}
                </div>

                {/* Collapsible Workout Section */}
                <div className="mt-6 w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden transition-all">
                  <details open className="group">
                    <summary className="cursor-pointer select-none px-6 py-4 text-white font-semibold text-center bg-white/10 hover:bg-white/15 transition-all">
                      Workout Recommendations
                    </summary>
                    <div className="px-6 py-4 text-white text-sm space-y-3">
                      <ul className="list-disc list-inside text-white/90 space-y-1">
                        {activityLevel === "low" && (
                          <>
                            <li>Start with 20-minute walks, 4–5x/week</li>
                            <li>Do bodyweight circuits: squats, pushups, lunges</li>
                            <li>Try gentle cardio like cycling or swimming 2x/week</li>
                          </>
                        )}
                        {activityLevel === "moderate" && (
                          <>
                            <li>Mix strength training (3x/week) with cardio (3x/week)</li>
                            <li>Use full-body compound lifts: squats, rows, presses</li>
                            <li>Add an active recovery day: yoga or walking</li>
                          </>
                        )}
                        {activityLevel === "high" && (
                          <>
                            <li>Use a structured split: Push/Pull/Legs or Upper/Lower</li>
                            <li>Include HIIT 2–3x/week to boost metabolism</li>
                            <li>Track your lifts and prioritize sleep & recovery</li>
                          </>
                        )}
                      </ul>
                      <p className="text-xs text-white/50 italic text-center">
                        These plans complement Her Cut’s metabolic support ingredients.
                      </p>
                    </div>
                  </details>
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 w-full bg-white/5 border border-white/10 rounded-xl px-6 py-6 backdrop-blur-xl text-white text-sm text-center">
                  <p className="mb-4 text-white/80">
                    Want a full personalized plan? Join the insider list and get detailed weekly workouts tailored to your journey.
                  </p>
                  <form
                    onSubmit={handleSignup}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full sm:w-72 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-white transition"
                    />
                    <button
                      type="submit"
                      className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-white/90 transition"
                    >
                      Join Now
                    </button>
                  </form>
                  {signupSuccess && (
                    <p className="text-green-400 mt-2 text-xs">You’re in. Welcome.</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
