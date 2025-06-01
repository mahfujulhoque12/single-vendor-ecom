import React from "react";

import { items } from "@/data/CategoriesData";
import Image from "next/image";

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
    <div className="bg-[#FAFAFA] mt-4">
        <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
             {filteredItems.map((product) => (
               <div
                 key={product.id}
                 className="bg-white rounded-md  md:shadow-md p-2 sm:p-4 flex flex-col justify-between md:hover:shadow-lg transition-all"
               >
                 <div className="relative w-full h-40 mb-3">
                   <Image
                     src={product.img}
                     alt={product.title}
                     fill
                     className="object-contain p-2"
                   />
                   <span className="absolute top-0 left-0 text-white text-[10px] font-medium bg-green-600 px-2 py-1 rounded-br-md">
                     Best Seller
                   </span>
                   <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                     <GiHearts className="text-red-500" />
                   </div>
                 </div>
     
                 <h3 className="text-base font-semibold text-gray-800">
                   {product.title}
                 </h3>
                 <p className="text-sm text-gray-600 mt-1">{product.description}</p>
     
                 <div className="flex items-center mt-2 gap-2 text-sm text-gray-500">
                   <span className="flex items-center gap-1">
                     {product.rating}
                     <MdOutlineStarPurple500 className="text-yellow-400" size={14} />
                   </span>
                   <span>({product.reviews} reviews)</span>
                 </div>
     
                 <span className="text-xs text-gray-500 mt-1">
                   Sold: {product.sold}/{product.total}
                 </span>
     
                 <div className="flex items-center gap-2 mt-2">
                   <span className="text-sm line-through text-gray-400">
                     ${product.originalPrice}
                   </span>
                   <span className="text-lg font-bold text-green-800">
                     ${product.discountedPrice}
                   </span>
                 </div>
     
                 <button
                   className="mt-4  items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all hidden sm:flex"
                 >
                   <FaShoppingCart /> Add to Cart
                 </button>
               </div>
             ))}
           </div>
    </div>
  );
};

export default GridView;
