import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { BsList } from "react-icons/bs";
import GridView from "./GridView";
import ListView from "./ListView";
import Pagination from "./Pagination";

const ShopCards = () => {
  const [view, setView] = useState("list");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Featured");

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

  const option = [
    { value: "bangladesh", label: "Bangladesh" },
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
    { value: "australia", label: "Australia" },
  ];

  return (
    <div>
      <div className="bg-white flex flex-col lg:flex-row gap-4  justify-between items-start lg:items-center p-5 rounded-md border border-[#E6EBEE] ">
        <div>
          <p className="text-[#1C1C1C]  text-base font-normal">
            12,911 items in{" "}
            <span className="font-semibold">Mobile accessory</span>
          </p>
        </div>
        {/* sec part start */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="verified-only" />
            <label htmlFor="verified-only" className="font-normal text-base">
              {" "}
              Verified only
            </label>
          </div>
          {/* Dropdown button start */}
          <div className="relative w-48" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full px-4 py-2 border  border-[#E6EBEE] rounded-md bg-primary shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-base font-normal"
            >
              {selectedOption}
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute z-10 left-0 mt-2 w-full border border-[#E6EBEE] dark:border-gray-700 bg-primary shadow-md rounded-md overflow-hidden">
                {option.map((data, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer"
                    onClick={() => {
                      setSelectedOption(data.label);
                      setIsOpen(false);
                    }}
                  >
                    {data.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Dropdown button start end */}
          {/* list grid start */}
          <div className="flex gap-1 ">
            <button
              className={` p-2 ${
                view === "grid"
                  ? "bg-gray-300 "
                  : "bg-gray-100 "
              }`}
              onClick={() => setView("grid")}
            >
              <LuLayoutGrid
                size={24}
                className="text-black "
              />
            </button>
            <button
              className={`p-2 ${
                view === "list"
                  ? "bg-gray-300 "
                  : "bg-gray-100 "
              }`}
              onClick={() => setView("list")}
            >
              <BsList size={24} className="text-black " />
            </button>
          </div>

          {/* list grid end */}
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
