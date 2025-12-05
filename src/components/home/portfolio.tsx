"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Calendar, ExternalLink, User } from "lucide-react";

interface Project {
  id: number;
  image: string;
  clientName: string;
  projectName: string;
  date: string;
  description: string;
  category: string;
  link?: string;
}

// Sample portfolio data - replace with your actual data
const portfolioProjects: Project[] = [
  {
    id: 1,
    image: "/portfolio/bdfisherman.png",
    clientName: "BD Fisherman",
    projectName: "E-Commerce Platform",
    date: "December 2025",
    description: "Modern e-commerce solution with advanced features",
    category: "Web Development",
    link: "https://bdfisherman.com/"
  },
  {
    id: 2,
    image: "/portfolio/mssc.png",
    clientName: "Medical Science School & College",
    projectName: "Educational Website",
    date: "November 2025",
    description: "Complete brand redesign and digital presence",
    category: "Design",
    link: "https://www.medicalscienceedu.com/"
  },
  {
    id: 3,
    image: "/portfolio/healt.png",
    clientName: "Healthcare Solutions",
    projectName: "Patient Management System",
    date: "December 2025",
    description: "Comprehensive healthcare management platform",
    category: "Web Development",
    link: "#"
  },
  {
    id: 4,
    image: "/portfolio/finance.png",
    clientName: "Finance Corp",
    projectName: "Investment Dashboard",
    date: "September 2025",
    description: "Real-time analytics and investment tracking",
    category: "Web Development",
    link: "#"
  },
  {
    id: 5,
    image: "/portfolio/learning.png",
    clientName: "Education Hub",
    projectName: "Learning Management System",
    date: "August 2025",
    description: "Interactive online learning platform",
    category: "Web Development",
    link: "#"
  },
  {
    id: 6,
    image: "/portfolio/app.png",
    clientName: "Retail Chain",
    projectName: "Mobile App Development",
    date: "July 2025",
    description: "Cross-platform mobile shopping experience",
    category: "Mobile Development",
    link: "#"
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Web Development", "Mobile Development", "Design"];

  const filteredProjects = filter === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === filter);

  return (
    <div id="portfolio" className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 color-white">
            Our Portfolio
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our diverse collection of successful projects delivered to clients worldwide
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-[#208dc7] text-white shadow-lg shadow-[#208dc7]/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#208dc7]/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.projectName}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23374151' width='400' height='300'/%3E%3Ctext fill='%239CA3AF' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EProject Image%3C/text%3E%3C/svg%3E";
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  {project.link && (
                    <a
                      href={project.link}
                      className="bg-[#208dc7] text-white p-3 rounded-full hover:bg-[#1a75a8] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-[#208dc7]/20 text-[#5cb3e0] text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>

                {/* Project Name */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#208dc7] transition-colors">
                  {project.projectName}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Client & Date Info */}
                <div className="space-y-2 border-t border-gray-700 pt-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <User className="w-4 h-4 text-[#208dc7]" />
                    <span className="text-sm font-medium">{project.clientName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4 text-[#208dc7]" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#208dc7]/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-[#208dc7] to-[#1a75a8] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#208dc7]/50 transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;