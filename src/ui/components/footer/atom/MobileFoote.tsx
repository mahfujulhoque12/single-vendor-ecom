'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { GiHouse } from 'react-icons/gi';
import { GoHeart } from 'react-icons/go';
import { MdManageAccounts } from 'react-icons/md';
import { RiListOrdered } from 'react-icons/ri';
import { TbCategory } from 'react-icons/tb';

const MobileFooter = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-white p-5 fixed bottom-0 left-0 w-full z-50">
      <div className="flex gap-5 items-center justify-between">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center font-semibold text-sm ${
            isActive('/') ? 'text-green-500' : 'text-gray-800 hover:text-green-500'
          } transition-all duration-200`}
        >
          <GiHouse size={20} />
          Home
        </Link>

        <Link
          href="/categories"
          className={`flex flex-col items-center justify-center font-semibold text-sm ${
            isActive('/categories') ? 'text-green-500' : 'text-gray-800 hover:text-green-500'
          } transition-all duration-200`}
        >
          <TbCategory size={20} />
          Categories
        </Link>

          <Link
          href="#"
          className={`flex flex-col items-center justify-center font-semibold text-sm ${
            isActive('/categories') ? 'text-green-500' : 'text-gray-800 hover:text-green-500'
          } transition-all duration-200`}
        >
          <RiListOrdered   size={20} />
          Orders
        </Link>

        <Link
          href="/wishlist"
          className={`flex flex-col items-center justify-center font-semibold text-sm ${
            isActive('/wishlist') ? 'text-green-500' : 'text-gray-800 hover:text-green-500'
          } transition-all duration-200`}
        >
          <GoHeart size={20} />
          Wishlist
        </Link>

        <Link
          href="/account
          "
          className={`flex flex-col items-center justify-center font-semibold text-sm ${
            isActive('/profile') ? 'text-green-500' : 'text-gray-800 hover:text-green-500'
          } transition-all duration-200`}
        >
          <MdManageAccounts size={22} />
          Profile
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
