"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface ShopInputFilterProps {
  title: string;
  options: string[];
  onChange: (selected: string[]) => void;
  defaultExpanded?: boolean;
  type?: "checkbox" | "radio";
  selectedOptions?: string[]; // <-- NEW
}

const ShopInputFilter: React.FC<ShopInputFilterProps> = ({
  title,
  options,
  defaultExpanded,
  type,
  onChange,
  selectedOptions = [], // <-- get from props
}) => {
  const [showAll, setShowAll] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(
    defaultExpanded ?? false
  );

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleOptionChange = (category: string) => {
    let updatedSelection: string[] = [];

    if (type === "radio") {
      updatedSelection = [category];
    } else {
      updatedSelection = selectedOptions.includes(category)
        ? selectedOptions.filter((item) => item !== category)
        : [...selectedOptions, category];
    }

    onChange(updatedSelection);
  };

  const visibleOptions = showAll ? options : options.slice(0, 4);

  return (
    <div className="rounded-md  overflow-hidden border border-[#E6EBEE] bg-white mb-5">
      <div className="flex items-center justify-between px-3 py-3 border-b border-b-[#E6EBEE] ">
        <h2 className="text-base text-[#1C1C1C] font-semibold ">
          {title}
        </h2>
        <button onClick={toggleContent}>
          <FaChevronDown
            className={`transform transition-transform duration-300 text-[#8B96A5] ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      <div
        className={`transition-all duration-150 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-fit py-3.5" : "max-h-0 py-0"
        }`}
      >
        {isExpanded && (
          <ul className="-mt-2 w-full">
            {visibleOptions.map((category, index) => (
              <li
                key={index}
                className="p-2  hover:bg-gray-100  cursor-pointer text-base font-normal flex gap-2"
                onClick={() => handleOptionChange(category)}
              >
                <input
                  type={type}
                  checked={selectedOptions.includes(category)}
                  onClick={(e) => e.stopPropagation()} // Prevent <li> click
                  onChange={() => handleOptionChange(category)}
                />
                <span className=" flex">{category}</span>
              </li>
            ))}
            {options.length > 4 && (
              <li
                className="p-2 text-[#0D6EFD]  cursor-pointer text-base font-normal"
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

export default ShopInputFilter;
