"use client";

import { services } from "@/constants/services";
import Image from "next/image";
import React from "react";

const Service: React.FC = () => {
  return (
    <div id="service" className="py-6 md:py-8 flex items-center justify-center overflow-hidden">
      <style jsx global>{`
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>

      <div className="md:mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#208dc7] to-[#1a73a8] rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-2 hover:shadow-2xl animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2aa3e8] to-[#1589c9] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute w-2 h-2 bg-white/30 rounded-full top-[20%] left-[15%] animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute w-1.5 h-1.5 bg-white/20 rounded-full top-[60%] right-[20%] animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute w-1 h-1 bg-white/25 rounded-full bottom-[30%] left-[70%] animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full space-y-2">
                <div className="transform transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2">
                  <Image 
                    src={service.icon} 
                    alt="" 
                    width={100} 
                    height={100}
                    className="drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500 animate-bounce-subtle"
                  />
                </div>
                <div className="text-white transform transition-all duration-500 group-hover:translate-y-1">
                  <h3 className="text-xl font-bold leading-tight drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#208dc7]/50 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;