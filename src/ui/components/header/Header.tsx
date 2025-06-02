"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { HiMenuAlt1 } from "react-icons/hi";
import Image from "next/image";
import logo from "/public/logo/logo.png";

import { GiShoppingBag } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="bg-white shadow z-50">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button and icons start */}
          <div className="flex items-center justify-between md:hidden w-full">
            {/* mobile left start */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleMobileMenu}
                className="text-green-800 cursor-pointer"
              >
                <HiMenuAlt1 size={30} />
              </button>
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width={200}
                  height={200}
                  className="h-12 w-20"
                />
              </Link>
            </div>
            {/* mobile left end */}

            {/* mobile right start */}
            <div className="flex items-center justify-center gap-5">
              <Link href="/search" className="text-green-800 cursor-pointer">
                <IoMdSearch size={30} />
              </Link>
              <Link
                href="/card"
                className="text-green-800 cursor-pointer relative"
              >
                <GiShoppingBag size={30} />
                <span className="bg-green-700 p-1 text-xs font-light rounded-full text-white absolute -top-3 -left-2">
                  02
                </span>
              </Link>
            </div>
            {/* mobile right end */}
          </div>
          {/* Mobile Menu Button and icons end */}

          {/* Desktop Navigation */}
          <nav className="hidden  relative md:flex justify-between w-full items-center gap-6 text-green-900 font-medium">
            <Link href="/" className="text-base font-semibold hover:text-green-500 transition-all duration-300">Home</Link>
            <Link href="/about" className="text-base font-semibold hover:text-green-500 transition-all duration-300">About</Link>

            {/* Desktop Hover Dropdown start */}
            <div className=" group">
              <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <Link href="/shop" className="text-base font-semibold hover:text-green-500 transition-all duration-300">Honey</Link>
                <FaChevronDown className="group-hover:hidden transition-all" />
                <FaChevronUp className="hidden group-hover:inline-block transition-all" />
              </div>

              <div className="absolute left-32 mt-4 bg-white shadow rounded p-2 z-50 w-5xl  invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="flex  items-center justify-between gap-4">
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                  {/* --- */}
                <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Hover Dropdown  end*/}

            {/* Desktop Hover Dropdown start */}
            <div className=" group">
              <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <Link href="#" className="text-base font-semibold hover:text-green-500 transition-all duration-300">Superfoods</Link>
                <FaChevronDown className="group-hover:hidden transition-all" />
                <FaChevronUp className="hidden group-hover:inline-block transition-all" />
              </div>

              <div className="absolute left-32 mt-2 bg-white shadow rounded p-2 z-50 w-5xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="flex  items-center justify-between gap-4">
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                  {/* --- */}
                <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Hover Dropdown  end*/}

            {/* Desktop Hover Dropdown start */}
            <div className=" group">
              <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <Link href="#"  className="text-base font-semibold hover:text-green-500 transition-all duration-300">Organic&nbsp;Vegetables</Link>
                <FaChevronDown className="group-hover:hidden transition-all" />
                <FaChevronUp className="hidden group-hover:inline-block transition-all" />
              </div>

              <div className="absolute left-32 mt-2 bg-white shadow rounded p-2 z-50 w-5xl invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                 <div className="flex  items-center justify-between gap-4">
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                  {/* --- */}
                <div className="flex flex-col ">
                    <h4 className="font-semibold text-lg text-green-600 px-3 flex items-center gap-2">Organic Food <IoArrowForwardSharp /></h4>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded mt-2"
                    >
                      Natural Supplements
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Organic Baby Food
                    </Link>
                    <Link
                      href="#"
                      className=" px-3 py-1 text-base font-medium hover:bg-green-100 rounded"
                    >
                      Nuts & Seeds
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Hover Dropdown  end*/}

            <Link href="#"  className="text-base font-semibold hover:text-green-500 transition-all duration-300">Whole&nbsp;Grains</Link>
            <Link href="#"  className="text-base font-semibold hover:text-green-500 transition-all duration-300">Organic&nbsp;Flours</Link>
            <Link href="#"  className="text-base font-semibold hover:text-green-500 transition-all duration-300">Healthy&nbsp;Snacks</Link>
            <Link href="#"  className="text-base font-semibold hover:text-green-500 transition-all duration-300">Organic&nbsp;Beverages</Link>
            <Link href="#"  className="text-base font-semibold hover:text-green-500 transition-all duration-300">Organic&nbsp;Dairy</Link>
          </nav>
          {/* Desktop Navigation end */}
        </div>
      </MaxWidthWrapper>

      {/* Mobile Right Drawer Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 space-y-3 text-green-900 font-medium">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={toggleMobileMenu}>
              <Image
                src={logo}
                width={200}
                height={200}
                alt="img"
                className="h-12 w-20"
              />
            </Link>
            <button className="cursor-pointer" onClick={toggleMobileMenu}>
              <FaTimes size={22} />
            </button>
          </div>

          <Link
            href="/"
            className="block text-base font-semibold text-green-500 border-y border-y-gray-300 py-3"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-base font-semibold text-gray-800 border-b border-b-gray-300 pb-3"
            onClick={toggleMobileMenu}
          >
            About
          </Link>

          {/* Mobile Dropdown */}
          {/* Honey Dropdown */}
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "honey" ? null : "honey")
            }
            className="w-full flex items-center justify-between"
          >
            <Link
              href="#"
              className="block text-base font-semibold text-gray-800"
            >
              Honey
            </Link>
            {openDropdown === "honey" ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#ebebeb] rounded-sm mt-1 px-3 space-y-1 transform-gpu origin-top ${
              openDropdown === "honey"
                ? "max-h-[500px] opacity-100 py-3 scale-y-100"
                : "max-h-0 opacity-0 py-0 scale-y-0"
            }`}
          >
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold"
              onClick={toggleMobileMenu}
            >
              Cold-Pressed&nbsp;Oils
            </Link>
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold py-2"
              onClick={toggleMobileMenu}
            >
              Herbal Tea
            </Link>
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold"
              onClick={toggleMobileMenu}
            >
              Dry&nbsp;Fruits
            </Link>
          </div>

          {/* Superfoods Dropdown */}
          <button
            onClick={() =>
              setOpenDropdown(
                openDropdown === "superfoods" ? null : "superfoods"
              )
            }
            className="w-full flex items-center justify-between"
          >
            <Link
              href="#"
              className="block text-base font-semibold text-gray-800"
            >
              Superfoods
            </Link>
            {openDropdown === "superfoods" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#ebebeb] rounded-sm mt-1 px-3 space-y-1 transform-gpu origin-top ${
              openDropdown === "superfoods"
                ? "max-h-[500px] opacity-100 py-3 scale-y-100"
                : "max-h-0 opacity-0 py-0 scale-y-0"
            }`}
          >
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold"
              onClick={toggleMobileMenu}
            >
              Skincare
            </Link>
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold py-2"
              onClick={toggleMobileMenu}
            >
              Spices
            </Link>
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold"
              onClick={toggleMobileMenu}
            >
              Herbal Tea
            </Link>
          </div>

          {/* Organic Vegetables Dropdown */}
          <button
            onClick={() =>
              setOpenDropdown(
                openDropdown === "vegetables" ? null : "vegetables"
              )
            }
            className="w-full flex items-center justify-between    transition-colors duration-300"
          >
            <Link
              href="#"
              className="block text-base font-semibold text-gray-800 "
            >
              Organic Vegetables
            </Link>
            {openDropdown === "vegetables" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden bg-[#ebebeb] rounded-sm mt-1 px-3 space-y-1 transform-gpu origin-top ${
              openDropdown === "vegetables"
                ? "max-h-[500px] opacity-100 py-3 scale-y-100"
                : "max-h-0 opacity-0 py-0 scale-y-0"
            }`}
          >
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold py-1 hover:text-gray-900 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Dry Fruits
            </Link>
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold py-1 hover:text-gray-900 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Whole Grains
            </Link>
            <Link
              href="#"
              className="block text-gray-700 text-sm font-semibold py-1 hover:text-gray-900 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Organic Flours
            </Link>
          </div>

          {/* Mobile Dropdown  end*/}

          <Link
            href="/products/grains"
            className="block border-y border-y-gray-300 py-3 text-gray-800 font-semibold text-base"
            onClick={toggleMobileMenu}
          >
            Whole&nbsp;Grains
          </Link>
          <Link
            href="/products/flours"
            className="block border-b border-b-gray-300 pb-3 text-gray-800 font-semibold text-base"
            onClick={toggleMobileMenu}
          >
            Organic&nbsp;Flours
          </Link>
          <Link
            href="/products/snacks"
            className="block border-b border-b-gray-300 pb-3 text-gray-800 font-semibold text-base"
            onClick={toggleMobileMenu}
          >
            Healthy&nbsp;Snacks
          </Link>
          <Link
            href="/products/beverages"
            className="block border-b border-b-gray-300 pb-3 text-gray-800 font-semibold text-base"
            onClick={toggleMobileMenu}
          >
            Organic&nbsp;Beverages
          </Link>
          <Link
            href="/products/dairy"
            className="block border-b border-b-gray-300 pb-3 text-gray-800 font-semibold text-base"
            onClick={toggleMobileMenu}
          >
            Organic&nbsp;Dairy
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
