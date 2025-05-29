import React from "react";

import { items } from "@/data/CategoriesData";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GiHearts } from "react-icons/gi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "@/redux/hook";


const GridView = () => {
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

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4  gap-5 mt-5">
        {filteredItems?.map((product) => (
          <div
            key={product.id}
            className=" basis-full  bg-white sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex flex-grow"
          >
            <div className="p-5 border bg-primary rounded-md border-[#E6EBEE] hover:border-green-500 transition-all duration-300 h-auto flex flex-col flex-grow ">
              {/* Image Section */}
              <div className="bg-[#EEEEEE]  rounded-md relative flex items-center justify-center ">
                <Image
                  src={product.img}
                  alt={product.title || "img"}
                  width={200}
                  height={200}
                  className="mx-auto h-[200px] w-[200px] object-cover p-2"
                />

                <span
                  className={cn(
                    `text-white font-medium text-[10px] bg-[#0070FF] p-1.5 rounded-tl-md rounded-br-md absolute top-0 left-0`
                  )}
                >
                  Best Seller
                </span>

                <div className=" absolute top-3 right-3 z-10 hover:bg-gray-500 rounded-full p-1 transition-all duration-300">
                  <GiHearts className="h-4 w-4 text-[#333B4E] hover:text-green-500 transition-all duration-300 " />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mt-3">
                  <p className="text-sm font-medium text-[#8391A1]  flex items-center gap-1">
                    {product.rating}
                    <span>
                      <MdOutlineStarPurple500
                        className="text-green-500"
                        size={12}
                      />
                    </span>
                  </p>
                  <span className="text-[#8391A1] text-sm font-medium">
                    ({product.reviews}k)
                  </span>
                </div>
                <h2 className="text-[#0A0E1F] text-lg font-semibold mt-1 ">
                  {product.title}
                </h2>

                <span className="text-xs font-medium text-[#0A0E1F] mt-2.5">
                  sold: {product.sold}/{product.total}
                </span>
                <p className="flex gap-1 mt-2.5">
                  <span className="text-[#6F6F6F]  text-base font-semibold">
                    <del>${product.originalPrice}</del>
                  </span>
                  <span className="text-[#0A0E1F]  text-lg font-semibold">
                    ${product.discountedPrice}
                  </span>
                </p>
              </div>

              {/* Button at the Bottom */}

              <button className="bg-[#EEEEEE]  mt-5 py-2.5 rounded-md w-full text-base font-medium text-[#0A0E1F] hover:text-white hover:bg-green-500 transition-all duration-300 flex justify-center items-center gap-2 ">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridView;
