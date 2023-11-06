"use client";
import { motion } from "framer-motion";
import Carousel from "./index";
import { Fondamento } from "next/font/google";

const logoFont = Fondamento({ subsets: ["latin"], weight: "400" });

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="hero lg:h-[680px] overflow-hidden relative">
      <Carousel />
      <motion.div
        initial={{ translateX: "-300%" }}
        animate={{ translateX: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="md:w-2/5 absolute top-20 lg:top-40 lg:left-12 ">
        <div className="container">
          <h1
            className={`${logoFont.className} text-[#000] text-2xl md:text-4xl bg-primary inline-block p-3 mb-3`}>
            Grand Mill Group
          </h1>
          <p className="hero-desc text-[white] text-xl md:text-3xl font-medium">
            {/* Birinchi navli bug'doy uni */}
            Kompaniyasi O'zbekiston bozorida eng yirik un ishlab
            chiqaruvchilardan biri hisoblanadi.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
// Обработка металлов и нанесение покрытий на металлы
