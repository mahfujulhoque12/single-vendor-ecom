"use client";
import { trendingProducts } from '@/data/trendingProducts';
import MaxWidthWrapper from '@/ui/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MdArrowBackIos } from 'react-icons/md';

const Received = () => {
  const [activeProductId, setActiveProductId] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setActiveProductId(prev => (prev === id ? null : id));
  };

  return (
    <MaxWidthWrapper>
      <Link
        href="/account"
        className="flex gap-1 items-center px-3 py-2 rounded-md w-[25%] mt-2 text-green-500 text-base font-semibold"
      >
        <MdArrowBackIos size={18} /> <span>Return</span>
      </Link>
      <h1 className="text-gray-800 text-2xl font-semibold">Received Orders</h1>

      {trendingProducts.map(product => (
        <div
          key={product.id}
          className="bg-white rounded-md p-2 mt-3 relative"
        >
          <div className="flex items-center gap-2">
            <Image
              src={product.img}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover h-20 w-20 rounded-md bg-green-100"
            />
            <div>
              <h2 className="text-gray-800 text-base font-semibold">
                {product.title}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <p className="text-gray-600 text-sm font-semibold">
                  ${product.discountedPrice}
                </p>
                <p className="text-gray-600 text-sm font-semibold">QtY: 1</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <p className="text-gray-600 text-sm font-semibold">Size: Small</p>
                <p className="text-gray-600 text-sm font-semibold">Color: Red</p>
              </div>
            </div>

            <div className="absolute right-0 top-[30%]">
              <button
                onClick={() => toggleDescription(product.id)}
                className="text-gray-600 text-sm font-semibold px-4 py-2"
              >
                <FaChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    activeProductId === product.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>

          {activeProductId === product.id && (
            <div className="mt-3 p-2 border-t text-sm text-gray-700">
                <h1>Delevary A</h1>
            </div>
          )}
        </div>
      ))}
    </MaxWidthWrapper>
  );
};

export default Received;
