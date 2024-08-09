"use client";
import React, { useState } from "react";
import logo from "@/app/assests/icons/HomeLogo.jpg";
import menu from "@/app/assests/icons/menu.png";
import "@/components/userShared/Navbar/Navbar.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [galleryMenuOpen, setGalleryOpen] = useState(false);

  const toggleGalleryOpen = () => {
    setGalleryOpen(!galleryMenuOpen);
  };

  const NavLinks =[
    {
      path: "/", 
      title: "Home"
    },
    {
      path: "/underConstruction", 
      title: "Portfolio"
    },
    {
      path: "/underConstruction", 
      title: "Gallery"
    },
    {
      path: "/underConstruction", 
      title: "Blog"
    },
    {
      path: "/underConstruction", 
      title: "About Us"
    },
    {
      path: "/underConstruction", 
      title: "Shop"
    }
  ]

  return (
    <nav className="flex justify-between items-center mx-4 ">
      {/* Image section  */}
      <div>
        <Image title="Logo" className="w-[100px]" src={logo} alt="" />
      </div>
      {/*------------------ navlist section for large and medium device-------------------- */}
      <div className="lg:flex md:flex sm: hidden">
        <ul className="flex gap-10 uppercase text-sm ">
            {
              NavLinks.map(({path, title}) =>(
                <div key={path} className="hover-hr">
                <li>
              <Link href={path}>
                  {title}
              </Link>
                  </li>
              <hr className="border border-black bg-black  h-[2px]  w-[45px]" />
          </div>
              ))
            }
        </ul>
      </div>
      {/*------------------ navlist section for small device-------------------- */}
      <div className="lg:hidden md:hidden sm: flex z-10">
        <div onClick={toggleGalleryOpen} className="relative">
          <Image className="w-[30px]" src={menu} alt="" />
        </div>
        {galleryMenuOpen && (
          <div className="absolute mt-14 w-full left-0">
            <ul className="leading-[50px] ps-2  py-5 uppercase text-lg bg-gray-100">
              {
              NavLinks.map(({path, title}) =>(
                <li key={path}>
              <Link href={path}>
                  {title}
              </Link>
                  </li>
              ))
            }
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
