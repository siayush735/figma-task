import { motion } from "framer-motion";
import maggie from "../assets/maggie.png";

export default function Maggie() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-32 gap-10 text-center relative overflow-hidden">
    
      <div className="absolute w-[800px] h-[800px] border border-white/10 rounded-full" />

     
      <div className="flex flex-col gap-10 flex-wrap justify-center text-gray-400 hover:text-white">
        <div className="flex gap-28" >
          {" "}
          <p className="font-semibold  justify-center w-80 text-4xl mt-36"> Late Night Maggie Boost For Party
          </p>
          <motion.img
            src={maggie}
            className="w-100 rounded-2xl shadow-xl"
            whileHover={{ rotate: 0, scale: 1.1, opacity: 1 }}
            initial={{ rotate: 11, opacity: 0.4 }}
          />
        </div>
<div className="flex gap-28  ml-44 mt-10">
          {" "}
          <p className="font-semibold justify-center w-80 text-4xl mt-36"> Late Night Maggie Boost For Party
          </p>
          <motion.img
            src={maggie}
            className="w-100 rounded-2xl shadow-xl"
            whileHover={{ rotate: 0, scale: 1.1, opacity: 1 }}
            initial={{ rotate: 11, opacity: 0.4 }}
          />
        </div>
       <div className="flex mt-10 gap-28">
          {" "}
          <p className="font-semibold justify-center w-80 text-4xl mt-36"> Late Night Maggie Boost For Party
          </p>
          <motion.img
            src={maggie}
            className="w-100 rounded-2xl shadow-xl"
            whileHover={{ rotate: 0, scale: 1.1, opacity: 1 }}
            initial={{ rotate: 11, opacity: 0.4 }}
          />
        </div>
        <div className="flex ml-44 mt-10 gap-28">
          {" "}
          <p className="font-semibold justify-center w-80  text-4xl mt-36"> Late Night Maggie Boost For Party
          </p>
          <motion.img
            src={maggie}
            className="w-100 rounded-2xl shadow-xl"
            whileHover={{ rotate: 0, scale: 1.1, opacity: 1 }}
            initial={{ rotate: 11, opacity: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
}
