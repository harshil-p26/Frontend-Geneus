import Header from "../ui/Header";
import Footer from "../ui/Footer";       
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  PlayIcon,
} from "@heroicons/react/16/solid";

const UploadGeneSetContent = () => { 
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full  my-10">
      <header className="w-full p-5 text-white bg-[#1E5949]">
        <h1 className="text-xl font-semibold">Upload GeneSet</h1>
        <p>(*) = mandatory</p>
      </header>
      <h1 className="mt-8 ">GeneSet Meta Content</h1>
      <div className="h-1 w-full mt-2 bg-[#036303] rounded-md" />
      <p className="">
        Please enter some descriptive info about this GeneSet.please confirm
        that your GeneSet MetaContent meets the guidelines outlined in our
        curation standards to ensure rapid acceptance by our curation team or in
        the case of private data,maximum integration into available GeneWeaver
        datasets
      </p>

      <div className="space-y-5 mt-10 max-w-lg">
        <div className=" flex justify-between items-center">
          <label>GeneSet name * :</label>
          <input className="border-2 w-72 py-1 rounded border-stone-600" />
        </div>
        <div className="flex justify-between items-center">
          <label>GeneSet Figure Label * :</label>
          <input className="border-2 w-72 rounded py-1 border-stone-500" />
        </div>
        <div className="flex justify-between items-center ">
          <label>Score Type * :</label>
          <input className="border-2 border-stone-600  rounded py-1 w-72" />
        </div>
        <div className="flex justify-between items-center">
          <label>GeneSet Description * :</label>
          <input className="border-2 border-stone-600 py-5 rounded  w-72" />
        </div>
      </div>

      <h1 className="mt-8">Reference information</h1>
      <div className="h-1 w-full mt-2 bg-[#036303] rounded-md" />
      <p className="">
        If this experiment has been published and listed in PubMed, just enter
        the Pubmed ID below to automatically fill in the publication info,
        otherwise you may manually enter publication information. Providing this
        will allow others to discover and use your data more quickly, provide a
        means to link here directly from PubMed, and streamline our curation
        efforts.
      </p>
      <div className="flex justify-between items-center max-w-lg">
        <label>PubMed ID:</label>
        <input className="border-2 border-stone-600 py-1 rounded  w-72" />
      </div>
      <div className="flex items-center space-x-1 text-[#2a8cd0]">
        <span>Manual Entry</span>
        <ChevronDownIcon className="size-5 " />
      </div>
      <h1 className="mt-8">Access Permissions</h1>
      <div className="h-1 w-full mt-2 bg-[#036303] rounded-md" />
      <div className="flex mt-3 justify-between items-center max-w-lg">
        <label>Access Restrictions * :</label>
        <select className="py-1 w-72 border border-stone-600 px-2">
          <option>Private</option>
        </select>
      </div>
      <div className="flex mt-7 justify-between items-center max-w-lg">
        <label>Groups</label>
        <input className="border-2 border-stone-600 py-5 rounded  w-72" />
      </div>

      <h1 className="mt-8">Gene Information</h1>
      <div className="h-1 w-full mt-2 bg-[#036303] rounded-md" />
      <div className="flex mt-3 justify-between items-center max-w-lg">
        <label>Species * :</label>
        <select className="py-1 w-72 border border-stone-600 px-2">
          <option>--select species --</option>
        </select>
      </div>
      <div className="flex mt-5 justify-between items-center max-w-lg">
        <label>Gene Identifiers * :</label>
        <select className="py-1 w-72 border border-stone-600 px-2">
          <option>--select identifier --</option>
        </select>
      </div>
      <div className="flex mt-7 justify-between items-center max-w-lg">
        <label>Gene List</label>
        <div>
          <div className=" text-[#2a8cd0]  ml-2 flex items-center space-x-1 text-xs">
            <span>Switch to File Upload </span>
            <ArrowDownTrayIcon className="size-4" />
          </div>
          <input className="border-2 border-stone-600 py-5 rounded  w-72" />
        </div>
      </div>
      <div className="h-1 w-full mt-2 bg-[#036303] rounded-md" />
      <div className="flex justify-end">
        <button className="flex bg-[#f1ad4d] items-center space-x-2 py-2 px-3 rounded mt-1">
          <span>Review GeneSet Upload</span>
          <PlayIcon className="size-4" />
        </button>
      </div>
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
