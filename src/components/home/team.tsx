"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { teamMembers } from "@/constants/members";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team: React.FC = () => {
  // --- render after mount to let react-slick read the real viewport width ---
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null; // or return a tiny skeleton if you want

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,          // desktop default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: false,
    variableWidth: false,

  } as const;

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,          // desktop default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: false,
    variableWidth: false,

  } as const;

  return (
    <div className="px-6 md:px-10 py-10 overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-bold md:leading-14 mb-10">
        Our Team
      </h1>

      <div className="md:block hidden">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              {/* min-w-0 prevents the card from forcing wider slides on small screens */}
              <div className="group relative rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:scale-105 min-w-0">
                <div className="flex flex-col items-center justify-center text-center h-full space-y-2">
                  {/* Smaller box on mobile so one slide fits neatly */}
                  <div className="bg-white w-40 h-40 md:w-[200px] md:h-[200px] overflow-hidden rotate-45 rounded-3xl border-2 border-[#208dc7] p-3 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full -rotate-45 md:scale-150"
                    />
                  </div>
                  <div className="mt-8 md:mt-10">
                    <h3 className="text-lg md:text-xl font-bold leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#208dc7] font-bold text-base md:text-lg">
                      {member.role}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="md:hidden">
        <Slider {...settings2}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              {/* min-w-0 prevents the card from forcing wider slides on small screens */}
              <div className="group relative rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:scale-105 min-w-0">
                <div className="flex flex-col items-center justify-center text-center h-full space-y-2">
                  <div className="bg-white w-[240px] h-[240px] overflow-hidden rotate-45 rounded-3xl border-2 border-[#208dc7] p-3 mt-7">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={240}
                      height={240}
                      className="object-contain w-full h-full -rotate-45 scale-150"
                    />
                  </div>
                  <div className="mt-16">
                    <h3 className="text-xl font-bold leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[#208dc7] font-bold text-lg">
                      {member.role}
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Link href="/our-team" className="flex items-center justify-center mt-6">
        <button className="text-[#208dc7] hover:text-white font-semibold border-[#208dc7] border-2 md:text-lg rounded-tl-md rounded-br-md rounded-tr-2xl rounded-bl-2xl px-6 py-2">
          See More
        </button>
      </Link>
    </div>

  );
};

export default Team;
