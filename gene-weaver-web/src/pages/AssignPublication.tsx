import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const AssignPublicationContent = () => {
  return (
    <div className="w-full  bg-gray-200 h-screen flex-1 flex items-center justify-center">
      <div className="max-w-7xl py-10 bg-white  px-20 flex flex-col space-y-3 border rounded-2xl shadow-inner border-gray-300">
        <div className="flex items-center space-x-2">
          <div className="py-2 px-2 bg-[#036303]/20 rounded-full">
            <MagnifyingGlassIcon className="size-5" />
          </div>
          <span className="text-lg font-semibold text-[#036303]">
            Search/Assign Publication
          </span>
        </div>
        <span className="font-bold text-[#036303] ">
          Singla publication assignment
        </span>
        <span className="text-sm font-medium">
          Assign a publication to a group
        </span>
        <span className="font-medium">PubMed ID</span>
        <div className="space-x-2">
          <input
            className=" px-2  border py-1 rounded-md placeholder:text-sm"
            placeholder="Enter ID here "
          />
          <button className="py-2 px-2 rounded-md text-sm text-white bg-[#036303]">
            Find Publication
          </button>
        </div>
      </div>
    </div>
  );
};

const AssignPublication = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <AssignPublicationContent />
      <Footer />
    </div>
  );
};

export default AssignPublication;
