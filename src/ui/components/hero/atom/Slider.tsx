'use client';

import React, { useState, useEffect, useRef } from 'react';
import slider1 from '/public/hero/banner1.png';
import slider2 from '/public/hero/banner2.png';
import slider3 from '/public/hero/banner3.png';
import Image from 'next/image';

type ImageType = {
  id: number;
  image: string;
};

const images: ImageType[] = [
  { id: 1, image: slider1.src },
  { id: 2, image: slider2.src },
  { id: 3, image: slider3.src },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
  };

  // Mouse and Touch Events
  const handleStart = (x: number) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleMove = (x: number) => {
    if (!isDragging.current) return;
    const diff = startX.current - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe Left
        setCurrentImage((prev) => (prev + 1) % images.length);
      } else {
        // Swipe Right
        setCurrentImage((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }
      isDragging.current = false;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div className="relative w-full h-[250px] md:h-[458px] transition-all duration-500">
        <Image
          src={images[currentImage].image}
          alt={`Slide ${images[currentImage].id}`}
          fill
          className="object-cover rounded-md"
          priority
        />
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
              currentImage === index ? 'bg-green-700' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
