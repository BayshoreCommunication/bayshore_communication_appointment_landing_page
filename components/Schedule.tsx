"use client";
import React from "react";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

const Schedule = () => {
  const steps = [
    {
      icon: "/images/schedule/image1.svg",
      description: (
        <p>
          We’ll walk you through the exact <br /> system we use to{" "}
          <span className="font-bold">generate consistent legal leads,</span> so
          you can apply it yourself—whether you work with us or not.
        </p>
      ),
    },
    {
      icon: "/images/schedule/image2.svg",
      description: (
        <p>
          You’ll see real numbers, case studies, and{" "}
          <span className="font-bold">data-driven results</span>—with flowcharts
          & success metrics that show how our strategy works.
        </p>
      ),
    },
    {
      icon: "/images/schedule/image3.svg",
      description: (
        <p>
          <span className="font-bold">Step-by-step growth process</span> refined
          to ensure sustainable success for law firms like yours.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen px-8">
      <div className="w-full mx-auto">
        {/* Heading */}
        <motion.div
          className="max-w-[1440px] mx-auto mt-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-2xl sm:text-[48px] font-bold leading-normal">
            <span className="bg-black text-white px-2">Schedule</span> Your
            Discovery Call
          </h1>
          <p className="text-base sm:text-[28px] text-gray-400 text-center mt-4">
            Your responses are strictly confidential and will be used to tailor
            a customized strategy for you before our call.
          </p>
        </motion.div>

        {/* Calendly Widget */}
        <motion.div
          className="mt-10 mb-[-50px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:hidden">
            <InlineWidget
              url="https://calendly.com/bayshorepartners/45min"
              styles={{ height: "800px" }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "#0b7788",
                textColor: "4d5055",
              }}
            />
          </div>
          <div className="hidden md:block">
            <InlineWidget
              url="https://calendly.com/bayshorepartners/45min"
              styles={{ height: "930px" }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "#0b7788",
                textColor: "4d5055",
              }}
            />
          </div>
        </motion.div>

        {/* Learn Section */}
        <motion.div
          className="max-w-[1440px] mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[48px] font-bold mb-4 ">
            What You’ll Learn on Your Discovery Call:
          </h1>
          <p className="text-[24px] text-gray-500 mb-4">
            Not a sales pitch. No fluff, no gimmicks—
          </p>
          <p className="text-gray-500 mb-10">
            just real, proven strategies that helped{" "}
            <span className="font-bold text-gray-800">100+ law firms</span>{" "}
            across the U.S. attract high-value clients through{" "}
            <span className="font-bold text-gray-800">
              organic marketing & SEO
            </span>
            .
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="w-full max-w-[1440px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex-1 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Icon with hover effect */}
                <motion.div
                  className="w-20 h-20 mb-6"
                  whileHover={{ scale: 1.4 }}
                  transition={{ duration: 0.3 }}

                >
                  <Image
                    src={step.icon}
                    alt={`Step ${idx + 1}`}
                    width={48}
                    height={48}
                    className="mx-auto"
                  />
                </motion.div>

                <p className="text-gray-600 text-[18px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
