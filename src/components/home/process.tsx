import { steps } from "@/constants/process";
import React from "react";

const ProcessFlow:React.FC  = () => {
  return (
    <div>
      {/* header  */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold ">
          Process <span className="text-[#208dc7]">We Follow</span>{" "}
        </h1>
        <p className="py-4 md:py-6 font-semibold md:w-8/12 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          magni sint doloribus consequatur facere animi, quasi aliquid
          laboriosam sequi voluptatibus Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Obcaecati magni sint doloribus consequatur facere
          animi, quasi aliquid laboriosam sequi voluptatibus!{" "}
        </p>
      </div>
      <div className="relative">
        <svg
          className="absolute top-[40%] left-0 w-full h-40 z-0 md:block hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth="1"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          {/* Start middle → wave → end top */}
          <path d="M 0 20 Q 25 0, 50 20 Q 75 40, 100 0" />
        </svg>
        {/* Mobile: Straight line */}
        <svg
          className="absolute top-0 left-1/2 h-full w-1 z-0 block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth="1"
          viewBox="0 0 10 100"
          preserveAspectRatio="none"
        >
          <path d="M 5 0 L 5 100" />
        </svg>
        {/* process steps  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-4 md:mb-6 relative z-10 ml-16 md:ml-8 py-4 md:py-0">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <div className="absolute right-[30%] md:right-0 lg:right-0 md:left-[45%] lg:left-[40%] size-16 flex items-center justify-center rounded-full bg-[#208dc7]">
                <h2 className="font-bold text-xl md:text-5xl"> {step.id}</h2>
              </div>
              <div className="border-2 p-8 rounded-full w-64 h-64 flex flex-col items-center justify-center text-center bg-[#141d45]">
                <h2 className="text-xl font-bold">{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlow;
