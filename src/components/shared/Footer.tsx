'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, MessageCircle, X } from 'lucide-react';

const Footer = () => {
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);
  
  // Your WhatsApp number (include country code without + or spaces)
  const whatsappNumber = '8801576625632';
  const defaultMessage = 'Hello! I would like to know more about your services.';

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'IT Consulting',
    'Digital Marketing',
  ];

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <footer className="from-slate-900 via-slate-800 to-slate-900 text-white mt-20">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" width={60} height={60} alt="Virtux Logo" />
                <div className="font-extrabold text-xl">
                  <p>VIRTUX</p>
                  <p className="text-[#208dc7]">INTERNATIONAL</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Providing innovative IT solutions and services to help businesses thrive in the digital age.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="https://www.facebook.com/virtuxintl" className="bg-slate-700 hover:bg-[#208dc7] p-2 rounded-lg transition-all duration-300 hover:scale-110">
                  <Facebook className="size-5" />
                </a>
                <a href="https://www.youtube.com/@VirtuxInternational" className="bg-slate-700 hover:bg-[#208dc7] p-2 rounded-lg transition-all duration-300 hover:scale-110">
                  <Youtube className="size-5" />
                </a>
                <a href="#" className="bg-slate-700 hover:bg-[#208dc7] p-2 rounded-lg transition-all duration-300 hover:scale-110">
                  <Linkedin className="size-5" />
                </a>
                <a href="https://www.instagram.com/virtuxintl" className="bg-slate-700 hover:bg-[#208dc7] p-2 rounded-lg transition-all duration-300 hover:scale-110">
                  <Instagram className="size-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#208dc7] rounded"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path} 
                      className="text-gray-300 hover:text-[#208dc7] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Our Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#208dc7] rounded"></span>
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-[#208dc7] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#208dc7] rounded"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <MapPin className="size-5 text-[#208dc7] mt-1 flex-shrink-0" />
                  <span className="text-sm">Sahajalal Avenue, Sector #04, Uttara, Dhaka -1230</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Phone className="size-5 text-[#208dc7] flex-shrink-0" />
                  <span className="text-sm">+8801576-625632</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Mail className="size-5 text-[#208dc7] flex-shrink-0" />
                  <span className="text-sm">info@virtuxinternational.com</span>
                </li>
              </ul>
              
              {/* Newsletter */}
              <div className="mt-6">
                <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-slate-700 text-white px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#208dc7]"
                  />
                  <button className="bg-[#208dc7] hover:bg-[#0d5c86] px-4 py-2 rounded-lg transition-colors duration-300">
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© 2025 Virtux International. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-[#208dc7] transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-[#208dc7] transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="hover:text-[#208dc7] transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Box */}
        {showWhatsAppChat && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="size-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="font-semibold">Virtux International</h4>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setShowWhatsAppChat(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-4 bg-gray-50">
              <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                <p className="text-sm text-gray-700 mb-2">👋 Hello! How can we help you today?</p>
                <p className="text-xs text-gray-500">Click below to start chatting with us on WhatsApp</p>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="size-5" />
                Start Chat on WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setShowWhatsAppChat(!showWhatsAppChat)}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer transition-all duration-300 animate-bounce"
          aria-label="WhatsApp Chat"
          style={{
            animation: 'bounce 2s infinite'
          }}
        >
          {showWhatsAppChat ? (
            <X className="size-6" />
          ) : (
            <MessageCircle className="size-6" />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;