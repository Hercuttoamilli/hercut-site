import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [showNavLinks, setShowNavLinks] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavLinks(false); // scroll down
      } else {
        setShowNavLinks(true); // scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 text-white px-6 py-4 flex justify-between items-center transition-all duration-300">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-tight">Her Cut</h1>

      {/* Nav Links */}
      <nav
        className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 transition-all duration-300 ${
          showNavLinks
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {[
          { name: "Home", to: "/" },
          { name: "Estimator", to: "/estimator" },
          { name: "Reviews", to: "/write-review" },
          { name: "Ingredients", to: "/ingredients" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-200 shadow-md"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Cart */}
      <Link to="/cart" className="relative">
        <ShoppingCart size={22} className="hover:text-white/80 transition" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
}
