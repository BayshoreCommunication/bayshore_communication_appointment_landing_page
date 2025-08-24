"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Trip Law",
    desc: "Since 2016, working with Trip Law, we've grown the practice from $60,000 to $2.3 million without spending a dime on ads. We consistently generate 20+ new client appointments per month, each with a $5,000 case value.",
    img: "/images/resultsSection/Image1.png",
  },
  {
    title: "Apex Advisor",
    desc: "Apex had a strong brand presence, but poor SEO analysis from another agency left them invisible on Google. Our video production team built a powerful social media presence, driving trust through informative video marketing.",
    img: "/images/resultsSection/Image2.png",
  },
  {
    title: "Catflix",
    desc: "Despite having a brilliant idea, the Catflix team needed SEO to get found online. Our content team created a high-performance SEO strategy that steadily grew traffic and visibility over time.",
    img: "/images/resultsSection/Image1.png",
  },
];

// Variants for card animations
const cardVariants = {
  hidden: { opacity: 0, y: 100, rotate: 5 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  }),
};

export default function ResultsSection() {
  return (
    <section className="bg-white mt-[-40px] px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="max-w-[1440px] mx-auto text-center md:text-left"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-[48px] font-bold leading-normal">
          <span className="bg-black text-white px-2">RECENT RESULTS</span> WE'VE
          GOTTEN FOR AGENCY OWNERS, COACHES & CONSULTANTS JUST LIKE YOU:
        </h2> 
        <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg md:text-xl lg:text-[28px]">
          How we took our clients’ businesses to the next level!
        </p>
      </motion.div>

      {/* Results Cards */}
      <section className="max-w-[1440px] mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Show 2 slides at a time
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 }, 
          }}
          className="custom-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
              >
                {/* Parallax Image */}
                <div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden group">
                  <motion.div
                    className="w-full h-full"
                    initial={{ scale: 1.2, y: 30 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    // whileHover={{ scale: 1.1, y: -10 }}
                  >
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <motion.h3
                    className="font-bold text-lg sm:text-xl"
                    whileHover={{ color: "#f97316" }}
                  >
                    {slide.title}
                  </motion.h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styling */}
        <style jsx global>{`
          .custom-swiper .swiper-pagination {
            position: relative;
            margin-top: 2rem;
            text-align: center;
          }
          .custom-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #d1d5db;
            opacity: 1;
            margin: 0 6px !important;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .custom-swiper .swiper-pagination-bullet-active {
            background-color: #f97316;
            transform: scale(1.3);
          }

          /* Navigation arrows without background */
          .custom-swiper .swiper-button-next,
          .custom-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
            background: transparent; /* remove background */
            color: #6b7280;
            border: none; /* remove border */
            box-shadow: none; /* remove shadow */
            transition: all 0.3s ease;
          }
          .custom-swiper .swiper-button-next:hover,
          .custom-swiper .swiper-button-prev:hover {
            color: #f97316;
            transform: scale(1.1);
          }
        `}</style>
      </section>
    </section>
  );
}
