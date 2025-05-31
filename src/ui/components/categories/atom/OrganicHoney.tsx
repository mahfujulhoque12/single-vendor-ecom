'use client';

import React from 'react';
import Image from 'next/image';

// You can replace these image imports with real food images later
import image1 from '/public/category/food1.png';
import image2 from '/public/category/food2.png';
import image3 from '/public/category/food3.png';
import image4 from '/public/category/food4.png';
import image5 from '/public/category/food5.png';
import image6 from '/public/category/food6.png';
import image7 from '/public/category/food3.png';
import image8 from '/public/category/food1.png';
import image9 from '/public/category/food2.png';
import image10 from '/public/category/food4.png';
import image11 from '/public/category/food5.png';
import image12 from '/public/category/food6.png';
import image13 from '/public/category/food1.png';
import image14 from '/public/category/food3.png';
import image15 from '/public/category/food2.png';
import image16 from '/public/category/food6.png';

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
  { id: 9, image: image9.src, title: 'Organic Spices', href: '#' },
  { id: 10, image: image10.src, title: 'Dry Fruits & Nuts', href: '#' },
  { id: 11, image: image11.src, title: 'Natural Snacks', href: '#' },
  { id: 12, image: image12.src, title: 'Gluten-Free Foods', href: '#' },
  { id: 13, image: image13.src, title: 'Plant-based Milk', href: '#' },
  { id: 14, image: image14.src, title: 'Superfoods', href: '#' },
  { id: 15, image: image15.src, title: 'Organic Seeds', href: '#' },
  { id: 16, image: image16.src, title: 'Natural Sweeteners', href: '#' },
];

const OrganicHoney = () => {
  return (
    <div className=" bg-white  grid gap-2 grid-cols-1 grid-cols-xs-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="p-2  rounded-md group  transition-all duration-300"
        >
          <a href={card.href}>
            <div className="flex justify-center items-center">
              <Image
                src={card.image}
                width={250}
                height={200}
                alt={card.title}
                className="h-[100px] w-full object-contain"
              />
            </div>
            <p className="text-base font-normal mt-2 group-hover:text-green-700 transition-colors duration-150 text-center">
              {card.title}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default OrganicHoney;
