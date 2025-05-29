'use client';

import React from 'react';
import Image from 'next/image';

import image1 from '/public/category/food1.png';
import image2 from '/public/category/food2.png';
import image3 from '/public/category/food3.png';
import image4 from '/public/category/food4.png';
import image5 from '/public/category/food5.png';
import image6 from '/public/category/food6.png';
import image7 from '/public/category/food3.png';
import image8 from '/public/category/food1.png';

type CardData = {
  id: number;
  image: string;
  title: string;
  href: string;
};

const cardData: CardData[] = [
  { id: 1, image: image1.src, title: 'Organic Fruits', href: '#' },
  { id: 2, image: image2.src, title: 'Fresh Vegetables', href: '#' },
  { id: 3, image: image3.src, title: 'Dairy Products', href: '#' },
  { id: 4, image: image4.src, title: 'Natural Juices', href: '#' },
  { id: 5, image: image5.src, title: 'Herbal Teas', href: '#' },
  { id: 6, image: image6.src, title: 'Whole Grains', href: '#' },
  { id: 7, image: image7.src, title: 'Raw Honey', href: '#' },
  { id: 8, image: image8.src, title: 'Cold Pressed Oils', href: '#' },
];

const ExclusiveCard = () => {
  return (
    <div className=" px-4 py-6 bg-gradient-to-tr from-[#fefae0] to-[#e0f7fa] rounded-xl shadow-inner">
      <h2 className="text-xl font-bold  text-green-800 mb-6">Explore Exclusive Organic Categories</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {cardData.map((card) => (
          <a
            key={card.id}
            href={card.href}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative w-full h-32 sm:h-36 md:h-40">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="text-center py-2">
              <p className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-green-700 transition-colors">
                {card.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveCard;
