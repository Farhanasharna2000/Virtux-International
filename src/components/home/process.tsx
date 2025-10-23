"use client";

import { steps } from "@/constants/process";
import React from "react";

const ProcessFlow: React.FC = () => {
  return (
    <div id="caseStudy" className="pb-24 overflow-hidden">
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawPath {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(32, 141, 199, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(32, 141, 199, 0.8);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }

        .animate-drawPath {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawPath 2s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>

      {/* header */}
      <div className="text-center animate-fadeInDown">
        <h1 className="text-3xl md:text-5xl font-bold">
          Process <span className="text-[#208dc7]">We Follow</span>{" "}
        </h1>
        <p className="p-25 md:py-6 font-semibold md:w-8/12 mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          We start by understanding your goals, audience, and industry. Through
          detailed research and analysis, we uncover insights that guide every
          creative and technical decision!{" "}
        </p>
      </div>

      <div className="relative mt-10">
        {/* Desktop Wave Path */}
        <svg
          className="absolute top-[40%] left-0 w-full h-40 z-0 md:block hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <path d="M 0 20 Q 25 0, 50 20 Q 75 40, 100 0" className="animate-drawPath" />
        </svg>

        {/* Mobile: Straight line */}
        <svg
          className="absolute top-0 left-1/2 h-full w-1 z-0 block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 10 100"
          preserveAspectRatio="none"
        >
          <path d="M 5 0 L 5 100" className="animate-drawPath" />
        </svg>

        {/* process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-4 md:mb-6 relative z-10 ml-16 md:ml-8 py-4 md:py-0">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative animate-scaleIn"
              style={{
                animationDelay: `${0.3 + index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Number Badge */}
              <div className="absolute right-[30%] md:right-0 lg:right-0 md:left-[45%] lg:left-[40%] size-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#208dc7] to-[#1a73a8] animate-pulse-glow shadow-lg z-20 transition-transform duration-300 hover:scale-110">
                {/* Rotating ring around number */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-rotate-slow"></div>
                <h2 className="font-bold text-xl md:text-5xl relative z-10">
                  {step.id}
                </h2>
              </div>

              {/* Main Card */}
              <div className="group border-2 border-[#208dc7] p-8 rounded-full w-64 h-64 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#141d45] to-[#0f1535] relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#2aa3e8] cursor-pointer animate-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#208dc7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                {/* Floating particles */}
                <div className="absolute w-1 h-1 bg-[#208dc7]/50 rounded-full top-[20%] left-[15%] animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute w-1.5 h-1.5 bg-[#208dc7]/30 rounded-full top-[70%] right-[20%] animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute w-1 h-1 bg-[#208dc7]/40 rounded-full bottom-[25%] left-[60%] animate-float" style={{ animationDelay: '1s' }}></div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-5 transition-all duration-300 group-hover:text-[#2aa3e8] group-hover:scale-110">
                    {step.title}
                  </h2>
                  <p className="transition-all duration-300 group-hover:text-white/90">
                    {step.description}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#208dc7]/30 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;