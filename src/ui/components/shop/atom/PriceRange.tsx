import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import React, { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setSelectedPriceRange } from "@/redux/features/filter/filterSlice";


const PriceRange = () => {
  const dispatch = useAppDispatch();
  const selectedPriceRange = useAppSelector(
    (state) => state.filter.selectedPriceRange
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [localRange, setLocalRange] = useState<[number, number]>([
    selectedPriceRange[0],
    selectedPriceRange[1],
  ]);

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleApply = () => {
    dispatch(setSelectedPriceRange(localRange));
  };

  return (
    <div className="w-full bg-white rounded-md overflow-hidden border border-[#E6EBEE] bg-primary   mt-5 mb-5">
      <div className="flex items-center justify-between px-3 py-3 border-b border-b-[#E6EBEE] ">
        <div className="flex items-center gap-2">
          <h2 className="text-base text-[#1C1C1C]  font-semibold">
            Price Range
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
        className={`w-full transition-all duration-150 ease-in-out space-y-2 overflow-hidden ${
          isExpanded ? "max-h-fit py-3.5" : "max-h-0 py-0"
        }`}
      >
        {isExpanded && (
          <div className="px-4 w-full">
            <RangeSlider
              className="w-full"
              value={localRange}
              onInput={(values) => setLocalRange(values as [number, number])}
              min={0}
              max={200000}
            />
            <div className="flex gap-5 mt-3 items-center">
              <div className="w-1/2">
                <label
                  htmlFor="min"
                  className="text-base font-normal text-[#1C1C1C] "
                >
                  Min
                </label>
                <input
                  className="w-full h-10 rounded-md border p-3 border-green-500"
                  placeholder="0"
                  type="number"
                  value={localRange[0]}
                  onChange={(e) =>
                    setLocalRange([Number(e.target.value), localRange[1]])
                  }
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="max"
                  className="text-base font-normal text-[#1C1C1C] "
                >
                  Max
                </label>
                <input
                  className="w-full h-10 rounded-md border border-green-500 p-3 "
                  placeholder="165220"
                  type="number"
                  value={localRange[1]}
                  onChange={(e) =>
                    setLocalRange([localRange[0], Number(e.target.value)])
                  }
                />
              </div>
            </div>
            <div className="flex gap-5 mt-3 items-center">
              <button
                onClick={handleApply}
                className="w-full text-base text-green-500 bg-white border rounded-md py-3 font-medium "
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceRange;
