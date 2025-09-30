import React from "react";
import { Globe, Headphones, Gamepad2, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <section className="text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
         
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Trusted By Worldwide <br /> Clients Since{" "}
            <span className="text-[#1fa9f0]">1980</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            {/* Item 1 */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-8 h-8 text-[#1fa9f0]" />
                <h3 className="font-semibold text-lg">First On Field</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Gamepad2 className="w-8 h-8 text-[#1fa9f0]" />
                <h3 className="font-semibold text-lg">Easy To Reach</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-8 h-8 text-[#1fa9f0]" />
                <h3 className="font-semibold text-lg">Worldwide Services</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Headphones className="w-8 h-8 text-[#1fa9f0]" />
                <h3 className="font-semibold text-lg">24/7 Support</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#1fa9f0] hover:bg-[#1382c4] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
            Get In Touch
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          {/* You can replace this with your own SVG/3D illustration */}
          <img
            src="/about.png"
          width={800}
          height={600}
          alt=""
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
