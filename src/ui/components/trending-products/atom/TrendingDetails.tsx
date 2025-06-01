/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import Image from "next/image";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdOutlineShoppingCartCheckout, MdSupportAgent } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { VscPackage } from "react-icons/vsc";
import { TbPackages } from "react-icons/tb";
import { LuBadgeCheck } from "react-icons/lu";

const TrendingDetails: React.FC<{ allInfo: any }> = ({ allInfo }) => {
  const [activeImage, setActiveImage] = useState(allInfo.img); // initial image
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <MaxWidthWrapper className="px-0">
      <div className="bg-white px-2 mb-24">
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

        {/* image part start */}
        {/* Main Image */}
        <div className="mb-2">
          <Image
            src={activeImage}
            alt={allInfo.title}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-md"
          />

          {/* Thumbnails */}
          <div className="flex overflow-x-auto mt-2 bg-[#fafafa] p-1 rounded-md">
            {[allInfo.img, ...(allInfo.imgs || [])].map(
              (img: any, index: number) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 mr-2 cursor-pointer rounded-md border-2 ${
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
        <div className="bg-[#fafafa]">
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
                      Material
                    </p>
                    <p className="text-sm font-normal text-gray-500">
                      Organic fruits
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="orange"
                      value="orange"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="orange" className="text-gray-700">
                      Orange
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="red"
                      value="red"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="red" className="text-gray-700">
                      Red
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="green"
                      value="green"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="green" className="text-gray-700">
                      Green
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="yellow"
                      value="yellow"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="yellow" className="text-gray-700">
                      Yellow
                    </label>
                  </div>
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
                      Material
                    </p>
                    <p className="text-sm font-normal text-gray-500">
                      Organic fruits
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="orange"
                      value="orange"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="orange" className="text-gray-700">
                      Orange
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="red"
                      value="red"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="red" className="text-gray-700">
                      Red
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="green"
                      value="green"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="green" className="text-gray-700">
                      Green
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="yellow"
                      value="yellow"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="yellow" className="text-gray-700">
                      Yellow
                    </label>
                  </div>
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
                      Material
                    </p>
                    <p className="text-sm font-normal text-gray-500">
                      Organic fruits
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="orange"
                      value="orange"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="orange" className="text-gray-700">
                      Orange
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="red"
                      value="red"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="red" className="text-gray-700">
                      Red
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="green"
                      value="green"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="green" className="text-gray-700">
                      Green
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      id="yellow"
                      value="yellow"
                      name="color"
                      className="accent-green-600"
                    />
                    <label htmlFor="yellow" className="text-gray-700">
                      Yellow
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* third items start */}
          </Accordion>

          {/* Material, Color, Size Accordion End */}

          {/* quentity start  */}
          <div className="mt-4 flex items-center gap-4 px-3 border-b border-b-gray-300 pb-5">
            <p className="text-base font-medium text-gray-800 mb-2">Quantity</p>
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
                    <MdSupportAgent  size={30} className="text-green-600" />

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
                    <LuBadgeCheck  size={30} className="text-green-600" />

                    <p className="text-gray-800 text-base font-semibold">
                      12 Month Warranty
                    </p>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="bg-[#fafafa] p-4 rounded-md space-y-3">
                    <p className="text-sm font-medium text-gray-600 flex items-center gap-2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi pariatur soluta quia, laboriosam enim amet maiores error magnam ex?
                    </p>
                 
                  </div>
                </AccordionContent>
              </AccordionItem>
              {/* third items start */}
            </Accordion>
          </div>
          {/* package help and warranty end */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TrendingDetails;
