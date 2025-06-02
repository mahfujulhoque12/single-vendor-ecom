/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MdOutlineShoppingCartCheckout,
  MdOutlineStarPurple500,
  MdSupportAgent,
} from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { VscPackage } from "react-icons/vsc";
import { TbPackages } from "react-icons/tb";
import { LuBadgeCheck } from "react-icons/lu";
import { GoDot } from "react-icons/go";
import { trendingProducts } from "@/data/trendingProducts";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import { GiHearts } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

interface TrendingDetailsProps {
  allInfo: {
    id: number;
    title: string;
    img: StaticImageData;
    rating: number;
    reviews: number;
    sold: number;
    total: number;
    originalPrice: number;
    discountedPrice: number;
    description: string;
    slug: string;
    category: string;
    serialNumber: string;
    imgs?: StaticImageData[];
  };
}


const TrendingDetails: React.FC<TrendingDetailsProps> = ({ allInfo }) => {
  const [activeImage, setActiveImage] = useState(allInfo.img); // initial image
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const increment = () => setQuantity((prev) => prev + 1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <MaxWidthWrapper className="px-0 sm:mt-2">
      <div className="bg-white px-2 mb-24 sm:pt-10 ">
        {/* mobile device title and others start */}
        <div className="sm:hidden">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-1">
            {allInfo.title}
          </h1>
          <p className="text-base text-gray-700 font-medium mt-1">
            {allInfo.category}
          </p>
          <p className="text-base font-medium text-gray-500">
            {allInfo.serialNumber}
          </p>
          {/* Price section */}
          <div className="flex items-center gap-2 mt-2">
            <p className="text-green-500 text-xl font-bold">
              <del>${allInfo.originalPrice} BDT</del>
            </p>
            <p className="text-xl font-bold">${allInfo.discountedPrice} BDT</p>
            <button className="ml-3 text-green-500 border border-green-500 px-2 py-0.5 rounded-md text-sm">
              10% off
            </button>
          </div>
        </div>

        {/* mobile device title and others start */}

        {/* for destop device responsive desgin  */}
        <div className="flex flex-col  sm:flex-row  gap-5 ">
          {/* image part start */}
          {/* Main Image */}
          <div className="mb-2 flex sm:basis-[65%] sm:h-[50%] flex-col sm:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="flex-1 mt-2 sm:mt-0 sm:max-h-full  bg-green-50">
              <Image
                src={activeImage}
                alt={allInfo.title}
                width={1200}
                height={1200}
                className="w-full h-full object-contain  rounded-md"
              />
            </div>
            {/* Thumbnails (left side on desktop, bottom on mobile) */}
            <div className="flex  sm:flex-col sm:w-24 sm:overflow-y-auto overflow-x-auto   gap-2 bg-[#fafafa] p-2 rounded-md">
              {[allInfo.img, ...(allInfo.imgs || [])].map(
                (img: any, index: number) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-20 h-20 cursor-pointer rounded-md border-2 ${
                      activeImage === img
                        ? "border-green-600"
                        : "border-transparent"
                    }`}
                    onClick={() => setActiveImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${allInfo.title} ${index}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* image part end */}
          {/* all accordion start */}
          <div className="bg-[#fafafa] sm:p-5 sm:basis-[35%]">
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-1">
                {allInfo.title}
              </h1>
              <p className="text-base text-gray-700 font-medium mt-1">
                {allInfo.category}
              </p>
              <p className="text-base font-medium text-gray-500">
                {allInfo.serialNumber}
              </p>
              {/* Price section */}
              <div className="flex items-center gap-2 mt-2">
                <p className="text-green-500 text-xl font-bold">
                  <del>${allInfo.originalPrice} BDT</del>
                </p>
                <p className="text-xl font-bold">
                  ${allInfo.discountedPrice} BDT
                </p>
                <button className="ml-3 text-green-500 border border-green-500 px-2 py-0.5 rounded-md text-sm">
                  10% off
                </button>
              </div>
            </div>
            {/* Material, Color, Size Accordion Start */}
            <Accordion
              type="single"
              collapsible
              className="bg-[#fafafa] p-3 mt-5"
            >
              {/* frist items  */}
              <AccordionItem
                value="item-1"
                className="bg-white rounded-md px-2 border border-gray-300"
              >
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex items-center gap-3">
                    <MdOutlineShoppingCartCheckout
                      size={30}
                      className="text-green-600"
                    />
                    <div>
                      <p className="text-gray-800 text-base font-semibold">
                        Real Food
                      </p>
                      <p className="text-sm font-normal text-gray-500">
                        Organic fruits
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                    <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Orange
                    </label>

                      <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Red
                    </label>

                      <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Green
                    </label>

                      <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Black
                    </label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* frist items end */}

              {/* sec items start  */}
              <AccordionItem
                value="item-2"
                className="bg-white rounded-md px-2 border border-gray-300"
              >
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex items-center gap-3">
                    <MdOutlineShoppingCartCheckout
                      size={30}
                      className="text-green-600"
                    />
                    <div>
                      <p className="text-gray-800 text-base font-semibold">
                        Natural Honey
                      </p>
                      <p className="text-sm font-normal text-gray-500">
                        Organic fruits
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                      <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Orange
                    </label>

                     <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Red
                    </label>

                     <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Blue
                    </label>

                    <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Black
                    </label>

                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* sec items end  */}

              {/* third items start */}
              <AccordionItem
                value="item-3"
                className="bg-white rounded-md px-2 border border-gray-300"
              >
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex items-center gap-3">
                    <MdOutlineShoppingCartCheckout
                      size={30}
                      className="text-green-600"
                    />
                    <div>
                      <p className="text-gray-800 text-base font-semibold">
                        Pinat Batter
                      </p>
                      <p className="text-sm font-normal text-gray-500">
                        Organic fruits
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                   <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                      <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Orange
                    </label>

                     <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Red
                    </label>

                     <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Blue
                    </label>

                    <label className="flex items-center gap-2 p-4 cursor-pointer rounded-md transition-colors bg-white has-[input:checked]:bg-green-100 has-[input:checked]:text-green-900 border border-green-200">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                          className="accent-green-600"
                      />
                      Black
                    </label>

                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* third items start */}
            </Accordion>

            {/* Material, Color, Size Accordion End */}

            {/* quentity start  */}
            <div className="mt-4 flex items-center gap-4 px-3 border-b border-b-gray-300 pb-5">
              <p className="text-base font-medium text-gray-800 mb-2">
                Quantity
              </p>
              <div className="flex items-center gap-4 bg-white p-2 rounded-md w-full justify-between">
                <button
                  onClick={decrement}
                  className="w-8 h-8 flex items-center justify-center text-lg font-bold bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  −
                </button>
                <p className="text-lg font-semibold w-6 text-center">
                  {quantity}
                </p>
                <button
                  onClick={increment}
                  className="w-8 h-8 flex items-center justify-center text-lg font-bold bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>
            {/* quentity end  */}

            {/* show price start  */}
            <div className="bg-green-500 rounded-2xl flex justify-between items-center py-3 px-5 mt-4">
              <div className="flex flex-col">
                <p className="text-white text-center text-xl font-bold">
                  ${allInfo.originalPrice} BDT
                </p>
                <p className="text-sm text-center font-bold text-white">
                  ${allInfo.discountedPrice} BDT
                </p>
              </div>
              <p className="h-10 w-0.5 bg-white"></p>
              <div className="flex ">
                <button className="flex items-center gap-2 text-white text-base font-semibold cursor-pointer text-center">
                  {" "}
                  <TiShoppingCart size={25} />
                  Add to cart
                </button>
              </div>
            </div>
            {/* ------------ */}
            <div className="bg-green-500/20 rounded-2xl py-3 px-5 mt-4 flex justify-center items-center">
              <button className="text-base font-medium text-green-600 text-center cursor-pointer flex justify-center items-center">
                EMI 29,190 BDT
              </button>
            </div>
            {/* ------------ */}
            {/* show price end  */}

            {/* package help and warranty start */}
            <div>
              <Accordion
                type="single"
                collapsible
                className="bg-[#fafafa] p-3 mt-5"
              >
                {/* frist items  */}
                <AccordionItem
                  value="item-1"
                  className="bg-white rounded-md px-2 border border-gray-300"
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex items-center gap-3">
                      <VscPackage size={30} className="text-green-600" />

                      <p className="text-gray-800 text-base font-semibold">
                        Package Informations
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <TbPackages size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <TbPackages size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <TbPackages size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <TbPackages size={16} /> package : 4
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* frist items end */}

                {/* sec items start  */}
                <AccordionItem
                  value="item-2"
                  className="bg-white rounded-md px-2 border border-gray-300"
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex items-center gap-3">
                      <MdSupportAgent size={30} className="text-green-600" />

                      <p className="text-gray-800 text-base font-semibold">
                        Need Help?
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <TbPackages size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <TbPackages size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <TbPackages size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <TbPackages size={16} /> package : 4
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* sec items end  */}

                {/* third items start */}
                <AccordionItem
                  value="item-3"
                  className="bg-white rounded-md px-2 border border-gray-300"
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex items-center gap-3">
                      <LuBadgeCheck size={30} className="text-green-600" />

                      <p className="text-gray-800 text-base font-semibold">
                        12 Month Warranty
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur animi pariatur soluta quia, laboriosam enim
                        amet maiores error magnam ex?
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* third items start */}
              </Accordion>
            </div>
            {/* package help and warranty end */}

            {/* daimension and product details start */}
            <div>
              <Accordion
                type="single"
                collapsible
                className="bg-[#fafafa] p-3 mt-3"
              >
                {/* frist items  */}
                <AccordionItem
                  value="item-1"
                  className="  px-2 border-y border-y-gray-300"
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex items-center gap-3">
                      <p className="text-gray-800 text-base font-semibold">
                        Daimension{" "}
                        <span className="text-gray-500 font-medium">
                          (Weight variation based on your selections)
                        </span>
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="flex overflow-x-auto mt-2 bg-[#fafafa] p-1 rounded-md">
                        {[...(allInfo.imgs ?? [])].map((img: any, index: number) => (
                        <div
                          key={index}
                          className={`flex-shrink-0 w-20 h-20 mr-2 cursor-pointer rounded-md border border-gray-300`}
                          onClick={() => {
                            setModalImage(img);
                            setIsModalOpen(true);
                          }}
                        >
                          <Image
                            src={img}
                            alt={`${allInfo.title} ${index}`}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                      ))}
                    </div>

                    {isModalOpen && modalImage && (
                      <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
                        <div className="relative max-w-3xl w-full">
                          <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={() => setIsModalOpen(false)}
                          >
                            &times;
                          </button>
                          <Image
                            src={modalImage}
                            alt="Enlarged image"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
                {/* frist items end */}

                {/* sec items start  */}
                <AccordionItem
                  value="item-2"
                  className=" px-2 border-y border-y-gray-300"
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex items-center gap-3">
                      <p className="text-gray-800 text-base font-semibold">
                        Food Care Informations
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <GoDot size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <GoDot size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <GoDot size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <GoDot size={16} /> package : 4
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* sec items end  */}

                {/* third items start */}
                <AccordionItem
                  value="item-3"
                  className="px-2 border-y border-y-gray-300"
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex items-center gap-3">
                      <p className="text-gray-800 text-base font-semibold">
                        12 Month Warranty
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur animi pariatur soluta quia, laboriosam enim
                        amet maiores error magnam ex?
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* third items start */}

                {/* fourth items start */}
                <AccordionItem
                  value="item-4"
                  className=" px-2 border-y border-y-gray-300"
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex items-center gap-3">
                      <p className="text-gray-800 text-base font-semibold">
                        Return And Exchange Policy
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <GoDot size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <GoDot size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <GoDot size={16} /> package : 4
                      </p>
                      <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                        <GoDot size={16} /> package : 4
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* fourth items end */}
              </Accordion>
            </div>
            {/* daimension and product details end */}
          </div>
          {/* all accordion end */}
        </div>
        {/* for destop device responsive desgin  */}

        {/* upsale product start */}
        <div className="mt-10 px-2 sm:px-4 py-6 bg-[#FAFAFA] rounded-xl shadow-sm">
          <div className=" flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-green-800 flex  items-center">
              <IoMdArrowDropright size={28} className="mt-1" />
              Upsale Products
            </h2>
            <Link
              href="/shop"
              className="flex itmes-center text-base font-normal text-green-800 gap-2 underline"
            >
              view all
            </Link>
          </div>

          <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
            {trendingProducts.slice(0, 6).map((product) => (
              <Link
                href={`/trending-product/${product.slug}`}
                key={product.id}
                className="bg-white rounded-md   md:shadow-md p-2 sm:p-4 flex flex-col justify-between md:hover:shadow-lg transition-all"
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
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>

                <div className="flex items-center mt-2 gap-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    {product.rating}
                    <MdOutlineStarPurple500
                      className="text-yellow-400"
                      size={14}
                    />
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

                <button className="mt-4  items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all hidden sm:flex">
                  <FaShoppingCart /> Add to Cart
                </button>
              </Link>
            ))}
          </div>
        </div>
        {/* upsale product end */}

        {/* Cross Sale product start */}
        <div className="mt-10 px-2 sm:px-4 py-6 bg-[#FAFAFA] rounded-xl shadow-sm">
          <div className=" flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-green-800 flex  items-center">
              <IoMdArrowDropright size={28} className="mt-1" />
              Cross Sale Products
            </h2>
            <Link
              href="/shop"
              className="flex itmes-center text-base font-normal text-green-800 gap-2 underline"
            >
              view all
            </Link>
          </div>

          <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
            {trendingProducts.slice(0, 6).map((product) => (
              <Link
                href={`/trending-product/${product.slug}`}
                key={product.id}
                className="bg-white rounded-md   md:shadow-md p-2 sm:p-4 flex flex-col justify-between md:hover:shadow-lg transition-all"
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
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>

                <div className="flex items-center mt-2 gap-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    {product.rating}
                    <MdOutlineStarPurple500
                      className="text-yellow-400"
                      size={14}
                    />
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

                <button className="mt-4  items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all hidden sm:flex">
                  <FaShoppingCart /> Add to Cart
                </button>
              </Link>
            ))}
          </div>
        </div>
        {/* Cross Sale product end */}
      </div>
    </MaxWidthWrapper>
  );
};

export default TrendingDetails;
