import React from "react";
import geneWeaverLogo from "../assets/logo_geneweaver 1.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
//     const 
//     useGSAP(() => {
    
// })

  return (
    <div className="w-full bg-[#1E5949] mt-10  py-10 items-center text-white  justify-evenly flex space-">
      <div className="space-y-4">
        <h2 className="text-4xl text-white">Welcome to GeneWeaver</h2>
        <p className="text-sm text-white">
          Discover, curate, and analyze gene sets with ease
        </p>
        <button className="px-7 py-3 bg-black rounded-md text-xs">
          Get Started
        </button>
      </div>
      <img className="" width={300} src={geneWeaverLogo} />
    </div>
  );
};

export default Hero;
