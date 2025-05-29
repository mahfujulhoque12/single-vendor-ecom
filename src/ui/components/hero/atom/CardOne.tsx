

import React from 'react'
import Link from 'next/link';

const CardOne = () => {
  return (
    <div className='p-3 bg-white rounded-sm shadow'>
        <h1 className='text-xl font-bold capitalize'>Chose your Organic Food </h1>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus sequi tempore error, nisi ipsa architecto tenetur voluptate</p>
        <div className="mt-3">
        <Link href="#" className=' px-3 py-1.5  text-white font-medium text-sm shadow-sm rounded-md bg-green-500 hover:bg-green-600 transition-all duration-300'>Purchase</Link>
        </div>
    </div>
  )
}

export default CardOne