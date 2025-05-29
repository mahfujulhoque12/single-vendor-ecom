import React from "react";

import { items } from "@/data/CategoriesData";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { useAppSelector } from "@/redux/hook";

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
      <div className="flex flex-col gap-5 mt-5">
        {filteredItems?.map((product) => (
          <div key={product.id} className="  flex  bg-white">
            <div className=" flex flex-col sm:flex-row border border-[#E6EBEE] bg-primary rounded-md hover:border-green-500 transition-all duration-300 h-auto  flex-grow ">
              {/* Image Section */}
              <div className=" p-5 rounded-md relative flex items-center justify-center ">
                <Image
                  src={product.img}
                  alt={product.title || "img"}
                  width={200}
                  height={200}
                  className="mx-auto max-w-[200px] max-h-[200px]"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow mt-4 ">
                <div className="p-5 relative">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[#1C1C1C]  text-base font-medium">
                      {product.title}
                    </h2>
                  </div>
                  <p className="flex items-center gap-1 mt-2.5">
                    <span className="text-[#0A0E1F]  text-lg font-semibold">
                      ${product.discountedPrice}
                    </span>
                    <span className="text-[#6F6F6F]  text-base font-semibold">
                      <del>${product.originalPrice}</del>
                    </span>
                  </p>
                  {/* Dynamic Rating Icons */}
                  <div className="flex flex-col md:flex-row items-start  md:items-center gap-2">
                    <div className="flex items-center gap-1">
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
                    </div>
                    <span className="text-green-500 text-base font-normal">
                      {product.ratingPoint}
                    </span>
                    <span className="text-base font-normal text-[#8B96A5] ">
                      .154 orders
                    </span>
                    <span className="text-[#00B517] text-base font-normal">
                      .Free Shipping
                    </span>
                  </div>
                  <p className="text-[#505050] text-base font-normal ">
                    {product.description}
                  </p>
                  <button className="text-green-500 font-medium text-base underline">
                    View Details
                  </button>
                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-3">
                    <button className="flex w-full md:w-52 items-center gap-2 text-base justify-center font-medium bg-green-500 text-white border border-green-500 px-4 py-2.5 rounded-md hover:bg-green-600 hover:text-white transition-all duration-300">
                      Bye Now
                    </button>
                    <button className="flex w-full md:w-52 items-center gap-2 text-base font-medium text-green-500 border border-green-500 px-4 py-2.5 rounded-md hover:bg-green-500 hover:text-white  justify-center transition-all duration-300">
                      <FaCartShopping /> Add To card
                    </button>
                  </div>

                  <button className="absolute hover:bg-gray-200 rounded-md border  p-1 transition-all duration-300 -top-8 sm:top-5 right-5 border-[#E6E6E8]">
                    {" "}
                    <IoMdHeartEmpty size={25} className="text-green-500" />
                  </button>
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
