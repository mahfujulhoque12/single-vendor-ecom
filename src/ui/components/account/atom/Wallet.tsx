import MaxWidthWrapper from '@/ui/MaxWidthWrapper'
import Link from 'next/link'

import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'

const Wallet = () => {
  return (
    <MaxWidthWrapper>

        <div>
            <Link href="/account" className=' flex gap-1 items-center px-3 py-2 rounded-md w-[25%] mt-2 text-green-500 text-base font-semibold'><MdArrowBackIos size={18} /> <span>Return</span></Link>
            Wallet
            </div>
    </MaxWidthWrapper>
  )
}

export default Wallet