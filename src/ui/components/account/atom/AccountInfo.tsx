"use client"
import MaxWidthWrapper from '@/ui/MaxWidthWrapper'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MdArrowBackIos } from 'react-icons/md'

const AccountInfo = () => {
      const [enabled, setEnabled] = useState(false);
  return (
    <MaxWidthWrapper>

        <div className='mt-1'>
            <Link href="/account" className=' flex gap-1 items-center px-3 py-2 rounded-md w-[25%] mt-2 text-green-500 text-base font-semibold'><MdArrowBackIos size={18} /> <span>Return</span></Link>
            <h2 className='flex bg-white px-2 py-3 rounded-md  justify-between text-lg font-semibold text-gray-700'>Full Name: <span className='text-gray-600 flex items-center gap-1 text-base'>Jane Doe <IoIosArrowForward /></span></h2>

             <h2 className='flex bg-white px-2 py-3 mt-1 rounded-md  justify-between text-lg font-semibold text-gray-700'>Change Password: <span className='text-gray-600 flex items-center gap-1 text-base'> <IoIosArrowForward /></span></h2>
             
    <h2 className='flex bg-white px-2 py-3 mt-1 rounded-md justify-between text-lg font-semibold text-gray-700'>
      Enable Quick Login:
      <span className='text-gray-600 flex items-center gap-2'>
   
        {/* ✅ Custom Switch */}
        <button
          onClick={() => setEnabled(!enabled)}
          className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
            enabled ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
              enabled ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </button>
      </span>
    </h2>

       <h2 className='flex bg-white px-2 py-3 mt-1 rounded-md  justify-between text-lg font-semibold text-gray-700'>Add Mobile: <span className='text-gray-600 flex items-center gap-1 text-base'> 012587432 <IoIosArrowForward /></span></h2>

        <h2 className='flex bg-white px-2 py-3 mt-1 rounded-md  justify-between text-lg font-semibold text-gray-700'>Change Gmail: <span className='text-gray-600 flex items-center gap-1 text-base'>mah******@gmail.com <IoIosArrowForward /></span></h2>

           <h2 className='flex bg-white px-2 py-3 mt-1 rounded-md  justify-between text-lg font-semibold text-gray-700'>Gender: <span className='text-gray-600 flex items-center gap-1 text-base'>male <IoIosArrowForward /></span></h2>

              <h2 className='flex bg-white px-2 py-3 mt-1 rounded-md  justify-between text-lg font-semibold text-gray-700'>Change Gmail: <span className='text-gray-600 flex items-center gap-1 text-base'>mah******@gmail.com <IoIosArrowForward /></span></h2>

               <h2 className='flex bg-white px-2 py-3 mt-1 rounded-md  justify-between text-lg font-semibold text-gray-700'>Birthday: <span className='text-gray-600 flex items-center gap-1 text-base'>12/12/1982 <IoIosArrowForward /></span></h2>

        </div>
    </MaxWidthWrapper>
  )
}

export default AccountInfo