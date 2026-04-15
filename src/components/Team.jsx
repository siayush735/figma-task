import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import team from "../assets/team.png";

const images = [team, team, team, team, team];

export default function Team() {
  const [index, setIndex] = useState(2); // center index

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPosition = (i) => {
    const offset = i - index;

    const positions = {
      "-2": { x: -420, y: 260, scale: 0.6, opacity: 0.2 },
      "-1": { x: -320, y: 120, scale: 0.8, opacity: 0.5 },
      "0": { x: 0, y: 0, scale: 1, opacity: 1 },
      "1": { x: 320, y: 120, scale: 0.8, opacity: 0.5 },
      "2": { x: 420, y: 260, scale: 0.6, opacity: 0.2 },
    }

    return positions[offset] || { opacity: 0 };
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="w-[1200px] h-[600px] rounded-[50%] 
    border border-white/10 
    bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]
  " />
</div>

      <h2 className="text-4xl mb-16 text-white">
        Meet Our Starclinch Squads
      </h2>

    
      <div className="relative w-full h-[400px] flex items-center justify-center">

        
        <button
          onClick={handlePrev}
          className="absolute mr-96 z-20 bg-white/10 p-4 rounded-full"
        >
          <FaArrowLeft />
        </button>

       
        {images.map((img, i) => {
          const pos = getPosition(i);

          return (
            <motion.img
              key={i}
              src={img}
              className="absolute w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-xl"
              animate={pos}
              transition={{ duration: 0.5 }}
            />
          );
        })}

       
        <motion.img
          src={images[index]}
          className="w-64 h-64 object-cover rounded-2xl z-10 shadow-2xl"
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        <button
          onClick={handleNext}
          className="absolute ml-96 z-20 bg-white/10 p-4 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>

    
      <div className="mt-10">
        <p className="bg-gradient-to-b sky-300 to-emerald-900 text-white px-4 py-2 rounded-full inline-block">
          5 Members
        </p>

        <h1 className="text-4xl text-white mt-4">
          Design Dynamos
        </h1>

        <p className="text-gray-400 max-w-lg text-2xl mx-auto mt-4">
          The artists behind the visuals. These design superheroes bring ideas to life.
        </p>

        <p className="mt-6 text-cyan-400">
          Our design team is growing. Apply Now →
        </p>
      </div>

    </section>
  );
}
