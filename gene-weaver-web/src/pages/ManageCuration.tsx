import React from "react";
import { PlusIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ManageCurationContent = () => {

    useGSAP(() => {
        gsap.from(".button-one", {
          opacity: 0,
          y: -500,
          stagger: 2,
          duration: 1,
          ease: "power3.out",
        });
        gsap.from(".button-two", {
          opacity: 0,
          y: 500,
          stagger: 2,
          duration: 1,
          ease: "power3.out",
        });

        

  })

    return (

    <div className="w-full  bg-gray-200 flex-1 flex items-center justify-center">
      <div className="max-w-7xl py-10 px-20 flex flex-col space-y-3  border-gray-300">
        <button className="flex button-one items-center space-x-2  bg-white px-14 py-3 border rounded-2xl shadow-inner ">
          <div className="py-2 px-2 bg-[#036303]/20 rounded-full">
            <PlusIcon className="size-5" />
          </div>
          <span className="text-lg font-semibold text-[#036303]">
            Create New Group
          </span>
        </button>
        <button className="flex button-two items-center space-x-2 bg-[#036303] text-white px-14 py-3  border rounded-2xl shadow-inner ">
          <div className="py-2 px-2 rounded-full">
            <UserGroupIcon className="size-5" />
          </div>
          <span className="text-lg font-semibold">Join Public Group</span>
        </button>
      </div>
    </div>
  );
};

const ManageCuration = () => {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <ManageCurationContent />
      <Footer />
    </div>
  );
};

export default ManageCuration;
