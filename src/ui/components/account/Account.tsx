import MaxWidthWrapper from '@/ui/MaxWidthWrapper'
import Image from 'next/image'
import React from 'react'
import user from '/public/user/user.jpg';

import Link from 'next/link';
import { RiAccountPinCircleLine } from 'react-icons/ri';

import { ImAddressBook } from 'react-icons/im';
import { FaListUl, FaWallet } from 'react-icons/fa';
import { GiCancel, GiConfirmed } from 'react-icons/gi';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { TbBorderAll } from 'react-icons/tb';
const Account = () => {
  return (
    <MaxWidthWrapper>

        <div>
            {/* name and img start */}
            <div className='mt-1 flex items-center gap-2'>
                <Image src={user} width={300} height={300} alt='img' className='rounded-full object-cover h-20 w-20'/>
                <div>
                    <h2 className='text-lg font-semibold text-gray-8000'>Jane Doe</h2>
                    <p className='flex text-sm font-medium text-gray-500 gap-3'><span>0 wishlist.</span> <span>0 followed product.</span> <span>0 order.</span></p>
                </div>
            </div>
            {/* name and img end */}

            {/* manage account start */}
            <h2 className='text-xl font-semibold text-gray-900'>Manage My Account </h2>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-3'>
                <Link href="/account-info" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <RiAccountPinCircleLine  size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>Account Info</h2>
                </Link>

               <Link href="/address" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <ImAddressBook   size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>Address Book</h2>
                </Link>

                 <Link href="/wallet" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <FaWallet    size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>Wallet</h2>
                </Link>

            </div>
            {/* manage account end */}

            {/* my order start */}
                   <h2 className='text-xl font-semibold text-gray-900 mt-3'>My Orders </h2>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 mt-3'>
                <Link href="/on-going" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <FaListUl    size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>Ongoing </h2>
                </Link>

           

                 <Link href="/on-going?status=delivered" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <GiConfirmed     size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>Delivered</h2>
                </Link>
                 <Link href="/on-going?status=canceled" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <GiCancel     size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>Canceled</h2>
                </Link>

                 <Link href="/on-going?status=pending" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <FaHandshakeSimple     size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>Pending</h2>
                </Link>

                 <Link href="/on-going?status=confirmed" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <IoCheckmarkDoneCircle     size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>Confirmed</h2>
                </Link>

                 <Link href="/on-going?status=all" className='border border-gray-300 bg-white rounded-xl px-1 py-5 flex flex-col gap-3'>
                    <TbBorderAll     size={23} className='text-green-500 flex mx-auto'/>
                    <h2 className='text-gray-700 text-base text-center font-semibold'>All Orders</h2>
                </Link>

            </div>
    
            {/* my order end */}
            


        </div>
    </MaxWidthWrapper>
  )
}

export default Account