import React from "react";
import { Link } from "react-router-dom";

export default function BlogTile({ title, image, link }) {
  return (
    <Link
      to={link}
      className="relative min-w-[280px] sm:min-w-[320px] h-[200px] sm:h-[220px] rounded-xl overflow-hidden group"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
      <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg sm:text-xl font-semibold leading-snug drop-shadow-md">
        {title}
      </h3>
    </Link>
  );
}
