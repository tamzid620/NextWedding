"use client" ;
import React, { useState } from 'react';
import logo from '@/app/assests/icons/HomeLogo.jpg' ;
import menu from '@/app/assests/icons/menu.png'
import '@/components/userShared/Navbar/Navbar.css'
import Image from 'next/image';

const Navbar = () => {
    const [galleryMenuOpen, setGalleryOpen] = useState(false);

    const toggleGalleryOpen = () => {
      setGalleryOpen(!galleryMenuOpen);
    };
  
    return (
      <div className="flex justify-between items-center mx-3 ">
        {/* Image section  */}
        <div>
          <Image className="w-[100px]" src={logo} alt="" />
        </div>
        {/*------------------ navlist section for large and medium device-------------------- */}
        <div className="lg:flex md:flex sm: hidden">
          <ul className="flex gap-10 uppercase text-lg ">
            <div className="hover-hr">
              <li>Home</li>
              <hr className="border border-black bg-black  h-[2px]  w-[50px]" />
            </div>
            <div className="hover-hr">
              <li className="">Portfolio</li>
              <hr className="border border-black bg-black  h-[2px]  w-[95px]" />
            </div>
            <div className="hover-hr">
              <li>Gallery</li>
  
              <hr className="border border-black bg-black  h-[2px]  w-[75px]" />
            </div>
            <div className="hover-hr">
              <li>Blog</li>
              <hr className="border border-black bg-black  h-[2px]  w-[50px]" />
            </div>
            <div className="hover-hr">
              <li>About Us</li>
              <hr className="border border-black bg-black  h-[2px]  w-[85px]" />
            </div>
            <div className="hover-hr">
              <li>Shop</li>
              <hr className="border border-black bg-black  h-[2px]  w-[50px]" />
            </div>
          </ul>
        </div>
        {/*------------------ navlist section for small device-------------------- */}
        <div className="lg:hidden md:hidden sm: flex">
          <div onClick={toggleGalleryOpen} className="relative">
            <Image className="w-[30px]" src={menu} alt="" />
          </div>
          {galleryMenuOpen && (
            <div className="absolute mt-14 w-full left-0">
              <ul className="leading-10 ps-2  py-5 uppercase text-lg bg-gray-100">
                <li>Home</li>
                <li>Portfolio</li>
                <li> Gallery</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Shop</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;