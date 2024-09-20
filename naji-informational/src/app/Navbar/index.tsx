"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <main>
      <div className="font-serif text-xl">
        <header className="bg-white">
          <nav className="mx-auto flex justify-between items-center p-3 md:p-3 lg:p-5">
            <div className="text-2xl font-bold ml-[-1%] mr-[-4%]">
              <Image src="/images/log.png" alt="Logo" width={70} height={40}/>
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
              <a href="#Home" className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">Home</a>
              <a href="#about" className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">About Us</a>
              <a href="#ourservice" className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">Our Service</a>
              <a href="#Team" className="text-black-700 hover:text-green-800 font-black font-serif text-[26px] text-green-900">Team</a>
            </div>
          </nav>

          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-50">
              <button onClick={toggleMenu} className="absolute top-5 right-5 focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col space-y-18">
                <a href="#" className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">Home</a>
                <a href="#" className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">About Us</a>
                <a href="#" className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">Our Service</a>
                <a href="#" className="text-black-700 hover:text-green-800 font-black font-serif text-[32px] text-green-900">Team</a>
              </div>
            </div>
          )}
        </header>
      </div>
    </main>
  );
}