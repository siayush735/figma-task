import { motion } from "framer-motion";
import { MdDateRange } from "react-icons/md";
import nora from "../assets/nora.png"
import arr1 from "../assets/arr1.png" 
import arr2 from "../assets/arr2.png" 

export default function Shows() {
  return (
    <section className="py-40 min-h-screen md:flex-row items-center justify-between gap-10 px-6 md:px-20 relative overflow-hidden">

    
      <div className="absolute -rotate-45 top-8 left-[-10px] bg-gradient-to-r from-gray-400 to-gray-600 text-white  opacity-30">
        HEADLIGHTS OF TODAY ★ HEADLIGHTS OF TODAY
      </div>
      <div className="flex flex-col justify-center items-center">
      <h2 className="text-6xl justify-center text-center mb-16 w-220">
        Recent shows made star-studded via StarClinch
      </h2>

      <div className="flex items-center justify-center mt-10 gap-10">

        <img src={arr2} alt="" />

       <div className="relative w-[550px] h-[650px] rounded-t-full overflow-hidden">

  <motion.img
    src={nora}
    className="w-full h-full object-cover"
    whileHover={{ scale: 1.05 }}
  />


  <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black/70 to-transparent" />

</div>
        <div className="max-w-sm flex flex-col text-left w-68  ">
          <h3 className="text-5xl justify-center text-white">Nora Fatehi <span className="text-gray-500">for an event hosted by xyz performed</span> at pune </h3>
          <p className="text-gray-400 flex items-center gap-2 text-xl font-semibold mt-5"><span><MdDateRange /></span>14 March 2023</p>
        </div>
         
        <img src={arr1}  alt="" />
</div>
      </div>
    </section>
  );
}