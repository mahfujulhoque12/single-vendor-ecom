"use client";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

import { FaStar } from "react-icons/fa";
import { setSelectedRatings } from "@/redux/features/filter/filterSlice";

const Rating: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedRatings = useAppSelector(
    (state) => state.filter.selectedRatings
  );

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [showAll] = useState(false);

  const ratingOptions = [5, 4, 3, 2];

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleRatingChange = (rating: number) => {
    let updatedSelection: number[];

    if (selectedRatings.includes(rating)) {
      updatedSelection = selectedRatings.filter((r) => r !== rating);
    } else {
      updatedSelection = [...selectedRatings, rating];
    }

    dispatch(setSelectedRatings(updatedSelection)); // ✅ Update Redux
  };

  const visibleOptions = showAll ? ratingOptions : ratingOptions.slice(0, 4);

  return (
    <div className="rounded-md bg-white overflow-hidden border border-[#E6EBEE] bg-primary  mb-5">
      <div className="flex items-center justify-between px-3 py-3 border-b border-b-[#E6EBEE] ">
        <h2 className="text-base text-[#1C1C1C] font-semibold ">
          Ratings
        </h2>
        <button onClick={toggleContent}>
          <div
            className={`transform transition-transform duration-300 text-[#8B96A5] ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </div>
        </button>
      </div>

      <div
        className={`transition-all duration-150 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-fit py-3.5" : "max-h-0 py-0"
        }`}
      >
        {isExpanded && (
          <ul className="-mt-2 w-full">
            {visibleOptions.map((rating, index) => (
              <li
                key={index}
                onClick={() => handleRatingChange(rating)} // ✅ Clicking stars toggles
                className="p-2 hover:bg-gray-100  cursor-pointer text-base font-normal flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  readOnly
                />
                <span className=" flex">
                  {Array.from({ length: rating }).map((_, idx) => (
                    <span key={idx}>
                      <FaStar className="text-yellow-500" />
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Rating;
