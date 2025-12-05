'use client';
import { Play } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-0 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
        <div className={styles.floatingCircle3}></div>
      </div>

      <div className={`absolute inset-0 pointer-events-none ${styles.orbsContainer}`}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={styles.glowingOrb}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="md:w-1/2 relative z-10">
        <h1 className={`text-3xl md:text-5xl font-bold md:leading-14 ${styles.fadeInUp}`}>
          Providing The Best <br /> Service & IT{" "}
          <span className={`text-[#208dc7] ${styles.gradientText}`}>Solution</span>{" "}
        </h1>
        <p className={`pt-4 md:pt-8 font-semibold ${styles.fadeInUpDelay}`}>
          Empowering brands with end-to-end digital services including web and app development, UI/UX design, graphics, motion, VFX, SEO, marketing, content writing, and cyber security. We deliver innovation, performance, and growth — all in one place.{" "}
        </p>
        <div className={`flex items-center gap-3 mt-6 md:mt-10 mb-6 md:mb-0 ${styles.fadeInUpDelay2}`}>
          <button className={`text-[#208dc7] hover:text-white hover:bg-[#208dc7] font-semibold border-[#208dc7] border-2 md:text-lg rounded-tl-md rounded-br-md rounded-tr-2xl rounded-bl-2xl px-6 py-2 cursor-pointer transition-all duration-300 ${styles.buttonHover}`}>
            Start Now
          </button>
          <button
            onClick={openModal}
            className={`bg-[#208dc7] rounded-full size-14 flex items-center justify-center border-4 border-[#0d5c86] ${styles.heartbeatBorder} ${styles.pulseGlow}`}
          >
            <Play className="size-6 text-white cursor-pointer" />
          </button>
        </div>
      </div>

      <div className={`md:w-1/2 relative z-10 ${styles.imageFloat}`}>
        <Image
          src="/hero.png"
          width={800}
          height={600}
          alt=""
          className="md:w-[800px] w-full md:h-[600px] h-70 object-contain"
        />
      </div>

      {/* Enhanced Modal for YouTube Video */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          {/* Animated backdrop with blur */}
          <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm ${styles.fadeIn}`}></div>
          
          {/* Modal container with scale animation */}
          <div 
            className={`relative w-full max-w-4xl ${styles.scaleIn}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-[#208dc7] via-purple-500 to-[#208dc7] rounded-2xl blur-xl opacity-75 ${styles.modalPulse}`}></div>
            
            {/* Main modal content */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-[#208dc7]/30">
              
              {/* Close button */}
              <button 
                onClick={closeModal} 
                className={`absolute -top-4 -right-4 z-10 bg-gradient-to-br from-[#208dc7] to-[#0d5c86] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 group ${styles.closeButton}`}
              >
                <span className={`text-2xl font-bold ${styles.closeIcon}`}>×</span>
              </button>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#208dc7] rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#208dc7] rounded-br-2xl"></div>

              {/* Video container */}
              <div className="p-4 md:p-6">
                <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_XzrZvxADIA?autoplay=1&si=j-QYUch0IAlWxRdg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                {/* Title and description */}
                <div className="mt-4 text-center">
                  <h3 className="text-white text-lg md:text-xl font-semibold">Watch Our Story</h3>
                  <p className="text-gray-400 text-sm mt-1">Discover how we transform ideas into reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;