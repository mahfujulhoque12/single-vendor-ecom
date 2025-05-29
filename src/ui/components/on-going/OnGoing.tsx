"use client";

import MaxWidthWrapper from '@/ui/MaxWidthWrapper';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import on1 from '/public/ongoing/on1.jpg';
import on2 from '/public/ongoing/on2.jpg';
import on3 from '/public/ongoing/on3.jpg';
import Image from 'next/image';
import Link from 'next/link';

const offers = [
  {
    image: on1,
    title: "Flat 30% OFF on Summer Collection",
    description: "Upgrade your wardrobe with trendy summer styles. Limited time only! ",
    buttonText: "Shop Now",
    link: "#"
  },
  {
    image: on2,
    title: "Buy 1 Get 1 Free on T-Shirts",
        description: "Upgrade your wardrobe with trendy summer styles. Limited time only!  ",
    buttonText: "Explore Organic Food",
    link: "#"
  },
  {
    image: on3,
    title: "Flash Sale: Up to 60% OFF!",
    description: "Upgrade your wardrobe with trendy summer styles. Limited time only! ! ",
    buttonText: "Grab Deal",
    link: "#"
  }
];

const OnGoing = () => {
  return (
    <MaxWidthWrapper className='px-0'>
      <div className="my-8 md:my-12 ">
        <h2 className="text-xl font-bold text-gray-800  mb-6">
          🎁 Ongoing Offers
        </h2>

        <Carousel>
          <CarouselContent>
            {offers.map((offer, index) => (
              <CarouselItem key={index} className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-xl shadow-md p-3 md:p-10">
                  <Image
                    src={offer.image}
                    alt={`Offer ${index + 1}`}
                    className="rounded-lg object-cover w-full h-[150px]"
                    width={800}
                    height={400}
                  />

                  <div className="space-y-4 ">
                    <h3 className="text-lg  font-semibold text-primary">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600  text-base ">
                      {offer.description}
                    </p>
                    <Link
                      href={offer.link}
                      className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                    >
                      {offer.buttonText}
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className='border border-gray-300 hover:bg-green-500 hover:text-white '/>
          <CarouselNext className='border border-gray-300 hover:bg-green-500 hover:text-white'/>
        </Carousel>
      </div>
    </MaxWidthWrapper>
  );
};

export default OnGoing;
