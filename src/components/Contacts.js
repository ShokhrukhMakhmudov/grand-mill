"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Contacts() {
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
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          Biz bilan bog'lanish
        </h2>
        <div className="flex flex-col gap-10 lg:flex-row justify-between">
          <div className="bg-[#ecb657] p-5 sm:p-10 flex flex-col gap-10 w-full lg:w-1/2 ">
            <div className="text-black text-xl sm:text-2xl font-medium border-b-2">
              <p>Email:</p>
              <p className="text-white">grandmillgroup@gmail.com </p>
            </div>
            <div className="text-black flex flex-col text-xl sm:text-2xl font-medium  border-b-2">
              <p>Telefon raqamlar:</p>
              <Link
                href="tel:+998904088222"
                className="text-white hover:text-[#8b6726]">
                +998 90 408 82 22
              </Link>
              <Link
                href="tel:+998902746000"
                className="text-white hover:text-[#8b6726]">
                +998 90 274 60 00
              </Link>
              <Link
                href="tel:+998939739009"
                className="text-white hover:text-[#8b6726]">
                +998 93 973 90 09
              </Link>
            </div>
            <div className="text-black text-xl sm:text-2xl font-medium border-b-2">
              <p>Manzil:</p>
              <p className="text-white">
                Fargona viloyati, Furqat tumani, Navbaxor shaxarchasi
                temiryolchi ko'chasi 12-uy
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1517.1692350509038!2d70.77325946595336!3d40.48989787341469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba933603f580ed%3A0x6573b8a17c331bbe!2sGrand%20Mill%20Group!5e0!3m2!1sru!2sus!4v1699769705938!5m2!1sru!2sus"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contacts;
