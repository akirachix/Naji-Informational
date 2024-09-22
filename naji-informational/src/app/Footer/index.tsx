'use client';
import Link from "next/link";
import React from 'react';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
     <footer id="Contact" className="bg-[#124502] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 im:grid-cols-3 lg:gap-24 w-full max-w-6xl text-center">
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4">Contact Us</h2>
              <ul className="space-y-2">
                <li className="font-serif text-lg lg:text-xl">+254792804646</li>
                <li className="font-serif text-lg lg:text-xl">+254700189970</li>
                <li className="font-serif text-lg lg:text-xl">+25478990654</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4">Terms of Service</h2>
              <ul className="space-y-2">
                <li className="font-serif text-lg lg:text-xl">
                  <Link href="/privacy-policy" className="hover:underline">Privacy policy</Link>
                </li>
                <li className="font-serif text-lg lg:text-xl">
                  <Link href="/account-security" className="hover:underline">Account security</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4">Social Media</h2>
              <div className="flex justify-center space-x-6">
                <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Sign In" className="group">
                  <FaFacebook className="text-white group-hover:text-blue-400 transition-colors w-8 h-8 lg:w-10 lg:h-10" />
                  <span className="sr-only">Facebook Sign In</span>
                </a>
                <a href="https://twitter.com/i/flow/login" target="_blank" rel="noopener noreferrer" aria-label="Twitter Sign In" className="group">
                  <FaTwitter className="text-white group-hover:text-blue-300 transition-colors w-8 h-8 lg:w-10 lg:h-10" />
                  <span className="sr-only">Twitter Sign In</span>
                </a>
                <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Sign In" className="group">
                  <FaInstagram className="text-white group-hover:text-pink-400 transition-colors w-8 h-8 lg:w-10 lg:h-10" />
                  <span className="sr-only">Instagram Sign In</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 text-center">
          <hr className="border-t border-gray-500 border-opacity-50 w-full mx-auto" />
          <p className="text-center font-serif text-lg lg:text-xl mt-4">
            &copy; {new Date().getFullYear()} PestGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}