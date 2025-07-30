import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// These 2 are important for routing and cart logic
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";

// Optional: For nice popup animations (like “Added to Cart ✅”)
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
