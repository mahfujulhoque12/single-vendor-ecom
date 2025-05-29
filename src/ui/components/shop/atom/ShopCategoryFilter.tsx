"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ShopCategoryFilter = () => {
  const [showAll, setShowAll] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };
  const categories = [
    "Mobile accessory",
    "Electronics",
    "Smartphones ",
    "Modern tech",
    "Home & Garden",
    "Watches",
    "Clothing",
  ];
  const visibleCategories = showAll ? categories : categories.slice(0, 4);
  return (
    <div className=" rounded-md overflow-hidden border border-[#E6EBEE] bg-primary dark:border-gray-700">
      <div
        className={`flex items-center justify-between px-3 py-3 border-b border-b-[#E6EBEE] dark:border-gray-700`}
      >
        <div className="flex items-center gap-2 ">
          <h2 className="text-base text-[#1C1C1C] font-semibold dark:text-gray-200 ">
            Category
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleContent}>
            <FaChevronDown
              className={`transform transition-transform duration-300 text-[#8B96A5] ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`transition-all duration-150 ease-in-out space-y-2 overflow-hidden ${
          isExpanded ? "max-h-fit py-3.5" : "max-h-0 py-0"
        }`}
      >
        {isExpanded && (
          <ul className="-mt-2 w-full">
            {visibleCategories.map((cetegory, index) => (
              <li
                onClick={(e) => e.stopPropagation()}
                key={index}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer text-base font-normal"
              >
                <span className="dark:text-gray-300">{cetegory}</span>
              </li>
            ))}
            {categories.length > 2 && (
              <li
                className="p-2  text-[#0D6EFD] cursor-pointer text-base font-normal"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAll(!showAll);
                }}
              >
                See {showAll ? "Less" : "More"}
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShopCategoryFilter;
