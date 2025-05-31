'use client';

import MaxWidthWrapper from '@/ui/MaxWidthWrapper';
import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { products as allProducts } from '../all-products/AllProducts';
import Image, { StaticImageData } from 'next/image';
import { MdOutlineStarPurple500 } from 'react-icons/md';

export type Product = {
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
};

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const topSuggestions = filteredProducts.slice(0, 5);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Find Your Favorite Products
        </h2>

        {/* Search Box with Suggestions */}
        <div className="max-w-xl mx-auto relative mb-8" ref={inputRef}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Search organic honey, seeds, fruits..."
            className="w-full py-3 pl-12 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-white text-gray-800 placeholder-gray-400"
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          {query && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
              onClick={() => setQuery('')}
              aria-label="Clear"
            >
              <FaTimes size={16} />
            </button>
          )}

          {/* Suggestions Dropdown */}
          {isFocused && topSuggestions.length > 0 && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow z-50">
              {topSuggestions.map((item) => (
                <div
                  key={item.id}           
                  onClick={() => {
                    setQuery(item.title);
                    setIsFocused(false);
                  }}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-green-100 cursor-pointer"
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Results */}
        {query && (
          <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#FAFAFA] border border-gray-200 rounded-xl md:shadow-md p-2 md:p-4 flex flex-col justify-between md:hover:shadow-lg transition-all"
              >
                <div className="relative w-full h-40 mb-3">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-contain p-2"
                  />
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

                <button className="mt-4 cursor-pointer items-center justify-center gap-2 border border-green-600 text-green-500 hover:text-white py-2 rounded-md hover:bg-green-700 transition-all hidden sm:flex">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Search;
