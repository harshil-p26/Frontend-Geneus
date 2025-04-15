import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const EmphasisGenesContent = () => {
    useGSAP(() => {
      gsap.from(".container", {
        opacity: 0,
        scale: 0.75,
        duration: 2,
        ease: "bounce",
      });
    });
  return (
    <div className="px-7 flex-1 max-w-7xl mx-auto w-full">
      <h1 className="mt-8">Emphasis Genes</h1>
      <div className="h-1 w-full mt-2 bg-[#036303] rounded-md" />

      <div className="w-full h-[60vh] container border mt-10 rounded-md shadow-md flex py-7 px-4">
        <div className="w-1/2">
          <h1>Current Emphasis List</h1>
        </div>
        <div className="w-1/2 border-l-[#036303] border-l-4 px-4 py-2 space-y-4 ">
          <h1>Add Genes</h1>
          <div className="rounded-md w-1/2 border flex pl-1 justify-between">
            <input
              className=" placeholder:text-sm px-2 w-full "
              placeholder="search for gene..."
            />
            <button className="px-3  text-xs text-white bg-[#036303]  rounded-r-md">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmphasisGenes = () => {


  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <EmphasisGenesContent />
      <Footer />
    </div>
  );
};

export default EmphasisGenes;
