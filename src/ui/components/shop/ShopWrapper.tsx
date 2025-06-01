"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
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
import { CiFilter } from "react-icons/ci";
import { PiCaretUpDown } from "react-icons/pi";

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
    <MaxWidthWrapper className="px-0">
      <div className="p-2 sm:p-5">


        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center sm:hidden gap-3 justify-between py-2">
             <button className="text-base font-normal text-gray-800 cursor-pointer hover:text-green-500 transition-all duration-300">Top Sell</button>
          <button className="text-base font-normal text-gray-800 flex items-center gap-1 cursor-pointer hover:text-green-500 transition-all duration-300">Price <PiCaretUpDown /></button>
          <button className="text-base font-normal text-gray-800 cursor-pointer hover:text-green-500 transition-all duration-300">Discount</button>
          <button
            className="sticky top-0 left-0 z-20  flex items-center gap-1 text-green-500 text-base font-normal  cursor-pointer   "
            onClick={() => setIsDrawerOpen(true)}
          >
            <CiFilter  size={20} />  filter
          </button>
       
          </div>


          {/* Filter Sidebar for Desktop (Hidden on Mobile) */}
          <div className="hidden lg:block w-full md:basis-[20%]">
            <ShopFilters />
          </div>

          {/* Mobile Drawer */}
       {/* Mobile Drawer Overlay and Drawer */}
    {isDrawerOpen && (
      <div
        className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
        onClick={() => setIsDrawerOpen(false)}
      ></div>
    )}

    <div
      className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto p-5 ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}
      onClick={(e) => e.stopPropagation()} // Prevents drawer itself from closing on click
    >
      <button
        className="text-gray-700 text-lg font-semibold mb-4 flex items-center gap-2 cursor-pointer"
        onClick={() => setIsDrawerOpen(false)}
      >
        <FaTimes size={20} />
      </button>

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
