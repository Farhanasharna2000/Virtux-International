import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-0">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold md:leading-14">
          Providing The Best <br /> Service & IT{" "}
          <span className="text-[#208dc7]">Solution</span>{" "}
        </h1>
        <p className="pt-4 md:pt-8 font-semibold">
          Empowering brands with end-to-end digital services including web and app development, UI/UX design, graphics, motion, VFX, SEO, marketing, content writing, and cyber security. We deliver innovation, performance, and growth — all in one place..{" "}
        </p>
        <div className="flex items-center gap-3 mt-6 md:mt-10 mb-6 md:mb-0">
          <button className="text-[#208dc7] hover:text-white font-semibold border-[#208dc7] border-2 md:text-lg rounded-tl-md  rounded-br-md rounded-tr-2xl rounded-bl-2xl px-6 py-2 cursor-pointer">
            Start Now
          </button>
          <button
            className={`bg-[#208dc7] rounded-full size-14 flex items-center justify-center border-4 border-[#0d5c86] ${styles.heartbeatBorder}`}
          >
            <Play className="size-6 text-white cursor-pointer" />
          </button>


        </div>
      </div>
      <div className="md:w-1/2">
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
