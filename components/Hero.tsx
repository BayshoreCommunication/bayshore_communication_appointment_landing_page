import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] min-h-screen mx-auto bg-white overflow-hidden font-sans relative px-4 mt-6">
      {/* Floating Images  */}
      <Image
        src="/images/home/memoji.png"
        alt="Memoji"
        width={60}
        height={60}
        className="hidden md:block absolute top-32 right-[40%] animate-float"
      />
      <Image
        src="/images/home/icon.png"
        alt="Floating Icon"
        width={60}
        height={60}
        className="hidden md:block absolute top-56 left-[45%] animate-float-delayed"
      />
      <Image
        src="/images/home/send.png"
        alt="Memoji"
        width={110}
        height={230}
        className="hidden md:block absolute top-[70%] right-[50%] animate-float"
      />
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/home/bayshore-logo.svg"
            alt="BayShore Logo"
            width={250}
            height={66}
            className="w-[150px] sm:w-[200px] lg:w-[250px]"
          />
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-6 rounded-full shadow-md text-sm sm:text-base">
          Schedule Call
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 mt-10">
        {/* Left Section  */}
        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Fill Your Pipeline with{" "}
            <span className="text-orange-500">100+ Qualified</span> Appointments
            Every Month Guaranteed.
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            You’re One Step Away From Discovering How You Can Consistently
            Attract High-Value Clients Through Organic Marketing & SEO—Without
            Relying on Ads.{" "}
            <span className="text-orange-500 font-semibold">GUARANTEED.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md w-full sm:w-[200px]">
              Schedule Call
            </button>
            <p className="text-gray-700 text-sm sm:text-base max-w-sm">
              You don’t pay for effort—you pay for{" "}
              <span className="font-semibold">real, measurable growth.</span>
            </p>
          </div>

          {/* Google Reviews */}
          <div className="flex items-center gap-4 mt-[65px] justify-center lg:justify-start">
            <div className="flex flex-col">
              <Image
                src="/images/home/Google.png"
                alt="Google"
                width={60}
                height={60}
                className="w-[50px] sm:w-[60px]"
              />
              <div className="flex text-yellow-400">
                <span className="animate-star">★</span>
                <span className="animate-star">★</span>
                <span className="animate-star">★</span>
                <span className="animate-star">★</span>
                <span className="animate-star text-gray-300">★</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col  gap-3 text-left">
                <p className="font-semibold text-sm sm:text-base">
                  4.9 (484 Reviews)
                </p>
                {/* <p className="text-gray-600 text-sm"></p> */}
              </div>
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
          className="flex justify-center lg:justify-end w-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/home/content.png"
            alt="Content Illustration"
            width={600}
            height={580}
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
          />
        </motion.div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
        }
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
          animation: star-shine 2s ease-in-out infinite;
          display: inline-block;
          margin-right: 2px;
        }
      `}</style>
    </div>
  );
}
