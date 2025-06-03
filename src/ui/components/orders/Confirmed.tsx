import { trendingProducts } from '@/data/trendingProducts'
import MaxWidthWrapper from '@/ui/MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'

const Confirmed = () => {
  return (
    <MaxWidthWrapper>
        <Link href="/account" className=' flex gap-1 items-center px-3 py-2 rounded-md w-[25%] mt-2 text-green-500 text-base font-semibold'><MdArrowBackIos size={18} /> <span>Return</span></Link>
        <h1 className='text-gray-800 text-2xl font-semibold'>Confirmed Orders</h1>

            {trendingProducts.map((product)=>(
                <div key={product.id} className='flex items-center gap-2 mt-3 bg-white rounded-md p-2' >
                    <Image src={product.img} alt={product.title} width={300} height={300} className='object-cover h-32 w-32 rounded-md bg-green-100'/>
                    <div>
                        <h2 className='text-gray-800 text-base font-semibold'>{product.title}</h2>
                            <h2 className='text-gray-600 text-sm font-semibold'>{product.description}</h2>
                    
                      <p className='text-gray-600 text-sm font-semibold mt-2'>${product.discountedPrice}</p>
                      <p className='text-gray-600 text-sm font-semibold'>QtY: 1</p>

                    </div>
                </div>
            ))}
   
    </MaxWidthWrapper>
  )
}

export default Confirmed