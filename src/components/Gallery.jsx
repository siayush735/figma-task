import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [selected, setSelected] = useState(null);

  const photos = [img1];
  const videos = [img2, img2, img2];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">

     
      <div className="absolute w-[1200px] h-[600px] border border-white/10 rounded-[50%] top-20" />

      
      <div className="flex gap-2 bg-white/10 p-2 rounded-full backdrop-blur-xl mb-12 z-10">
        <button
          onClick={() => setActiveTab("photos")}
          className={`px-6 py-2 rounded-full transition ${
            activeTab === "photos"
              ? "bg-white text-black"
              : "text-gray-400"
          }`}
        >
          Photos
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`px-6 py-2 rounded-full transition ${
            activeTab === "videos"
              ? "bg-white text-black"
              : "text-gray-400"
          }`}
        >
          Videos
        </button>
      </div>

  
      <div className="relative w-full max-w-5xl">

      
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />

        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className={`grid ${
              activeTab === "photos"
                ? "grid-cols-1"
                : "grid-cols-2 md:grid-cols-3"
            } gap-6`}
          >
            {(activeTab === "photos" ? photos : videos).map((img, i) => (
              <motion.div
                key={i}
                onClick={() => setSelected(img)}
                className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer"
              >
                <img
                  src={img}
                  className={`object-cover w-full ${
                    activeTab === "photos"
                      ? "h-[500px]"
                      : "h-[300px]"
                  }`}
                  alt=""
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

  
      <div className="mt-10 flex gap-2">
        <div className="w-15 h-1 bg-white/40 rounded-full" />
        <div className="w-8 h-1 bg-white/20 rounded-full" />
        <div className="w-8 h-1 bg-white/20 rounded-full" />
      </div>

    
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              className="w-[80%] max-w-3xl rounded-2xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}