import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { FolderIcon, UserGroupIcon } from "@heroicons/react/16/solid";

const BatchUploadContent = () => {
  return (
    <div className="flex-1  max-w-7xl mx-auto w-full  h-screen my-40">
      <header className="w-full p-2 text-white bg-[#1E5949]">
        <h1 className="text-xl font-semibold">Batch GeneSet Upload</h1>
        <div className="flex space-x-3 mt-3">
          <button className="flex justify-center items-center space-x-5 text-[#1E5949] py-2 bg-white border-2  border-stone-800 w-full ">
            <UserGroupIcon className="size-5" />
            <span>Create new Group</span>
          </button>
          <button className="flex justify-center items-center space-x-5 py-2 bg-[#1E5949] border-2  text-white border-white w-full ">
            <UserGroupIcon className="size-5" />
            <span>Join Public Group</span>
          </button>
        </div>
      </header>

      <div className="flex w-full  ">
        <div className="space-y-2 border w-1/2 ">
          <p>Select a group to curate these genesets </p>
          <select className="border rounded py-1 border-stone-900 px-3">
            <option>-- select a group --</option>
          </select>
        </div>

        <div className="border  w-1/2">
          <div className="flex justify-between">
            <span> No file selected</span>
            <div className="flex items-center space-x-2">
              <FolderIcon className="size-4 " />
              <span>Sample File</span>{" "}
            </div>
          </div>
          <button className=" bg-[#f1ad4d] border-2 border-stone-900 text-white py-1 w-full">
            Batch Upload File
          </button>
          <button className=" bg-[#f1ad4d] border-2 border-stone-900 mt-2 text-white py-1 w-full">
            GeneSet Review Upload
          </button>
          <button className=" bg-[#f1ad4d] border-2 border-stone-900 mt-2 text-white py-1 w-full">
            Convert from HBA-DEALS Format
          </button>
        </div>
      </div>
    </div>
  );
};

const BatchUpload = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <BatchUploadContent />
      <Footer />
    </div>
  );
};

export default BatchUpload;
