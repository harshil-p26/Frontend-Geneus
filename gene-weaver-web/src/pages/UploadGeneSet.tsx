import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const UploadGeneSetContent = () => {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full border border-red-400 mt-10">
      <header className="w-full py-5">
        <h1>Upload GeneSet</h1>
        <p>(*)</p>
      </header>
    </div>
  );
};

const UploadGeneSet = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <UploadGeneSetContent />
      <Footer />
    </div>
  );
};

export default UploadGeneSet;
