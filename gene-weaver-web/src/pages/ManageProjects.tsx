import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import clsx from "clsx";
import { FolderIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const ManageProjectContent = () => {
  const buttonNames = [
    "Delete Projects",
    "Remove GeneSets",
    "New Project",
    "Add Selected to Project",
    "Export OmicSoft",
    "Help",
  ];

  return (
    <div className="w-screen flex max-w-7xl mx-auto flex-1">
      <div className="w-[70%] flex flex-col justify-around">
        <div className=" relative  flex   w-full  space-x-36">
          <div className=" flex space-x-2">
            <FolderIcon className="size-5" />
            <span className="text-sm">My Projects</span>
            <div className="h-1 w-28 mt-1 bg-[#036303] rounded-md absolute top-5 -left-3" />
          </div>
          <div className="space-y-4">
            <div className="flex space-x-12 mt-2">
              <MagnifyingGlassIcon className="size-5" />
              <h1>PROJECT NAME</h1>
              <h2>SIZE</h2>
              <h2>DATE</h2>
            </div>
            <p className="text-sm text-center">
              You have not yet selected any projects!
            </p>
            <div className="h-[1px] w-full mt-1 rounded-md" />
            <p className="text-sm text-center">Showing 0 of 0 entries</p>
          </div>
        </div>
        <div className=" relative flex    w-[70%] space-x-36">
          <div className=" flex space-x-2">
            <FolderIcon className="size-5" />
            <span className="text-sm">Favorites</span>
            <div className="h-1 w-28 mt-1 bg-[#036303] rounded-md absolute top-5 -left-3" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between mt-2">
              <MagnifyingGlassIcon className="size-5" />
              <h1>PROJECT NAME</h1>
              <h2>SIZE</h2>
              <h2>DATE</h2>
            </div>
            <p className="text-sm text-center">
              You haven't created any favorite project.Click the star to add or
              remove a project
            </p>
            <div className="h-[1px] w-full mt-1 border rounded-md" />
            <p className="text-sm text-center">Showing 0 of 0 entries</p>
          </div>
        </div>
      </div>
      <div className="w-36 self-center">
        <h1 className="mt-8">Actions</h1>
        <div className="h-1 w-44 mt-1 bg-[#036303] rounded-md" />
        {buttonNames.map((button, index) => (
          <button
            key={index}
            className={clsx(
              "py-1 rounded-sm  px-1 mt-1 bg-red-500 text-xs text-white w-44",
              index === 2 && "bg-[#f1ad4d]",
              index === 3 && "bg-[#f1ad4d]",
              index === 4 && "bg-[#f1ad4d]",
              index === 5 && " bg-[#036303]"
            )}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

const ManageProjects = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ManageProjectContent />
      <Footer />
    </div>
  );
};

export default ManageProjects;
