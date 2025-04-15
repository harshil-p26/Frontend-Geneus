import Header from "../ui/Header";
import Footer from "../ui/Footer";
import {
  ArrowDownIcon,
  FolderIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";

const ViewGenSetsContent = () => {
  return (
    <div className="flex-1 mx-auto text-sm max-w-7xl mt-10 w-full ">
      <div className=" text-white  bg-[#1E5949] flex  justify-between w-full  border py-5 px-3 ">
        <div className="flex space-x-14">
          <div className="flex space-x-2 items-center">
            <FolderIcon className="size-5" />
            <span>Add to Project</span>
          </div>
          <div className="flex space-x-2 items-center">
            <FolderIcon className="size-5" />
            <span>Assign to curation Group</span>
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <span>25 per page</span>
          <ArrowDownIcon className="size-4" />
        </div>
      </div>
      <div className=" flex space-x-56 mt-5">
        <div className="flex space-x-2 items-center">
          <ChevronUpIcon className="size-5" />
          <h1>SPECIES</h1>
          <h2>TIER</h2>
          <h3>COUNT</h3>
          <h3>ID</h3>
        </div>
        <h2>Name</h2>
      </div>
      <div className="py-2  mt-5 px-2 w-full bg-gray-300  ">
        <p>No Data available in the table</p>
      </div>
      <div className="h-1 bg-stone-800" />
      <div className=" flex space-x-56 mt-2">
        <div className="flex space-x-2 items-center">
          <ChevronUpIcon className="size-5" />
          <h1>SPECIES</h1>
          <h2>TIER</h2>
          <h3>COUNT</h3>
          <h3>ID</h3>
        </div>
        <h2>Name</h2>
      </div>

      <div className="flex justify-between items-center px-2 mt-10">
        <p className="text-red-300"> Showing 0 of 0 entries</p>

        <div className="  flex ">
          <button className="py-3 px-6 border text-sm bg-[#e6dff9] border-stone-800 flex space-x-2 rounded-l-full">
            <CheckIcon className="size-5" />
            Select all
          </button>
          <button className="py-3 px-6 border text-sm border-stone-800 flex space-x-2 border-l-0 rounded-r-full">
            Deselect all
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewGenSets = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ViewGenSetsContent />
      <Footer />
    </div>
  );
};

export default ViewGenSets;
