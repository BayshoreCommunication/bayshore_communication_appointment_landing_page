"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 2.2, ease: "easeInOut", delay: 1.3 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.4 },
  },
};

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="bg-black text-white min-h-screen bg-[url('/images/home/digital.png')] bg-cover bg-center relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Floating background glow */}
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />

        {/* Header with logo and appointment */}
        <div className="flex items-center justify-between max-w-[1440px] mx-auto border-b-2 border-orange-600 mb-4">
          <motion.div
            className="flex items-center justify-center pt-6 sm:pt-10 relative z-10"
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <Image
              src="/images/home/logo.png"
              alt="BayShore Logo"
              width={280}
              height={70}
              className="mb-4 sm:mb-6 w-[200px] sm:w-[280px] md:w-[300px] h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1>Appointment goes here</h1>
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative max-w-[1440px] mx-auto px-6 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10 z-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Content */}
          <motion.div className="max-w-xl text-center lg:text-left" variants={fadeInUp}>
            <h1 className="text-2xl sm:text-[48px] font-bold leading-snug">
              Learn How You Can Fill Your Pipeline With{" "}
              <span className="text-orange-500 inline-block">
                100+ Qualified Appointments
              </span>{" "}
              Every Single Month. <span>Guaranteed</span>
            </h1>

            <motion.p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0" variants={fadeInUp}>
              You’re One Step Away From Discovering How You Can Consistently
              Attract High-Value Clients Through Organic Marketing & SEO—Without
              Relying on Ads.{" "}
              <span className="text-orange-500 font-medium">GUARANTEED.</span>
            </motion.p>

            {/* Google Reviews */}
            <motion.div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left" variants={fadeInUp}>
              <Image
                src="/images/home/Google.png"
                alt="Google"
                width={80}
                height={30}
                className="mb-3 sm:mb-0"
              />
              <div>
                <div className="flex justify-center sm:justify-start text-yellow-400 space-x-1">
                  {Array(5).fill(0).map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-xs sm:text-sm">5 | 484 Reviews</p>
                <a href="#" className="text-xs sm:text-sm hover:underline">
                  View all Google Reviews here
                </a>
              </div>
            </motion.div>

            <motion.p className="mt-6 text-gray-400 font-medium text-base sm:text-lg md:text-xl border-b-2 inline-block" variants={fadeInUp}>
              You don’t pay for effort—you pay for real, measurable growth.
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center mt-[150px]"
            initial={{ scale: 0.8, opacity: 0, x: 50 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            <Image
              src="/images/home/person.png"
              alt="Hero Person"
              width={500}
              height={400}
              className="rounded-lg mt-6 sm:mt-10 lg:mt-[120px] w-[100%] h-[100%] sm:w-[70%] md:w-[500px] lg:w-[600px] shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Results Section */}
      <div className="bg-[#f5f5f5] text-black py-10">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            className="text-xl sm:text-2xl md:text-[34px] font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
          >
            Our actions produce results for our clients. Don’t just take our
            word for it. Let our clients’ success stories speak for themselves.
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { amount: "$6,000,000", text: "Car Accident Claim: $6,000,000" },
              { amount: "$3,138,444*", text: "Drunk Driver and 2 Bars That Overserved Her: $3,138,444+" },
              { amount: "$2,700,863*", text: "Workers’ Compensation Case: $2,700,863+" },
              { amount: "$2,454,000*", text: "Trucking Accident Case: $2,454,000+" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-lg hover:shadow-lg transition bg-white"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                  {item.amount}
                </p>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
