'use client';

import React from 'react';
import {  MdShoppingBasket } from 'react-icons/md';
import { CiCircleQuestion } from 'react-icons/ci';
import { IoSettings } from 'react-icons/io5';
import { AiOutlineMessage } from 'react-icons/ai';
import MaxWidthWrapper from '@/ui/MaxWidthWrapper';

// 1️⃣ Dynamic badge content list
const badges = [
  {
    icon: <MdShoppingBasket  size={50} className="text-white bg-green-500 p-2 rounded-full" />,
    title: 'Product Finder',
    subtitle: 'Find Your prouct Easily',
  },
  {
    icon: <AiOutlineMessage size={50} className="text-white bg-green-500 p-2 rounded-full" />,
    title: 'Raise a Complain',
    subtitle: 'Share your experience',
  },
  {
    icon: <CiCircleQuestion size={50} className="text-white bg-green-500 p-2 rounded-full" />,
    title: 'Online Support',
    subtitle: 'Get Online Support',
  },
  {
    icon: <IoSettings size={50} className="text-white bg-green-500 p-2 rounded-full" />,
    title: 'Servicing Center',
    subtitle: 'Repair Your Furniture',
  },
];

const Badge = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* 2️⃣ Render each badge card from array */}
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex bg-white  flex-col sm:flex-row justify-center items-center gap-4 p-4 sm:shadow-md border rounded-md cursor-pointer border-gray-300  transition"
          >
            <div>{badge.icon}</div>
            <div>
              <h2 className="text-lg font-semibold">{badge.title}</h2>
              <p className="text-sm font-medium">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Badge;
