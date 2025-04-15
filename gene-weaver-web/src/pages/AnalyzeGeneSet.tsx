import React, { useRef } from "react";
// import image from "../assets/2.png";
import { analysisTools } from "../data/data";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnalyzeGeneSetContent = () => {
  const toolRef = useRef(null);
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from("[data-id]", {
      opacity: 0,
      y: 50,
      stagger: 0.25,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <div className="w-screen px-7 flex-1 max-w-7xl mx-auto">
      <h1 className="space-y-4 mt-14 mb-2">Analysis Tools</h1>
      <div className="h-1 w-full bg-[#036303] mb-4 rounded-md" />

      <div className="grid grid-cols-2 gap-5 w-full">
        {analysisTools.map((tool, index) => (
          <div
            // ref={toolRef}
            key={index}
            data-id={index} // Unique identifier for each item
            className="tool-item flex items-center space-x-2 w-full"
          >
            <img src={tool.icon} width={40} />
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h1>{tool.title}</h1>
                <p className="text-xs w-full max-w-xl">{tool.description}</p>
              </div>
              <button className="text-white bg-[#036303] px-2  h-7 rounded text-xs">
                Launch tool
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1 className="mt-8">Projects</h1>
      <div className="h-1 w-full mt-2 bg-[#036303] rounded-md" />
    </div>
  );
};

const AnalyzeGeneSet = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <AnalyzeGeneSetContent />
      <Footer />
    </div>
  );
};

export default AnalyzeGeneSet;
