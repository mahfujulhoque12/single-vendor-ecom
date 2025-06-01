"use client";
import React from "react";
import thank from "/public/thank/tick.png";
import Image from "next/image";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import Link from "next/link";

const Thankyou = () => {
  const email = "omorparvej3344@gmail.com";

  const infoList = [
    {
      title: "Transaction Date",
      value: "Thursday, February 17, 2025 (GMT +7)",
    },
    {
      title: "Payment Method",
      value: "Mastercard ending with 7415",
    },
    {
      title: "Shipping Method",
      value: "Express delivery (1-3 business days)",
    },
    {
      title: "Shipping Details",
      value: "Express delivery (1-3 business days)",
    },
  ];

  return (
    <div>
      <MaxWidthWrapper className="py-20">
        <div className="pt-5 bg-white p-5 flex flex-col mx-auto max-w-[720px] bg-primary rounded-md border border-[#E6E6E8] shadow-lg">
          <div className="w-full flex flex-col items-center justify-center border-b border-b-[#E6E6E8] pb-3">
            <Image
              src={thank}
              width={100}
              height={100}
              alt="thank"
              className="w-[43px] h-[43px]"
            />
            <p className="text-xl font-medium text-[#333B4E]">
              Thanks for your order!
            </p>
            <span className="text-base text-center text-[#8391A1] font-normal mt-4">
              The order confirmation has been sent to {email}
            </span>
          </div>

          {infoList.map((item, index) => (
            <div key={index} className="border-b border-b-[#E6E6E8] pb-3">
              <p className="text-base text-[#333B4E] font-semibold mt-5">
                {item.title}
              </p>
              <p className="text-sm text-[#8391A1] font-normal mt-1">
                {item.value}
              </p>
            </div>
          ))}

          <div className="border-b border-b-[#E6E6E8] mt-3 pb-3 flex items-center justify-between">
            <button  className="text-base cursor-pointer font-semibold uppercase underline text-[#333B4E]">
              Track Order
            </button>

            <button className="px-2 py-1 rounded-sm border text-sm font-normal border-green-500 text-gray-800 cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-300">
              Download Invoice
            </button>
          </div>

          <Link
            href="/shop"
            className="bg-green-500 text-white text-sm font-semibold py-2.5 rounded-md mt-5 text-center hover:bg-green-600 transition-all duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Thankyou;
