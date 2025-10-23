import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-0 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
        <div className={styles.floatingCircle3}></div>
      </div>

      {/* Particles */}
      <div className={`absolute inset-0 pointer-events-none ${styles.particlesContainer}`}>
        {[...Array(25)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 12}s`
          }}></div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className={`absolute inset-0 pointer-events-none ${styles.orbsContainer}`}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.glowingOrb} style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${6 + Math.random() * 6}s`
          }}></div>
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
    </div>
  );
};

export default Hero;