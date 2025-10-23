"use client";

import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="text-white py-16 md:py-24 overflow-hidden">
      <style jsx global>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes flipIn {
          from {
            opacity: 0;
            transform: perspective(400px) rotateY(-90deg);
          }
          to {
            opacity: 1;
            transform: perspective(400px) rotateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 5px rgba(32, 141, 199, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(32, 141, 199, 0.6), 0 0 30px rgba(32, 141, 199, 0.4);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out;
        }

        .animate-flipIn {
          animation: flipIn 0.8s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Heading - Slide in from left */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 animate-slideInLeft">
            Your Growth Partner in a <br /> Digital World{" "}
          </h2>

          {/* Description - Fade and scale */}
          <p className="text-gray-300 mb-10 leading-relaxed animate-fadeInScale" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            We combine innovation, dedication, and technology to deliver top-tier
            IT and creative solutions worldwide. From startups to enterprises, our
            commitment to quality and reliability has earned the trust of clients
            across every industry.
          </p>

          {/* Features - Each card flips in with different delays */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            {/* Item 1 - Flip in animation */}
            <div className="animate-flipIn" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <div className="group relative bg-gradient-to-br from-[#208dc7]/10 to-transparent p-4 rounded-lg transition-all duration-300 hover:from-[#208dc7]/20 hover:scale-105 hover:shadow-lg hover:shadow-[#208dc7]/20 cursor-pointer overflow-hidden">
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer"></div>
                
                <div className="flex items-center mb-2 relative z-10">
                  <div className="group-hover:animate-[wiggle_0.5s_ease-in-out] transition-transform">
                    <Image src="/about/11.png" width={50} height={50} alt="" />
                  </div>
                  <h3 className="font-semibold text-lg ml-2 group-hover:text-[#208dc7] transition-colors">
                    First On Field
                  </h3>
                </div>
                <p className="text-gray-400 text-sm relative z-10">
                  We take the lead with innovative strategies and flawless
                  execution, ensuring every project sets new standards in performance
                </p>
              </div>
            </div>

            {/* Item 2 - Bounce in animation */}
            <div className="animate-bounce-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div className="group relative bg-gradient-to-br from-[#208dc7]/10 to-transparent p-4 rounded-lg transition-all duration-300 hover:from-[#208dc7]/20 hover:scale-105 hover:shadow-lg hover:shadow-[#208dc7]/20 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer"></div>
                
                <div className="flex items-center mb-2 relative z-10">
                  <div className="group-hover:animate-[wiggle_0.5s_ease-in-out] transition-transform">
                    <Image src="/about/12.png" width={50} height={50} alt="" />
                  </div>
                  <h3 className="font-semibold text-lg ml-2 group-hover:text-[#208dc7] transition-colors">
                    Easy To Reach
                  </h3>
                </div>
                <p className="text-gray-400 text-sm relative z-10">
                  Our team is always one message away — ready to collaborate,
                  communicate, and deliver support whenever you need
                </p>
              </div>
            </div>

            {/* Item 3 - Flip in animation */}
            <div className="animate-flipIn" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <div className="group relative bg-gradient-to-br from-[#208dc7]/10 to-transparent p-4 rounded-lg transition-all duration-300 hover:from-[#208dc7]/20 hover:scale-105 hover:shadow-lg hover:shadow-[#208dc7]/20 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer"></div>
                
                <div className="flex items-center mb-2 relative z-10">
                  <div className="group-hover:animate-[wiggle_0.5s_ease-in-out] transition-transform">
                    <Image src="/about/13.png" width={50} height={50} alt="" />
                  </div>
                  <h3 className="font-semibold text-lg ml-2 group-hover:text-[#208dc7] transition-colors">
                    Worldwide Services
                  </h3>
                </div>
                <p className="text-gray-400 text-sm relative z-10">
                  From local startups to international brands, we provide
                  global-level IT, design, and marketing solutions with a personal
                  touch.
                </p>
              </div>
            </div>

            {/* Item 4 - Bounce in animation */}
            <div className="animate-bounce-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <div className="group relative bg-gradient-to-br from-[#208dc7]/10 to-transparent p-4 rounded-lg transition-all duration-300 hover:from-[#208dc7]/20 hover:scale-105 hover:shadow-lg hover:shadow-[#208dc7]/20 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 animate-shimmer"></div>
                
                <div className="flex items-center mb-2 relative z-10">
                  <div className="group-hover:animate-[wiggle_0.5s_ease-in-out] transition-transform">
                    <Image src="/about/14.png" width={50} height={50} alt="" />
                  </div>
                  <h3 className="font-semibold text-lg ml-2 group-hover:text-[#208dc7] transition-colors">
                    24/7 Support
                  </h3>
                </div>
                <p className="text-gray-400 text-sm relative z-10">
                  Your success never sleeps — and neither do we. Our dedicated
                  support team works around the clock to keep your projects running
                  smoothly.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button - Fade and scale with glow */}
          <div className="animate-fadeInScale" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
            <button className="relative bg-[#208dc7] hover:bg-[#1382c4] text-white font-semibold px-6 py-3 rounded-tl-md rounded-br-md rounded-tr-2xl rounded-bl-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#208dc7]/50 animate-glow-pulse overflow-hidden group">
              <span className="relative z-10">Get In Touch</span>
              {/* Shine effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </button>
          </div>
        </div>

        {/* Right Illustration - Slide in from right with gentle float */}
        <div className="flex justify-center animate-slideInRight" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <div className="animate-float-gentle">
            <Image
              src="/about/18.png"
              width={800}
              height={600}
              alt=""
              className="max-w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;