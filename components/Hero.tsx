import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const floatOnce = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }, // faster
    },
  };

  return (
    <div className=" min-h-screen  bg-white overflow-hidden font-sans relative px-4 mt-6 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Floating Images */}
        <motion.div
          className="hidden md:block absolute top-28 left-[30%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/home/memoji3.png"
            alt="Floating Icon"
            width={90}
            height={90}
          />
        </motion.div>
        <motion.div
          className="hidden md:block absolute top-32 right-[30%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/images/home/memoji.png"
            alt="Floating Icon"
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          className="hidden md:block absolute top-32 right-[20%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/images/home/memoji4.png"
            alt="Floating Icon"
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          className="hidden md:block absolute top-32 right-[10%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <Image
            src="/images/home/memoji2.png"
            alt="Floating Icon"
            width={60}
            height={60}
          />
        </motion.div>
        <motion.div
          className="hidden md:block absolute top-56 left-[55%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        >
          <Image
            src="/images/home/icon.png"
            alt="Floating Icon"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          className="hidden xl:block lg:right-[43%] lg:w-[100px] absolute top-[60%] right-[50%]"
          variants={floatOnce}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <Image
            src="/images/home/send.png"
            alt="Floating Icon"
            width={170}
            height={280}
          />
        </motion.div>

        {/* Header */}
        <div className="flex flex-row justify-between items-center py-4 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <Image
              src="/images/home/bayshore-logo.svg"
              alt="BayShore Logo"
              width={250}
              height={66}
              className="w-[120px] sm:w-[200px] md:w-[250px]"
            />
          </div>
          <a href="#schedule">
            <button className="bg-orange-500 w-[150px] sm:w-[150px] hover:bg-orange-600 text-white px-4 py-2 sm:px-6 rounded-full shadow-md text-sm sm:text-base">
              Schedule Call
            </button>
          </a>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-8 lg:gap-12 mt-8 sm:mt-10">
          {/* Left Section */}
          <motion.div
            className="flex-1 lg:flex-[1.2] flex flex-col justify-center text-center lg:text-left h-full"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-2xl lg:text-[36px] xl:text-[48px] font-semibold leading-snug">
              Bayshore Communication helps attorneys{" "}
              <span className="bg-orange-600 text-white px-2">
                attract quality
              </span>{" "}
              cases with SEO, PPC, and social media tailored to the legal
              industry.
            </h1>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              You’re One Step Away From Discovering How You Can Consistently
              Attract High-Value Clients Through Organic Marketing & SEO—Without
              Relying on Ads.{" "}
              <span className="text-orange-500 font-semibold">GUARANTEED.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <a href="#schedule">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md w-full sm:w-[200px] text-sm sm:text-base">
                  Schedule Call 
                </button>
              </a>
              <p className="text-gray-700 text-sm sm:text-base max-w-sm">
                You don’t pay for effort—you pay for{" "}
                <span className="font-semibold">real, measurable growth.</span>
              </p>
            </div>

            {/* Google Reviews */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-8 sm:mt-12 justify-center lg:justify-start">
              <div className="flex flex-col items-center sm:items-start">
                <Image
                  src="/images/home/Google.png"
                  alt="Google"
                  width={100}
                  height={70}
                />
                <div className="flex text-yellow-400 mt-1">
                  <span className="animate-star">★</span>
                  <span className="animate-star">★</span>
                  <span className="animate-star">★</span>
                  <span className="animate-star">★</span>
                  <span className="animate-star">★</span>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold text-sm sm:text-base">
                  4.9 (484 Reviews)
                </p>
                <a
                  href="#"
                  className="text-orange-500 underline text-xs sm:text-sm hover:text-orange-600"
                >
                  View all Google Reviews here
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end w-full"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src="/images/home/content.png"
              alt="Content Illustration"
              width={480}
              height={400}
              className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] lg:h-[400px] xl:h-[600px]"
              // style={{
              //   width: "480px",
              //   height: "400px",
              // }}
            />
          </motion.div>
        </div>

        {/* Star Animation */}
        <style jsx>{`
          @keyframes star-shine {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.3);
              opacity: 0.7;
            }
          }
          .animate-star {
            animation: star-shine 1s ease-in-out infinite;
            display: inline-block;
            margin-right: 2px;
          }
        `}</style>
      </div>
    </div>
  );
}
