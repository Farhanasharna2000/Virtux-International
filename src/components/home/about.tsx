import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
           Your Growth Partner in a  <br /> Digital World{" "}
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-10 leading-relaxed">
            We combine innovation, dedication, and technology to deliver top-tier IT and creative solutions worldwide. From startups to enterprises, our commitment to quality and reliability has earned the trust of clients across every industry.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            {/* Item 1 */}
            <div>
              <div className="flex items-center mb-2">
                <Image src="/about/11.png" width={50} height={50} alt="" />
                <h3 className="font-semibold text-lg">First On Field</h3>
              </div>
              <p className="text-gray-400 text-sm">
                We take the lead with innovative strategies and flawless execution, ensuring every project sets new standards in performance
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="flex items-center mb-2">
                <Image src="/about/12.png" width={50} height={50} alt="" />
                <h3 className="font-semibold text-lg">Easy To Reach</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Our team is always one message away — ready to collaborate, communicate, and deliver support whenever you need
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="flex items-center mb-2">
                <Image src="/about/13.png" width={50} height={50} alt="" />
                <h3 className="font-semibold text-lg">Worldwide Services</h3>
              </div>
              <p className="text-gray-400 text-sm">
                From local startups to international brands, we provide global-level IT, design, and marketing solutions with a personal touch.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <div className="flex items-center mb-2">
                <Image src="/about/14.png" width={50} height={50} alt="" />
                <h3 className="font-semibold text-lg">24/7 Support</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Your success never sleeps — and neither do we. Our dedicated support team works around the clock to keep your projects running smoothly.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#208dc7] hover:bg-[#1382c4] text-white font-semibold px-6 py-3 rounded-tl-md  rounded-br-md rounded-tr-2xl rounded-bl-2xl shadow-lg transition">
            Get In Touch
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <Image
            src="/about/18.png"
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
