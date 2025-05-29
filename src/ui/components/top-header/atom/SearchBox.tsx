'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

// Example static data
const staticData = [
  {
    id: 1,
    title: 'Natural Honey',
    image: '/product/product1.png',
  },
  {
    id: 2,
    title: 'Organic Dates',
    image: '/product/product2.png',
  },
  {
    id: 3,
    title: 'Pure Mustard Oil',
    image: '/product/product3.png',
  },
];

const SearchBoxContent = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<typeof staticData>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!input.trim()) return;
    console.log(`Searching for: ${input}`);
    setSuggestions([]);
    setIsSearching(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (input.trim()) {
      setIsSearching(true);
      const filtered = staticData.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
      setIsSearching(false);
    }
  }, [input]);

  return (
    <div className="relative">
      <div className="bg-white rounded-md flex gap-3 items-center justify-center shadow-sm px-4 py-4 w-full">
        <input
          className="bg-white text-black border-none focus-visible:ring-0 shadow-none outline-none w-full"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Products"
        />
        <button onClick={handleSearch} className="text-black">
          <FaSearch />
        </button>
      </div>

      {isSearching && input.trim() && suggestions.length === 0 ? (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10 text-center p-4">
          <p className="text-gray-500">No data found</p>
        </div>
      ) : suggestions.length > 0 ? (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-10">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="px-4 py-2 hover:bg-gray-100 transition-all duration-300 text-gray-800 cursor-pointer"
              onClick={() => {
                setInput(suggestion.title);
                handleSearch();
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <span>{suggestion.title}</span>
                <Image
                  src={suggestion.image}
                  width={60}
                  height={60}
                  alt={suggestion.title}
                  className="rounded object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const SearchBox = () => (
  <Suspense fallback={<div>Loading search...</div>}>
    <SearchBoxContent />
  </Suspense>
);

export default SearchBox;
