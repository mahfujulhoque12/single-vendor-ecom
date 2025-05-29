import Link from "next/link";
import React from "react";
import { GiHouse } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { MdManageAccounts } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";

const MobileFooter = () => {
  return (
    <div className="bg-green-50  p-5 fixed bottom-0 left-0 w-full ">
      <div className="flex gap-5 items-center justify-between">
        <Link  href="/" className="flex flex-col items-center justify-center text-green-500 font-semibold text-sm">
          <GiHouse size={20} />
          Home
        </Link>
        <Link href="/categories" className="flex flex-col items-center justify-center text-gray-800 font-semibold text-sm hover:text-green-500 transition-all duration-200 ">
          <TbCategory size={20} />
          Categories
        </Link>
        <Link href="#" className=" flex flex-col items-center justify-center text-[#fff] bg-green-500 p-3 rounded-full font-semibold text-sm">
          <RiShoppingBag4Line size={30} />
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center  text-gray-800 font-semibold text-sm hover:text-green-500 transition-all duration-200">
          <GoHeart size={20} />
          Wishlist
        </Link>
        <Link href="#" className="flex flex-col items-center justify-center  text-gray-800 font-semibold text-sm hover:text-green-500 transition-all duration-200">
          <MdManageAccounts size={22} />
          Profile
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;