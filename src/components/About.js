"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FcPlus } from "react-icons/fc";
import BackgroundVideo from "./BackgroundVideo/index";
import { Fondamento } from "next/font/google";

const logoFont = Fondamento({ subsets: ["latin"], weight: "400" });

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.section
      id="about"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-10 md:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto text-center mb-10">
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Biz haqimizda
          </p>
        </div>
        <section className="w-full relative">
          <BackgroundVideo />
          <div className="absolute bg-[#000000a2] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <div className="text-white w-3/5 text-center">
              <h1
                className={`${logoFont.className} text-[#000] text-sm md:text-4xl bg-primary inline-block p-3 mb-3`}>
                Grand Mill Group
              </h1>
              <p className="hero-desc text-[white] text-sm md:text-3xl font-medium">
                {/* Birinchi navli bug'doy uni */}
                Kompaniyasi O'zbekiston bozorida eng yirik un ishlab
                chiqaruvchilardan biri hisoblanadi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default About;
