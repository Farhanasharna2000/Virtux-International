import { services } from '@/constants/services';
import Image from 'next/image';
import React from 'react';

const Service:React.FC  = () => {
    return (
         <div className="py-6 md:py-8 flex items-center justify-center">
      <div className="md:mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#208dc7] rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:scale-105 "
            >
              <div className="flex flex-col items-center justify-center text-center h-full space-y-2">
                <div >
                  <Image src={service.icon} alt="" width={80} height={80}/>
                </div>
                <div className="text-black">
                  <h3 className="text-xl font-bold leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Service;