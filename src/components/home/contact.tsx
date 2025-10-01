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
    <section className="py-12 md:py-30">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  px-6 md:px-10">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-[#208dc7] rounded-4xl flex flex-col items-center justify-center p-6">
            <Image
              src="/contact/15.png"
              alt=""
              width={60}
              height={60}
              className="object-contain bg-white p-1 rounded-full mb-2"
            />
            <p className="text-lg font-bold text-black">+880 1234 490</p>
            <p className="text-sm text-black mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Image
              src="/contact/16.png"
              alt=""
              width={90}
              height={90}
              className="object-contain bg-white py-1 px-8 rounded-lg "
            />
          </div>
        </div>
        {/* Illustration */}
        <div className="mt-6">
          <Image
            src="/contact/17.png"
            alt=""
            width={450}
            height={450}
            className="object-contain"
          />
        </div>

        {/* Right side */}
        <div>
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
              placeholder="You Name*"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md text-black bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="You Email*"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md text-black bg-white"
            />
            <input
              type="text"
              name="number"
              placeholder="You Number*"
              value={formData.number}
              onChange={handleChange}
              className="p-3 rounded-md text-black bg-white"
            />
            <input
              type="text"
              name="subject"
              placeholder="You Subject*"
              value={formData.subject}
              onChange={handleChange}
              className="p-3 rounded-md text-black bg-white"
            />
            <textarea
              name="message"
              placeholder="Enter Message..........."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded-md text-black bg-white md:col-span-2"
            />
            <button
              type="submit"
              className="bg-[#208dc7] text-white py-3 rounded-md md:col-span-2"
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
