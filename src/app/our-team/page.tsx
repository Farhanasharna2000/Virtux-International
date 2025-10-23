import { teamMembers } from "@/constants/members";
import Image from "next/image";
import React from "react";

const Team: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-center py-10 md:py-20">
        Our Team
      </h1>
      <div className="py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 ${
                index < 3 ? "lg:col-span-4" : "lg:col-span-3"
              }`}
            >
              <div className="flex flex-col items-center justify-center text-center h-full space-y-2">
                <div className="bg-white w-[240px] h-[240px] overflow-hidden rotate-45 rounded-3xl border-2 border-[#208dc7] p-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={240}
                    height={240}
                    className="object-contain w-full h-full -rotate-45 scale-150"
                  />
                </div>
                <div className="mt-16">
                  <h3 className="text-[26px] font-bold leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#208dc7] font-bold text-lg">
                    {member.role}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
