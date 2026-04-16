import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [target, setTarget] = useState(false);

  const tags = [
    { text: "Focused", left: "left-[260px]", rotate: "-rotate-[15deg]" },
    { text: "Collaborative", left: "left-[370px]", rotate: "rotate-[15deg]" },
    { text: "United", left: "left-[470px]", rotate: "-rotate-[15deg]" },
    { text: "Vibrant", left: "left-[560px]", rotate: "rotate-[15deg]" },
    { text: "Dynamic", left: "left-[630px]", rotate: "-rotate-[15deg]" },
    { text: "Motivated", left: "left-[720px]", rotate: "rotate-[15deg]" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050816] text-white">

      {/* Background blobs */}
      <div className="absolute w-[600px] h-[600px] bg-pink-500/30 blur-[200px] rounded-full left-[-100px] top-[-100px]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-[200px] rounded-full right-[-100px] bottom-[-100px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        onClick={() => setTarget(!target)}   // ✅ FIXED
        className="relative w-[90%] max-w-[1200px] min-h-[400px] px-16 py-20 rounded-[200px] border border-white/20 bg-white/5 backdrop-blur-3xl flex flex-col items-center justify-center text-center"
      >

        {/* Top text */}
        <p className="absolute top-10 left-20 text-pink-400 rotate-[-10deg] text-xl">
          we are the team of →
        </p>

        {/* Tags */}
        <span className="absolute top-20 left-40 bg-gray-600 px-7 py-3 rounded-full rotate-[-15deg] text-3xl z-20">
          Fun
        </span>

        <span className="absolute top-16 right-32 bg-gray-600 px-5 py-2 rounded-full rotate-[10deg] text-2xl">
          Inclusive
        </span>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl z-10 font-semibold tracking-wide">
          20+ Talented Folks
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          From passion-driven dedication to impactful contribution,
          we do it all here. We are growing and will be excited to hear from you!
        </p>

        {/* Button */}
        <button className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-lg font-medium hover:scale-105 transition">
          Join our team →
        </button>

        {/* Floating Tags */}
        {tags.map((tag, i) => (
          <p
            key={i}
            className={`absolute bg-gray-500 px-7 py-3 rounded-2xl transition-all duration-500
            ${tag.left} ${tag.rotate}
            ${target ? "top-[310px] opacity-100" : "top-[370px] opacity-20"}`}
          >
            {tag.text}
          </p>
        ))}

      </motion.div>
    </section>
  );
}
