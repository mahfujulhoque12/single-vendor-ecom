'use client';

import MaxWidthWrapper from '@/ui/MaxWidthWrapper';
import React, { useState } from 'react';
import OrganicHoney from './atom/OrganicHoney';
import BrownRice from './atom/BrownRice';
import ChiaSeeds from './atom/ChiaSeeds';
import Almonds from './atom/Almonds';
import Quinoa from './atom/Quinoa';

const tabData = [
  { id: 1, label: 'Organic Honey', content: <OrganicHoney/> },
  { id: 2, label: 'Brown Rice', content:<BrownRice/>},
  { id: 3, label: 'Chia Seeds', content: <ChiaSeeds/>},
  { id: 4, label: 'Almonds', content: <Almonds/>},
  { id: 5, label: 'Quinoa', content: <Quinoa/> },
  { id: 6, label: 'Flax Seeds', content: 'This is the content of Flax Seeds' },
  { id: 7, label: 'Turmeric Powder', content: 'This is the content of Turmeric Powder' },
  { id: 8, label: 'Apple Cider Vinegar', content: 'This is the content of Apple Cider Vinegar' },
  { id: 9, label: 'Green Tea', content: 'This is the content of Green Tea' },
  { id: 10, label: 'Coconut Oil', content: 'This is the content of Coconut Oil' },
  { id: 11, label: 'Oats', content: 'This is the content of Oats' },
  { id: 12, label: 'Lentils', content: 'This is the content of Lentils' },
  { id: 13, label: 'Pumpkin Seeds', content: 'This is the content of Pumpkin Seeds' },
  { id: 14, label: 'Black Beans', content: 'This is the content of Black Beans' },
  { id: 15, label: 'Natural Peanut Butter', content: 'This is the content of Natural Peanut Butter' },
];

const Categories: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <MaxWidthWrapper className='px-1'>

    <div className='flex gap-2 items-start mt-4 sm:hidden'>
      {/* Left side buttons */}
      <div className='basis-[30%] h-[80vh] overflow-y-auto'>
        <div className='flex flex-col gap-0'>
          {tabData.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-1 text-center   cursor-pointer text-sm ${
                activeTab === tab.id
                  ? 'bg-white text-gray-800'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right side content */}
      <div className='basis-[70%]  max-h-[80vh] overflow-y-auto   rounded-md bg-white shadow ' >
        <h2 className='text-lg font-bold text-gray-700 text-center mt-2'>All Categories</h2>
    
          {tabData.find((tab) => tab.id === activeTab)?.content}
      
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default Categories;
