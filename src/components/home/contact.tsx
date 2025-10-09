"use client";

import Image from "next/image";
import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section id="contact" className="py-12 md:py-30">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.8fr_1.4fr] px-6 md:px-10 gap-6">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-[#208dc7] rounded-4xl flex flex-col items-center justify-center p-6 w-full h-[350px] md:h-[400px]">
            <Image
              src="/contact/15.png"
              alt=""
              width={60}
              height={60}
              className="object-contain bg-white p-1 rounded-full mb-2"
            />
            <p className="text-lg font-bold text-black">+8801576-625632</p>
            <p className="text-lg font-bold text-black m-3">info@virtuxinternational.com</p>
            <p className="text-sm font-bold text-black mb-6">
             Sahajalal Avenue, Sector #04, Uttara, Dhaka -1230
            </p>
           <a href="https://api.whatsapp.com/send?phone=8801576625632" target="_blank" rel="noopener noreferrer">
             <Image
              src="/contact/16.png"
              alt=""
              width={90}
              height={90}
              className="object-contain bg-white py-1 px-8 rounded-lg"
            />
           </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center md:justify-start mt-6 md:mt-0 relative">
        <Image
          src="/contact/17.png"
          alt="Illustration"
          width={1200}   // make bigger
          height={1200}
          className="object-contain absolute left-[-26%] top-[10%] scale-125 hidden md:block"
        />
      </div>


        {/* Right side - Form */}
        <div className="mt-16 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-[#208dc7]">Reach</span> & Get In Touch <br />
            with us!
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md text-black bg-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md text-black bg-white"
              required
              suppressHydrationWarning
            />
            <input
              type="text"
              name="number"
              placeholder="Your Number*"
              value={formData.number}
              onChange={handleChange}
              className="p-3 rounded-md text-black bg-white"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 rounded-md text-black bg-white"
              required
            />
            <textarea
              name="message"
              placeholder="Enter Message..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded-md text-black bg-white md:col-span-2"
              required
            />
            <button
              type="submit"
              className="bg-[#208dc7] text-white py-3 rounded-md md:col-span-2 hover:bg-[#1a6fa1] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
