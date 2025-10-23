"use client";
import { menuItems } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    } else {
      router.push(path);
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="py-2 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" width={70} height={70} alt="" />
          <Link href="/" className="font-extrabold md:text-2xl">
            <p>VIRTUX</p>
            <p>INTERNATIONAL</p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between gap-6 md:pr-4">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleClick(e, item.path)}
                className="cursor-pointer hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden mx-4 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-[#208dc7] to-[#141d45] z-40 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          
          {menuItems.map((item, index) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleClick(e, item.path)}
              className={`py-4 text-white text-lg font-semibold border-b border-white/20 hover:bg-white/10 px-4 rounded-lg transition-all duration-200 transform ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.name}
            </a>
          ))}
          
          {/* Decorative Element */}
          <div className="mt-auto mb-8">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 rounded-full" />
            <p className="text-white/60 text-center text-sm mt-4">
              VIRTUX INTERNATIONAL
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;