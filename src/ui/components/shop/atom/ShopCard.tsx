import Image, { StaticImageData } from "next/image";
import React from "react";
import { MdOutlineArrowRightAlt, MdOutlineStarPurple500 } from "react-icons/md";



interface ShopCardProps {
  image: string | StaticImageData;
  title: string;

  originalPrice: number;
  discountedPrice: number;
  rating: number;
}

const ShopCard: React.FC<ShopCardProps> = ({
  image,
  title,
  rating,
  originalPrice,
  discountedPrice,
}) => {
  return (
    <div className="p-5 border rounded-md hover:border-[#FE9900] transition-all duration-300 h-auto flex flex-col flex-grow">
      {/* Image Section */}
      <div className=" rounded-md relative flex items-center justify-center ">
        <Image
          src={image}
          alt={title || "img"}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow mt-4">
        {/* Dynamic Rating Icons */}
        <div className="flex items-center gap-1">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index}>
              <MdOutlineStarPurple500 className="text-[#FE9900]" size={12} />
            </span>
          ))}
        </div>

        <p className="flex gap-1 mt-2.5">
          <span className="text-[#6F6F6F] text-base font-semibold">
            <del>${originalPrice}</del>
          </span>
          <span className="text-[#0A0E1F] text-lg font-semibold">
            ${discountedPrice}
          </span>
        </p>
        <div className="flex justify-between items-center">
          <h2 className="text-[#8B96A5] text-base font-normal max-w-40 mt-1">
            {title}
          </h2>
          <button className="text-[#8B96A5] hover:bg-gray-200 rounded-full p-1 transition-all duration-300">
            {" "}
            <MdOutlineArrowRightAlt size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
