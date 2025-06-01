import React from "react";

import { items } from "@/data/CategoriesData";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { useAppSelector } from "@/redux/hook";
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";

const ListView = () => {
  const selectedCategories = useAppSelector(
    (state) => state.filter.selectedCategories
  );
  const selectedBrand = useAppSelector((state) => state.filter.selectedBrand);
  const selectedFeatures = useAppSelector(
    (state) => state.filter.selectedFeatures
  );
  const selectedCondition = useAppSelector(
    (state) => state.filter.selectedCondition
  );
  const selectedRatings = useAppSelector(
    (state) => state.filter.selectedRatings
  );
  const selectedPriceRange = useAppSelector(
    (state) => state.filter.selectedPriceRange
  );
  const filteredItems = items.filter((product) => {
    const categoryMatch = selectedCategories.length
      ? selectedCategories.includes(product.category)
      : true;

    const brandMatch = selectedBrand.length
      ? selectedBrand.includes(product.brand)
      : true;

    const featureMatch = selectedFeatures.length
      ? selectedFeatures.includes(product.features)
      : true;
    const conditionMatch =
      selectedCondition === "Any"
        ? true
        : product.condition === selectedCondition;

    const ratingMatch = selectedRatings.length
      ? selectedRatings.includes(Math.floor(product.rating))
      : true;
    const priceMatch =
      product.discountedPrice >= selectedPriceRange[0] &&
      product.discountedPrice <= selectedPriceRange[1];

    return (
      categoryMatch &&
      brandMatch &&
      featureMatch &&
      conditionMatch &&
      ratingMatch &&
      priceMatch
    );
  });

  const totalStars = 5;
  return (
    <div>
      <div className="flex flex-col gap-2 sm:gap-5 mt-5">
        {filteredItems?.map((product) => (
          <div key={product.id} className=" relative p-1  border border-[#E6EBEE] rounded-md bg-white">

          <div  >
            <div className=" grid grid-cols-2  bg-primary  hover:border-green-500 transition-all duration-300 h-auto  flex-grow ">
              {/* Image Section */}
              <div className="p-3 sm:p-5 rounded-md relative flex items-center sm:items-center justify-center sm:justify-center ">
                <Image
                  src={product.img}
                  alt={product.title || "img"}
                  width={200}
                  height={200}
                  className="mx-auto rounded-sm sm:max-w-[200px] sm:max-h-[200px]"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow mt-4 ">
                <div className="px-3 sm:p-5 ">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[#1C1C1C] text-sm sm:text-base font-medium">
                      {product.title}
                    </h2>
                  </div>
                  <p className="flex items-center gap-2 mt-2.5">
                    <span className="text-[#0A0E1F]  text-base sm:text-lg font-semibold">
                      ${product.discountedPrice}
                    </span>
                    <span className="text-[#6F6F6F] text-sm  sm:text-base font-semibold">
                      <del>${product.originalPrice}</del>
                    </span>
                  </p>
                  {/* Dynamic Rating Icons */}
                  <div className="flex flex-col md:flex-row items-start  md:items-center gap-2 sm:my-1">
                    <div className="flex items-center gap-1 mt-2 sm:mt-0">
                      {/* Render filled stars */}
                      {Array.from({ length: product.rating }).map(
                        (_, index) => (
                          <span key={`filled-${index}`}>
                            <MdOutlineStarPurple500
                              className="text-[#FE9900]"
                              size={15}
                            />
                          </span>
                        )
                      )}

                      {/* Render gray (unfilled) stars */}
                      {Array.from({ length: totalStars - product.rating }).map(
                        (_, index) => (
                          <span key={`unfilled-${index}`}>
                            <MdOutlineStarPurple500
                              className="text-gray-400"
                              size={15}
                            />
                          </span>
                        )
                      )}
                      <span className="text-green-500 text-base font-normal">
                      ({product.ratingPoint})
                    </span>
                    </div>

                    <div className="flex gap-3 items-center w-full">

                    
                    <span className="text-base flex items-center gap-1 font-normal text-[#8B96A5] ">
                      <RiShoppingBag4Line size={16}/> 154 
                    </span>
                    <span className=" text-[#8B96A5] flex items-center gap-1 text-xs sm:text-base font-normal">
                      <FaShippingFast size={16}/> Free 
                    </span>
                   
                    </div>


                  </div>
                  <p className="hidden sm:block text-[#505050] text-sm sm:text-base font-normal ">
                    {product.description}
                  </p>
               
                  <div className="hidden sm:flex flex-col sm:flex-row items-center gap-3 mt-3">
                    <button className="flex w-full md:w-52 items-center gap-2 text-base justify-center font-medium bg-green-500 text-white border border-green-500 px-4 py-2.5 rounded-md hover:bg-green-600 hover:text-white transition-all duration-300">
                      Bye Now
                    </button>
                    <button className="flex w-full md:w-52 items-center gap-2 text-base font-medium text-green-500 border border-green-500 px-4 py-2.5 rounded-md hover:bg-green-500 hover:text-white  justify-center transition-all duration-300">
                      <FaCartShopping /> Add To card
                    </button>
                  </div>

                  <button className="absolute hover:bg-gray-200 rounded-md border  p-1 transition-all duration-300 top-4 sm:top-5 left-[38%] sm:left-5 border-[#E6E6E8]">
                    {" "}
                    <IoMdHeartEmpty className="text-green-500 text-lg sm:text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
            

          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
