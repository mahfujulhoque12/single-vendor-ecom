'use client';

import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHearts } from 'react-icons/gi';
import { MdOutlineStarPurple500 } from 'react-icons/md';

import image1 from '/public/campaing/cam1.png';
import image2 from '/public/campaing/cam2.png';
import image3 from '/public/campaing/cam3.png';
import image4 from '/public/campaing/cam4.png';
import image5 from '/public/campaing/cam2.png';
import image6 from '/public/campaing/cam4.png';
import image7 from '/public/campaing/cam3.png';
import image8 from '/public/campaing/cam1.png';
import MaxWidthWrapper from '@/ui/MaxWidthWrapper';

const products = [
  {
    id: 1,
    title: 'Organic Fruits',
    img: image1,
    rating: 4.8,
    reviews: 12,
    sold: 60,
    total: 100,
    originalPrice: 20,
    discountedPrice: 15,
    description: 'Fresh organic fruits full of nutrients.',
  },
  {
    id: 2,
    title: 'Fresh Vegetables',
    img: image2,
    rating: 4.7,
    reviews: 10,
    sold: 45,
    total: 80,
    originalPrice: 18,
    discountedPrice: 13,
    description: 'Locally sourced fresh vegetables.',
  },
  {
    id: 3,
    title: 'Dairy Products',
    img: image3,
    rating: 4.6,
    reviews: 8,
    sold: 30,
    total: 60,
    originalPrice: 25,
    discountedPrice: 19,
    description: 'Organic and hormone-free dairy.',
  },
  {
    id: 4,
    title: 'Natural Juices',
    img: image4,
    rating: 4.9,
    reviews: 15,
    sold: 70,
    total: 90,
    originalPrice: 22,
    discountedPrice: 17,
    description: 'Cold-pressed, preservative-free juices.',
  },
  {
    id: 5,
    title: 'Herbal Teas',
    img: image5,
    rating: 4.5,
    reviews: 5,
    sold: 20,
    total: 50,
    originalPrice: 12,
    discountedPrice: 9,
    description: 'Caffeine-free relaxing herbal teas.',
  },
  {
    id: 6,
    title: 'Whole Grains',
    img: image6,
    rating: 4.4,
    reviews: 6,
    sold: 40,
    total: 70,
    originalPrice: 14,
    discountedPrice: 11,
    description: 'Healthy and filling whole grains.',
  },
  {
    id: 7,
    title: 'Raw Honey',
    img: image7,
    rating: 5.0,
    reviews: 20,
    sold: 90,
    total: 100,
    originalPrice: 30,
    discountedPrice: 25,
    description: 'Pure and unfiltered raw honey.',
  },
  {
    id: 8,
    title: 'Cold Pressed Oils',
    img: image8,
    rating: 4.3,
    reviews: 7,
    sold: 25,
    total: 50,
    originalPrice: 28,
    discountedPrice: 22,
    description: 'Healthy oils extracted without heat.',
  },
    {
    id: 10,
    title: 'Raw Honey',
    img: image7,
    rating: 5.0,
    reviews: 20,
    sold: 90,
    total: 100,
    originalPrice: 30,
    discountedPrice: 25,
    description: 'Pure and unfiltered raw honey.',
  },
  {
    id: 9,
    title: 'Cold Pressed Oils',
    img: image8,
    rating: 4.3,
    reviews: 7,
    sold: 25,
    total: 50,
    originalPrice: 28,
    discountedPrice: 22,
    description: 'Healthy oils extracted without heat.',
  },
];

const CampaignProducts = () => {
  return (
    <MaxWidthWrapper>

    <div className="mt-10 px-2 md:px-4 py-6 bg-white rounded-xl md:shadow-sm">
      <h2 className="text-xl font-bold text-green-800 mb-6">
        Campaign Organic Products
      </h2>
      <div className="grid gap-3 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#FAFAFA] border border-gray-200 rounded-xl md:shadow-md p-2 sm:p-4 flex flex-col justify-between md:hover:shadow-lg transition-all"
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
              <div className="absolute top-0 right-0 bg-white rounded-full p-1 md:shadow">
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
          </div>
        ))}
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default CampaignProducts;
