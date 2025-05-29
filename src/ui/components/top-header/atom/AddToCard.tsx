"use client";

import { useState } from "react";
import { FaBasketShopping, FaPlus, FaMinus } from "react-icons/fa6";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

// Example static cart data
const staticCartItems = [
  {
    id: 1,
    name: "Honey Jar",
    quantity: 2,
    price: 10,
    image: "/product/product1.png",
  },
  {
    id: 2,
    name: "Organic Dates",
    quantity: 1,
    price: 15,
    image: "/product/product2.png",
  },
];

const AddToCart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const cartItems = staticCartItems;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const taxRate = 0.05;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div>
      <button onClick={toggleDrawer} className="relative">
        <div className="flex items-center gap-2">
          <span className="hidden md:block text-sm text-gray-900">Cart</span>
          <FaBasketShopping size={20} className="text-black " />
        </div>
        <p className="absolute top-[-13px] right-[-22px] text-black ">
          ({cartItems.length.toString().padStart(2, "0")})
        </p>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed bg-white top-20 md:top-0 right-0 z-50 h-full w-full max-w-xl p-6 shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-black">Your Cart</h2>
          <button
            onClick={toggleDrawer}
            className="px-2 py-1 bg-black text-white rounded-md"
          >
            <IoClose />
          </button>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col z-50 space-y-4 overflow-y-auto max-h-[60vh]">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div className="flex-1 px-4">
                  <p className="font-medium text-black">{item.name}</p>
                  <p className="text-gray-600">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center space-x-2">
                    <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-2 py-1 rounded-md">
                      <FaMinus />
                    </button>
                    <p className="font-medium">{item.quantity}</p>
                    <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-2 py-1 rounded-md">
                      <FaPlus />
                    </button>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <IoTrashOutline size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl font-medium text-gray-600">
              No Product in your cart
            </p>
            <div className="flex justify-center items-center mt-3">
              <Image src="/cart/cart.png" alt="img" width={350} height={350} />
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Tax (5%)</p>
              <p className="font-medium">${tax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <Link
              onClick={toggleDrawer}
              href="#"
              className="block text-center bg-black text-white py-2 mt-4 rounded-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
