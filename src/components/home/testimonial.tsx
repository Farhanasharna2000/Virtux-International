"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { QuoteIcon } from "lucide-react";
import { testimonials } from "@/constants/testimonial";

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div id="portfolio" className="pt-12 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Left Side */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus
          </p>
        </div>

        {/* Right Side Auto Slider */}
        <div>
          <Slider {...settings}>
            {testimonials.map((t) => (
              <div key={t.id}>
                <div className="bg-[#208dc7] text-black rounded-2xl p-6 relative mx-1">
                  <p className="text-lg font-semibold leading-relaxed flex gap-1">
                    <QuoteIcon className="rotate-180 size-8" /> {t.message}
                  </p>
                  <div className="flex items-center mt-6 gap-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold ">{t.name}</h4>
                      <p className="text-sm ">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
