
import MaxWidthWrapper from '@/ui/MaxWidthWrapper'
import React from 'react'
import CategoryCard from './atom/CategoryCard'

const FeatureCategory = () => {
  return (
    <section className='py-5 md:py-10 hidden sm:block'>
        <MaxWidthWrapper>

        <div>
            <h1 className='text-xl font-semibold text-green-800'>Organic Featured Category</h1>
            <p className='text-sm font-medium text-gray-700'>Get Your Desired Product from Featured Category!</p>
            <CategoryCard/>
        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default FeatureCategory