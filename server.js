import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import admin from "firebase-admin";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Firebase setup
admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
  }),
});
const db = admin.firestore();

// ✅ Stripe webhook (must go BEFORE express.json())
app.post("/webhook", bodyParser.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    try {
      await db.collection("orders").add({
        sessionId: session.id,
        email: session.customer_details?.email || "",
        amount_total: session.amount_total,
        shipping: session.customer_details?.address || null,
        createdAt: new Date(),
      });
      console.log("✅ Order saved to Firebase");
    } catch (err) {
      console.error("🔥 Firebase write failed:", err.message);
    }
  }

  res.json({ received: true });
});

// ✅ Middleware (MUST come after webhook)
app.use(cors());
app.use(express.json());

// ✅ Checkout route
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { plan } = req.body;
    console.log("🔥 Checkout route hit with plan:", plan);

    const priceMap = {
      "1month": "price_1RnWgKEe6rE629wT5Tk6FGeW",
      "3month": "price_1RnWi4Ee6rE629wToD1Aqf3L",
    };

    const selectedPriceId = priceMap[plan];
    if (!selectedPriceId) {
      return res.status(400).json({ error: "Invalid plan selected" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: selectedPriceId,
          quantity: 1,
        },
      ],
      success_url: "https://hercut.net/success",
      cancel_url: "https://hercut.net/cancel",
      customer_creation: "always",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("❌ Error creating checkout session:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Render healthcheck route
app.get("/", (req, res) => {
  res.send("✅ Her Cut backend is live");
});

// ✅ Server listen
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
