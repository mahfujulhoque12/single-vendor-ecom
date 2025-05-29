
import MaxWidthWrapper from '@/ui/MaxWidthWrapper'
import React from 'react'
import ExclusiveCard from './atom/ExclusiveCard'


const ExclusiveCategory = () => {
  return (
    <section className='py-5 md:py-10 hidden sm:block'>
        <MaxWidthWrapper>

        <div>
            {/* <h1 className='text-xl font-semibold text-gray-800'>Organic Exclusive Category</h1>
            <p className='text-sm font-medium text-gray-700'>Get Your Desired Product from Exclusive Category!</p> */}
            <ExclusiveCard/>
        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default ExclusiveCategory