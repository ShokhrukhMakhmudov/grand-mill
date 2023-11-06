"use client";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { IMAGES } from "./Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: IMAGES.length,
    autoplay: true,
    speed: 30000,
    autoplaySpeed: 100,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <motion.section
      id="products"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-12">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          Bizning mahsulotlar
        </h2>

        <Slider {...settings}>
          {IMAGES.map((_, ind) => {
            return (
              <img
                className="hover:scale-125 transition-all"
                src={IMAGES[ind].src}
                width={350}
              />
            );
          })}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Products;
