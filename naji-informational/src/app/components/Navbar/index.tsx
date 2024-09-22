"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
    <main>
      <div className="font-serif text-xl">
        <header className="bg-white">
          <nav className="mx-auto flex justify-between items-center p-3 md:p-3 lg:p-5">
            <div className="text-2xl font-bold ml-[-1%] mr-[-4%]">
              <Image src="/images/log.png" alt="Logo" width={50} height={20} />
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden md:flex space-x-12 mr-6"> 
              <Link href="#Home" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">Home</Link>
              <Link href="#about" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">About Us</Link>
              <Link href="#ourservice" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">Our Service</Link>
              <Link href="#Team" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">Team</Link>
              <Link href="#Contact" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">Contact</Link>
            </div>
          </nav>

          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-50">
              <button onClick={toggleMenu} className="absolute top-5 right-5 focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col space-y-24">
                <Link href="#Home" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">Home</Link>
                <Link href="#about" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">About Us</Link>
                <Link href="#ourservice" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">Our Service</Link>
                <Link href="#Team" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">Team</Link>
                <Link href="#Contact" onClick={handleLinkClick} className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">Contact</Link>
              </div>
            </div>
          )}
        </header>
      </div>
    </main>
    </div>
  );
}
