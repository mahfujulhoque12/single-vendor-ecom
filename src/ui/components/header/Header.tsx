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

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);


  return (
    <header className="bg-green-50 shadow z-50">
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
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={200}
                className="h-12 w-20"
              />
            </div>
            {/* mobile left end */}

            {/* mobile right start */}
            <div className="flex items-center justify-center gap-5">
              <div className="text-green-800 cursor-pointer">
                <IoMdSearch size={30} />
              </div>
              <div className="text-green-800 cursor-pointer relative">
                <GiShoppingBag size={30} />
                <span className="bg-green-700 p-1 text-xs font-light rounded-full text-white absolute -top-3 -left-2">
                  02
                </span>
              </div>
            </div>
            {/* mobile right end */}
          </div>
          {/* Mobile Menu Button and icons end */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-between w-full items-center gap-6 text-green-900 font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            {/* Desktop Hover Dropdown start */}
            <div className="relative group">
              <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <Link href="/shop">Honey</Link>
                <FaChevronDown className="group-hover:hidden transition-all" />
                <FaChevronUp className="hidden group-hover:inline-block transition-all" />
              </div>

              <div className="absolute left-0 mt-2 bg-white shadow rounded p-2 z-50 min-w-[150px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Natural Supplements
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Organic Baby Food
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Nuts & Seeds
                </Link>
              </div>
            </div>
            {/* Desktop Hover Dropdown  end*/}

            {/* Desktop Hover Dropdown start */}
            <div className="relative group">
              <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <Link href="#">Superfoods</Link>
                <FaChevronDown className="group-hover:hidden transition-all" />
                <FaChevronUp className="hidden group-hover:inline-block transition-all" />
              </div>

              <div className="absolute left-0 mt-2 bg-white shadow rounded p-2 z-50 min-w-[150px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Skincare
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Spices
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Herbal Tea
                </Link>
              </div>
            </div>
            {/* Desktop Hover Dropdown  end*/}

            {/* Desktop Hover Dropdown start */}
            <div className="relative group">
              <div className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <Link href="#">Organic&nbsp;Vegetables</Link>
                <FaChevronDown className="group-hover:hidden transition-all" />
                <FaChevronUp className="hidden group-hover:inline-block transition-all" />
              </div>

              <div className="absolute left-0 mt-2 bg-white shadow rounded p-2 z-50 min-w-[150px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Dry&nbsp;Fruits
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Cold-Pressed&nbsp;Oils
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-1 hover:bg-green-100 rounded"
                >
                  Herbal Tea
                </Link>
              </div>
            </div>
            {/* Desktop Hover Dropdown  end*/}

            <Link href="/products/grains">Whole&nbsp;Grains</Link>
            <Link href="/products/flours">Organic&nbsp;Flours</Link>
            <Link href="/products/snacks">Healthy&nbsp;Snacks</Link>
            <Link href="/products/beverages">Organic&nbsp;Beverages</Link>
            <Link href="/products/dairy">Organic&nbsp;Dairy</Link>
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
        <div className="p-4 space-y-4 text-green-900 font-medium">
          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <Image
                src={logo}
                width={200}
                height={200}
                alt="img"
                className="h-12 w-20"
              />
            </div>
            <button className="cursor-pointer" onClick={toggleMobileMenu}>
              <FaTimes size={22} />
            </button>
          </div>

          <Link href="/" className="block" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="/about" className="block" onClick={toggleMobileMenu}>
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
            <span>Honey</span>
            {openDropdown === "honey" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openDropdown === "honey" && (
            <div className="ml-4 space-y-1 mt-1">
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Cold-Pressed&nbsp;Oils
              </Link>
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Herbal Tea
              </Link>
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Dry&nbsp;Fruits
              </Link>
            </div>
          )}

          {/* Superfoods Dropdown */}
          <button
            onClick={() =>
              setOpenDropdown(
                openDropdown === "superfoods" ? null : "superfoods"
              )
            }
            className="w-full flex items-center justify-between"
          >
            <span>Superfoods</span>
            {openDropdown === "superfoods" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </button>
          {openDropdown === "superfoods" && (
            <div className="ml-4 space-y-1 mt-1">
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Skincare
              </Link>
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Spices
              </Link>
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Herbal Tea
              </Link>
            </div>
          )}

          {/* Organic Vegetables Dropdown */}
          <button
            onClick={() =>
              setOpenDropdown(
                openDropdown === "vegetables" ? null : "vegetables"
              )
            }
            className="w-full flex items-center justify-between"
          >
            <span>Organic Vegetables</span>
            {openDropdown === "vegetables" ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </button>
          {openDropdown === "vegetables" && (
            <div className="ml-4 space-y-1 mt-1">
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Dry&nbsp;Fruits
              </Link>
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Whole&nbsp;Grains
              </Link>
              <Link href="#" className="block" onClick={toggleMobileMenu}>
                Organic&nbsp;Flours
              </Link>
            </div>
          )}

          {/* Mobile Dropdown  end*/}

          <Link
            href="/products/grains"
            className="block"
            onClick={toggleMobileMenu}
          >
            Whole&nbsp;Grains
          </Link>
          <Link
            href="/products/flours"
            className="block"
            onClick={toggleMobileMenu}
          >
            Organic&nbsp;Flours
          </Link>
          <Link
            href="/products/snacks"
            className="block"
            onClick={toggleMobileMenu}
          >
            Healthy&nbsp;Snacks
          </Link>
          <Link
            href="/products/beverages"
            className="block"
            onClick={toggleMobileMenu}
          >
            Organic&nbsp;Beverages
          </Link>
          <Link
            href="/products/dairy"
            className="block"
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
