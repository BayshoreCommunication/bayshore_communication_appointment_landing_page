"use client";

import { motion } from "framer-motion";

import Blueprint from "@/components/Blueprint";
import HeroSection from "@/components/HeroSection";
import Marketing from "@/components/Services";
import ResultsSection from "@/components/ResultsSection";
import Schedule from "@/components/Schedule";
import WhyUsSection from "@/components/WhyUsSection";

// Motion variants for scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <HeroSection />
      </motion.div>

      {/* Schedule Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Schedule />
      </motion.div>

      {/* Marketing/Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Marketing />
      </motion.div>

      {/* Results Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <ResultsSection />
      </motion.div>

      {/* Why Us Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <WhyUsSection />
      </motion.div>

      {/* Blueprint Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Blueprint />
      </motion.div>
    </div>
  );
}
