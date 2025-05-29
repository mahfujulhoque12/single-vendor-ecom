
import MaxWidthWrapper from '@/ui/MaxWidthWrapper'
import React from 'react'
import Slider from './atom/Slider'
import CardOne from './atom/CardOne'
import SecCard from './atom/SecCard'

const Hero = () => {
  return (
    <section className='py-5 md:py-10'>
        <MaxWidthWrapper>

        <div className="flex  gap-4">
        <div className=" basis-[100%] md:basis-[62%]">
            <Slider/>
        </div>
        <div className=" hidden md:block  md:basis-[38%]">
            <div className='flex flex-col gap-3'>
                <div className='w-full'>
                    <CardOne/>
                </div>
                <div className='w-full'>
                    <SecCard/>
                </div>

            </div>
        </div>
        </div>

        </MaxWidthWrapper>
    </section>
  )
}

export default Hero