import React, { useEffect, useRef, useState } from "react";

import { LuLayoutGrid } from "react-icons/lu";
import { BsList } from "react-icons/bs";
import GridView from "./GridView";
import ListView from "./ListView";
import Pagination from "./Pagination";
import { PiCaretUpDown } from "react-icons/pi";

const ShopCards = () => {
  const [view, setView] = useState("grid");
  const [, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="bg-white flex flex-col lg:flex-row gap-4  justify-between items-start lg:items-center p-5 rounded-md border border-[#E6EBEE] ">
        {/* for mobile device list grid icons  start*/}
        <div className=" flex items-center gap-2">
          {/* list grid start */}
          <div className="flex gap-1 ">
            <button
              className={` p-2 ${
                view === "grid" ? "bg-green-300 " : "bg-gray-100 "
              }`}
              onClick={() => setView("grid")}
            >
              <LuLayoutGrid size={24} className="text-black " />
            </button>
            <button
              className={`p-2 ${
                view === "list" ? "bg-green-300 " : "bg-gray-100 "
              }`}
              onClick={() => setView("list")}
            >
              <BsList size={24} className="text-black " />
            </button>
          </div>

          {/* list grid end */}
          <div>
            <p className="text-[#1C1C1C]  text-base font-normal">
              12,911 items found
            </p>
          </div>
        </div>
        {/* for mobile device list grid icons end*/}

        {/* sec part start */}
        <div className="flex  flex-col md:flex-row items-start md:items-center gap-2">
          {/* ---------- */}
          <div className="hidden sm:flex items-center justify-between w-full gap-4">
            <button className="text-base font-medium text-gray-800 hover:text-green-500 transition-all duration-300 cursor-pointer">
              Top Sell
            </button>
            <button className="text-base font-medium flex items-center gap-1 text-gray-800 hover:text-green-500 transition-all duration-300 cursor-pointer">
              Price <PiCaretUpDown />
            </button>
            <button className="text-base font-medium text-gray-800 hover:text-green-500 transition-all duration-300 cursor-pointer">
              Discount
            </button>
          </div>
          {/* ---------- */}
        </div>
        {/* sec part end */}
      </div>

      <div>
        {view === "grid" && (
          <div>
            <GridView />
          </div>
        )}
        {view === "list" && (
          <div>
            <ListView />
          </div>
        )}
      </div>
      <div className="mb-8 sm:mb-0">
        <Pagination />
      </div>
    </div>
  );
};

export default ShopCards;
