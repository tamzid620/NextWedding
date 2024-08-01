"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useEffect, useState } from "react";

const UserLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      {children}
      <Footer />
      {isVisible && (
        <div 
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-white rounded-full w-[40px] border border-gray-300 z-50"
        >
          <IoIosArrowDropupCircle className="hover:text-gray-400" size={40} />
        </div>
      )}
    </div>
  );
};

export default UserLayout;
