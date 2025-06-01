'use client';

import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHearts } from 'react-icons/gi';
import { MdOutlineStarPurple500 } from 'react-icons/md';

import MaxWidthWrapper from '@/ui/MaxWidthWrapper';
import { IoMdArrowDropright } from 'react-icons/io';
import Link from 'next/link';
import { trendingProducts } from '@/data/trendingProducts';


 


const TrendingProducts = () => {
  return (
    <MaxWidthWrapper className='px-0'>

    <div className="mt-10 px-2 sm:px-4 py-6 bg-[#FAFAFA] rounded-xl shadow-sm">
    <div className=' flex items-center justify-between mb-6'>
          <h2 className="text-xl font-bold text-green-800 flex  items-center">
        <IoMdArrowDropright size={28} className='mt-1'/>
        Trending Products

      </h2>
      <Link href="/shop" className='flex itmes-center text-base font-normal text-green-800 gap-2 underline'>view all</Link>
    </div>

      <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
        {trendingProducts.map((product) => (
          <Link href={`/trending-product/${product.slug}`}
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
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>

            <div className="flex items-center mt-2 gap-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                {product.rating}
                <MdOutlineStarPurple500 className="text-yellow-400" size={14} />
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

            <button
              className="mt-4  items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all hidden sm:flex"
            >
              <FaShoppingCart /> Add to Cart
            </button>
          </Link>
        ))}
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default TrendingProducts;
