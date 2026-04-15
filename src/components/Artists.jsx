import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import singer from "../assets/arjit.png";
import dancer from "../assets/nora1.png";
import comedian from "../assets/comedian.png"
import frame1 from "../assets/Frame1.png"
import vector from "../assets/Vector.png"
const data = [
  {
    id: 1,
    title: "Singers",
    image: singer,
  },
  {
    id: 2,
    title: "Dancers",
    image: dancer,
  },
  {
    id: 3,
    title: "Comedian",
    image: comedian,
  }
];

export default function Artists() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const current = data[index];

  return (
    <section className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-10">

      <div className="flex items-center ">

        <motion.h1
          key={current.title}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="text-8xl z-20"
        >
          {current.title}
        </motion.h1>

     
        <div className="flex flex-col text-center relative cursor-pointer mr-40" onClick={handleClick}>

      
          <div className="absolute w-[690px] h-[690px] rounded-full bg-gradient-to-tr from-pink-500 via-orange-400 to-purple-500 p-[6px]">
            <div className="w-full h-full rounded-full bg-[#050816]" />
            <img className="absolute bottom-[-50px] right-[-30px] w-[220px] rotate-[10deg]" src={vector}/>
          </div>

         
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              className="w-[680px] h-[680px] rounded-full object-cover z-10 relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <p className="font-extralight text-2xl mt-12 text-gray-500">click here to view more</p>
        </div>
  
        <div className="max-w-md">

          <AnimatePresence mode="wait">
            <motion.h2
             
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="text-6xl"
            >
              <span className="text-gray-500">Choose from</span> 100+ categories
            </motion.h2>
          </AnimatePresence>

          <img src={frame1}/>
         <p></p>
        </div>

      </div>
    </section>
  );
}