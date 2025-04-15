import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ViewResultsMenu } from "../data/data";
import { tableData } from "../data/data";

import clsx from "clsx";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ViewResultsContent = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".table-row",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 1,
        duration: 3,
        ease: "elastic",
      }
    );
  });
  return (
    <div className="w-screen px-7 flex-1 max-w-7xl mx-auto">
      <h1 className="mt-8">Results Management</h1>
      <div className="h-1 w-full mt-2 bg-[#036303] rounded-md" />

      <div className=" space-y-7">
        <h1 className="mt-7">View and manage your analysis results</h1>
        <div className=" border w-full  py-4 px-4 flex items-center space-x-5">
          <div className="border rounded-md max-w-sm flex items-center px-2 py-1">
            <MagnifyingGlassIcon className="size-5" />
            <input
              className=" placeholder:text-xs h-full py-1 px-2 "
              placeholder="Search your results..."
            />
          </div>
          <div className="flex space-x-4 text-xs">
            {ViewResultsMenu.map((results, index) => (
              <Popover key={index} className="relative z-50 ">
                <PopoverButton className="flex  items-center  text-sm/6 focus:outline-none">
                  {results.name}
                  <ChevronDownIcon className="size-4 flex-none " />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className=" border mt-4  text-sm absolute top-full  py-2 px-2 w-56 rounded-xl bg-white transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in "
                >
                  {results.subMenu.map((subItem, index) => (
                    <a
                      key={index}
                      className="block rounded-lg px-3 py-2 text-sm/6 font-semibold hover:bg-gray-50"
                    >
                      {typeof subItem === "string" ? subItem : subItem.name}
                    </a>
                  ))}
                </PopoverPanel>
              </Popover>
            ))}
            <Popover className="relative z-50 ">
              <PopoverButton className="flex  items-center  text-sm/6 focus:outline-none">
                Date Range
                <ChevronDownIcon className="size-4 flex-none " />
              </PopoverButton>
              <PopoverPanel
                transition
                className="mt-4 flex space-x-4 py-3 items-center text-sm absolute top-full  py-2 px-10 border  rounded-xl bg-white transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in "
              >
                <input type="date" />
                <span className="mr-2">to</span>
                <input type="date" />
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 rounded-md border mt-5 shadow-inner">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3"
              >
                <input type="checkbox" />
              </th>
              <th
                scope="col"
                className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3"
              >
                NAME
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                TOOL
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                CREATED
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                DESCRIPTION
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                STATUS
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tableData.map((person) => (
              <tr key={person.name} className="even:bg-gray-50  table-row">
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                  <input type="checkbox" />
                </td>
                <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                  {person.name}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                  {person.tool}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                  {person.date}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                  {person.description}
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                  <span
                    className={clsx(
                      " px-2 py-1 text-white rounded-md",
                      person.status === "done" && "bg-[#036303]",
                      person.status === "running" && "bg-blue-600",
                      person.status === "failed" && "bg-red-500"
                    )}
                  >
                    {person.status}
                  </span>
                </td>
                <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500 ">
                  <div className="flex  space-x-2.5 w-full ">
                    <ArrowDownTrayIcon className="size-5 cursor-pointer" />
                    <ArrowPathIcon className="size-5 cursor-pointer" />
                    <EllipsisHorizontalIcon className="size-5 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex space-x-2 w-full items-center  justify-center mt-3">
        <button className="px-2 py-1 rounded-md shadow-inner border text-xs">
          CSV
        </button>
        <button className="px-2 py-1 rounded-md shadow-inner border text-xs">
          Excel
        </button>
        <button className="px-2 py-1 rounded-md shadow-inner border text-xs">
          PDF
        </button>
      </div>
    </div>
  );
};

const ViewResults = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ViewResultsContent />
      <Footer />
    </div>
  );
};

export default ViewResults;
