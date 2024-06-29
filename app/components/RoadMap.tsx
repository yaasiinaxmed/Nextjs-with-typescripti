import React from "react";
import { useEffect, useRef, useState } from "react";

interface RoadMapProps {
  title: string;
  description: string;
  index: number; // To determine left or right alignment
}

const RoadMapItem: React.FC<RoadMapProps> = ({ title, description, index }) => (
  <div className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
    <div className="hidden lg:block absolute left-[34rem] transform -translate-x-1/2 top-4 md:top-[100px]">
      <div className="w-6 h-6 bg-[#2a2664] border-2 border-white rounded-full -mt-3"></div>
    </div>
    <div className={`max-w-[360px] bg-white p-6 rounded-lg shadow-md mb-12 ml-12 md:mr-12 ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"}`}>
      <h3 className="text-[#2A266A] font-bold text-xl mb-3">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

const RoadMap: React.FC = () => {
  const roadmapItems = [
    {
      title: "Launch the Coin and Initial Coin Offering (ICO)",
      description: "List on major cryptocurrency exchanges, develop and release the official wallet, and initiate community building and marketing campaigns."
    },
    {
      title: "Implement Staking and Mining Programs",
      description: "Integrate with decentralized finance (DeFi) platforms, develop decentralized applications (dApps), and establish strategic industry partnerships."
    },
    {
      title: "Full Release of Decentralized Applications (dApps)",
      description: "Expand global partnerships and market reach, continuously improve based on community feedback, and enhance security protocols with audits conducted."
    }
  ];

  return (
    <section id="roadmap" className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          RoadMap
        </h2>

        {/* Timeline */}
        <div className="relative md:flex md:flex-row-reverse md:space-x-8">
          {/* Vertical Line */}
          <div className="rounded-lg hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#2a2664] h-full"></div>

          {/* Timeline Items */}
          <div className="flex flex-col md:w-full">
            {roadmapItems.map((item, index) => (
              <RoadMapItem
                key={index}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;