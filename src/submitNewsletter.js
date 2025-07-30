import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebaseConfig"; // or "./firebaseConfig" — whatever your config file is

export async function submitNewsletterEmail(email) {
  try {
    await addDoc(collection(db, "newsletter"), {
      email,
      timestamp: Timestamp.now(), // ✅ this adds the timestamp field
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting email:", error);
    return { success: false };
  }
}
