"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-white z-20">
      <div className="w-full h-full container mx-auto px-2 sm:px-8 flex items-center justify-between">
        <figure>
          <Image 
            src='/logo.png' 
            alt="LOTTOBIT" 
            width={300} 
            height={40}
            className='w-[84%] md:w-auto'
          />
        </figure>
        <div className='hidden md:flex gap-6 items-center'>
          <ul className='flex gap-6 text-lg font-medium'>
            <li className='cursor-pointer hover:text-[#F1C017]'>About</li>
            <li className='cursor-pointer hover:text-[#F1C017]'>WhitePaper</li>
            <li className='cursor-pointer hover:text-[#F1C017]'>RoadMap</li>
          </ul>
          <button className="bg-[#2A266A] p-3 rounded-lg text-white transition-all hover:scale-[1.1]">
            Connect Wallet
          </button>
        </div>
        <div className='flex md:hidden items-center'>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl !mr-7 cursor-pointer">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='bg-white md:hidden w-[80%] h-[100vh] fixed top-[80px] right-0 flex flex-col gap-6 p-6'>
          <ul className='flex flex-col gap-6 text-lg font-medium'>
            <li key="mobile-about" className='cursor-pointer hover:text-[#F1C017]'>About</li>
            <li key="mobile-whitepaper" className='cursor-pointer hover:text-[#F1C017]'>WhitePaper</li>
            <li key="mobile-roadmap" className='cursor-pointer hover:text-[#F1C017]'>RoadMap</li>
          </ul>
          <button className="w-full bg-[#2A266A] p-3 rounded-lg text-white transition-all hover:scale-[1.1]">
            Connect Wallet
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;