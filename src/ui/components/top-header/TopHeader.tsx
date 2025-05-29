"use client"
import MaxWidthWrapper from '@/ui/MaxWidthWrapper';
import { useState, useEffect } from 'react';

import React from 'react';
import Logo from './atom/Logo';
import SearchBox from './atom/SearchBox';
import Account from './atom/Account';

const TopHeader = () => {
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [visible, setVisible] = useState(true); // Track visibility of the header

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      // Scrolling up
      setVisible(true);
    } else {
      // Scrolling down
      setVisible(false);
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener on unmount
    };
  }, [lastScrollY]);

  return (
    <section className={`bg-white p-0 ${visible ? 'sticky top-0' : 'hidden'} z-50 hidden xl:block`}>
      <MaxWidthWrapper>
 
          <div className="flex justify-between gap-6 text-white items-center py-2">
            <div>
              <Logo />
            </div>
            <div className="w-[80%]">
              <SearchBox />
            </div>
            <div>
              <Account />
            </div>
          </div>
   
      </MaxWidthWrapper>
    </section>
  );
};

export default TopHeader;