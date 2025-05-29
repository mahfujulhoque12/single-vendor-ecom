import Image from "next/image";
import React from "react";
import logo from "/public/footer/logo.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoLocationSharp, IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";
import store from "/public/footer/store.png";
import payment from "/public/footer/payment.png";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";


const DesktopFooter = () => {
  return (
    <div>
      <div className="bg-green-600">
        <MaxWidthWrapper>
          <div className="p-5 flex flex-col xl:flex-row gap-5 pt-20">
            <div className="basis-full md:basis-[25%] ">
              <Image src={logo} width={400} height={150} alt="logo" />
              <span className="text-sm font-normal text-white mt-3">
                {" "}
                Onekart.com is a largest e-commerce in Bangladesh for computer
                parts, cell phone, accessories, clothing and other IT related
                items.
              </span>
              <div className="mt-6">
                <p className="text-sm font-medium text-white gap-3 flex items-center">
                  <span className="bg-green-300 text-gray-800 p-2 rounded-full">
                    <FaWhatsapp size={20} />
                  </span>{" "}
                  +00 9876543210
                </p>
                <p className="text-sm font-medium text-white gap-3 flex items-center mt-3">
                  <span className="bg-green-300 text-gray-800 p-2 rounded-full">
                    <MdOutlineMessage size={20} />
                  </span>{" "}
                  +00 9876543210
                </p>
                <p className="text-sm font-medium text-white gap-3 flex items-center mt-3">
                  <span className="bg-green-300 text-gray-800 p-2 rounded-full">
                    <IoLocationSharp size={20} />
                  </span>{" "}
                  +00 9876543210
                </p>
              </div>
            </div>
            <div className="basis-full md:basis-[55%] ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* ------------ */}
                <div>
                  <p className="text-lg font-semibold text-white flex flex-col">
                    About Us
                    <span className="h-[1px] w-[60px] bg-green-300 mt-2"></span>
                  </p>
                  <div className="mt-8 flex flex-col">
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Company Profile
                    </Link>
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      All Retail Store
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Marchant Center
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Contact Us
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Feed Back
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Rules & Policy
                    </Link>
                  </div>
                </div>
                {/* ------------ */}

                {/* ------------ */}
                <div>
                  <p className="text-lg font-semibold text-white flex flex-col">
                    Customer Support
                    <span className="h-[1px] w-[60px] bg-green-300 mt-2"></span>
                  </p>
                  <div className="mt-8 flex flex-col">
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Help Center
                    </Link>
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Contact Us
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Gift card
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Privacy & Policy
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Online Shopping
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Redeem Voucher
                    </Link>
                  </div>
                </div>
                {/* ------------ */}
                {/* ------------ */}
                <div>
                  <p className="text-lg font-semibold text-white flex flex-col">
                    My Account
                    <span className="h-[1px] w-[60px] bg-green-300 mt-2"></span>
                  </p>
                  <div className="mt-8 flex flex-col">
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Profile
                    </Link>
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Older History
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Shopping Cart
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Compare
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Compare
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Wishlist
                    </Link>
                  </div>
                </div>
                {/* ------------ */}
                {/* ------------ */}
                <div>
                  <p className="text-lg font-semibold text-white flex flex-col">
                    Information
                    <span className="h-[1px] w-[60px] bg-green-300 mt-2"></span>
                  </p>
                  <div className="mt-8 flex flex-col">
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Become a Vendor
                    </Link>
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Affiliate Program
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Our Suppliers
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Extended plan
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Community
                    </Link>{" "}
                    <Link
                      href="#"
                      className="text-white mt-4 font-medium text-sm"
                    >
                      Locality
                    </Link>
                  </div>
                </div>
                {/* ------------ */}
              </div>
            </div>
            {/* last part */}
            <div className="basis-full md:basis-[20%] ">
              <div>
                <p className="text-lg font-semibold text-white flex flex-col">
                  Shop On The Go
                  <span className="h-[1px] w-[60px] bg-green-300 mt-2"></span>
                </p>
                <div className="mt-8 flex flex-col">
                  <Link
                    href="#"
                    className="text-white mt-4 font-medium text-sm"
                  >
                    Onekart is available. Get It Now
                  </Link>
                  <Image
                    src={store}
                    alt="img"
                    width={350}
                    height={250}
                    className="w-[150px] mt-5"
                  />
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <Link
                    href="#"
                    className="bg-green-300 text-gray-800 p-2 rounded-md"
                  >
                    <FaFacebookF size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="bg-green-300 text-gray-800 p-2 rounded-md"
                  >
                    <FaTwitter size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="bg-green-300 text-gray-800 p-2 rounded-md"
                  >
                    <FaLinkedinIn size={20} />
                  </Link>
                  <Link
                    href="#"
                    className="bg-green-300 text-gray-800 p-2 rounded-md"
                  >
                    <IoLogoInstagram size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      {/* bottom DesktopFooter */}

      <div className="bg-green-800 ">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-4 lg:flex-row justify-between items-center p-5">
            <div>
              <p className="text-[#333B4E] dark:text-gray-300 text-base font-medium">
                Copyright &copy; all rights reserved. Powered by Grabit.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <p className="text-[#333B4E] dark:text-gray-300 flex text-base font-medium">
                We Are Accepting
              </p>
              <Image
                src={payment}
                width={600}
                height={50}
                alt="payment"
                className="object-contain h-[30px] w-auto"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default DesktopFooter;