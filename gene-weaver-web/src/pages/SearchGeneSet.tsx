import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";

const SearchGeneSetContent = () => {
  return (
    <div className="flex-1 mx-auto max-w-7xl mt-10">
      <div className=" text-white  bg-[#036303] flex space-x-60  border py-3 px-3 ">
        <div>
          <input
            placeholder="search here ..."
            className=" px-5 py-1 rounded-full"
          />
          <button className="py-1 px-3"> Search</button>
        </div>
        <div className="flex items-center space-x-2 bg">
          <PlusIcon className="size-5" />
          <MinusIcon className="size-5" />
        </div>
      </div>
      <div className="w-full border flex justify-around">
        <div className="flex space-x-2">
          <input type="checkbox" />
          <label>GeneSets</label>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" />
          <label>Genes</label>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" />
          <label>Abstracts</label>
        </div>
        <div className="flex space-x-2">
          <input type="checkbox" />
          <label>Annotations</label>
        </div>
      </div>
    </div>
  );
};

const SearchGeneSet = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SearchGeneSetContent />
      <Footer />
    </div>
  );
};

export default SearchGeneSet;
