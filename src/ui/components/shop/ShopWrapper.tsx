"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import shop from "/public/shop/shop.png";
import ShopInputFilter from "./atom/ShopInputFilter";
import PriceRange from "./atom/PriceRange";

import ShopCards from "./atom/ShopCards";

import {
  selectedFeatures,
  setSelectedBrand,
  setSelectedCategories,
  setSelectedCondition,
} from "@/redux/features/filter/filterSlice";
import Rating from "./atom/Rating";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";

import { useAppDispatch, useAppSelector } from "@/redux/hook";

// Reusable Filter Component
const ShopFilters = () => {
  const dispatch = useAppDispatch();

  const selectedCategories = useAppSelector(
    (state) => state.filter.selectedCategories
  );
  const selectedBrand = useAppSelector((state) => state.filter.selectedBrand);

  const selectedFeatues = useAppSelector(
    (state) => state.filter.selectedFeatures
  );
  const selectedCondition = useAppSelector(
    (state) => state.filter.selectedCondition
  );

  const handleCategoryChange = (categories: string[]) => {
    dispatch(setSelectedCategories(categories));
  };

  const handleBrandChnage = (brand: string[]) => {
    dispatch(setSelectedBrand(brand));
  };

  const handleFeaturesChnage = (features: string[]) => {
    dispatch(selectedFeatures(features));
  };

  const handleConditionChange = (conditionArray: string[]) => {
    dispatch(setSelectedCondition(conditionArray[0])); // because it's radio -> only 1 value
  };

  return (
    <div>
      {/* <ShopCategoryFilter /> */}
      <ShopInputFilter
        title="Category"
        options={[
          "Mobile accessory",
          "Electronics",
          "Smartphones",
          "Modern tech",
          "Home & Garden",
          "Watches",
          "Clothing",
        ]}
        onChange={handleCategoryChange}
        defaultExpanded={true}
        type="checkbox"
        selectedOptions={selectedCategories}
      />
      <ShopInputFilter
        title="Brands"
        options={["Apple", "Samsung", "Sony", "Dell", "Nike", "Adidas"]}
        onChange={handleBrandChnage}
        defaultExpanded={true}
        type="checkbox"
        selectedOptions={selectedBrand}
      />
      <ShopInputFilter
        title="Features"
        options={[
          "Large Memory",
          "Super power",
          "8GB Ram",
          "Plastic cover",
          "Metallic",
          "SSD",
        ]}
        onChange={handleFeaturesChnage}
        selectedOptions={selectedFeatues}
        defaultExpanded={true}
        type="checkbox"
      />
      <PriceRange />
      <ShopInputFilter
        title="Condition"
        options={["Any", "Brand new", "Old items", "Refurbished"]}
        onChange={handleConditionChange}
        selectedOptions={[selectedCondition]} // Must pass as array
        defaultExpanded={true}
        type="radio"
      />
      <Rating />
      <div className="mt-5">
        <Image src={shop} width={400} height={600} alt="shop" />
      </div>
    </div>
  );
};

const ShopWrapper = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <MaxWidthWrapper>
      <div className="p-5">
        <p className="flex items-center gap-2 text-base font-normal text-[#8B96A5] dark:text-gray-300">
          Home <MdOutlineKeyboardArrowRight /> Mens{" "}
          <MdOutlineKeyboardArrowRight /> Summer{" "}
        </p>

        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          {/* Hamburger Menu for Mobile */}
          <button
            className="sticky top-0 left-0 z-20 lg:hidden flex items-center gap-2 text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 px-4 py-2 rounded-md w-fit border shadow-md dark:border-gray-600"
            onClick={() => setIsDrawerOpen(true)}
          >
            <FaBars size={20} /> Filters
          </button>

          {/* Filter Sidebar for Desktop (Hidden on Mobile) */}
          <div className="hidden lg:block w-full md:basis-[20%]">
            <ShopFilters />
          </div>

          {/* Mobile Drawer */}

          <div
            className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto p-5 ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden`}
          >
            {/* Close Button */}
            <button
              className="text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4 flex items-center gap-2"
              onClick={() => setIsDrawerOpen(false)}
            >
              <FaTimes size={20} /> Close
            </button>

            {/* Filters (Reused Component) */}
            <ShopFilters />
          </div>

          {/* Products Grid */}
          <div className="w-full md:basis-[80%]">
            <ShopCards />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ShopWrapper;
