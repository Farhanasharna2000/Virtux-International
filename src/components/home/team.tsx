"use client";
import { teamMembers } from "@/constants/members";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-6 md:px-10 py-10">
      <h1 className="text-3xl md:text-5xl font-bold md:leading-14 mb-10">
        Our Team
      </h1>

      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} >
            <div className="group relative rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center justify-center text-center h-full space-y-2">
                <div className="bg-white w-[200px] h-[200px] overflow-hidden rotate-45 rounded-3xl border-2 border-[#208dc7] p-3 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full -rotate-45 scale-150"
                  />
                </div>
                <div className="mt-10">
                  <p className="text-[#208dc7] font-bold text-lg">
                    {member.role}
                  </p>
                  <h3 className="text-xl font-bold leading-tight">
                    {member.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Link href="/our-team" className="flex items-center justify-center">
        <button
          className="text-[
#208dc7] hover:text-white font-semibold border-[
#208dc7] border-2 md:text-lg rounded-tl-md  rounded-br-md rounded-tr-2xl rounded-bl-2xl px-6 py-2 cursor-pointer "
        >
          See More
        </button>
      </Link>
    </div>
  );
};

export default Team;
