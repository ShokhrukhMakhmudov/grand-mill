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
          <div className="bg-[#ecb657] p-10 flex flex-col gap-10 w-full lg:w-1/2 ">
            <div className="text-black text-2xl font-medium border-b-2">
              <p>Email:</p>
              <p className="text-white">example@gmail.com</p>
            </div>
            <div className="text-black text-2xl font-medium  border-b-2">
              <p>Telefon raqam:</p>
              <Link
                href="tel:+998909999999"
                className="text-white hover:text-[#8b6726]">
                +998 90 999 99 99
              </Link>
            </div>
            <div className="text-black text-2xl font-medium border-b-2">
              <p>Manzil:</p>
              <p className="text-white">Farg'ona shaxar, lorem ipsum 7</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1315.3031017652781!2d71.77777804390132!3d40.38053379457185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8538bfb23ed1%3A0xb7f3007af994487e!2s%22Ohu%22%20National%20Meals%20Restaurant!5e0!3m2!1sru!2s!4v1699282758701!5m2!1sru!2s"
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
