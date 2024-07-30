"use client" ;
import Image from 'next/image' ;
import "@/components/userShared/Banner/Banner.css";
import { useEffect, useState } from "react";
import banner1 from "@/app/assests/images/img04.jpg";
import banner2 from "@/app/assests/images/img05.jpg";
import banner3 from "@/app/assests/images/img06.jpg";
import banner4 from "@/app/assests/images/img05.jpg";

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next banner index
      const nextBanner = (currentBanner % 4) + 1;
      setCurrentBanner(nextBanner);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentBanner]);

  return (
    <div className="relative bg-gray-100">
      {/* bannerImages section  */}
      <div>
      
        <Image
          className=" lg:w-full lg:h-screen sm: h-[700px] bg-gray-100"
          src={banner1}
          alt=""
          style={{ display: currentBanner === 1 ? "block" : "none" }}
        />
        <Image
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-gray-100"
          src={banner2}
          alt=""
          style={{ display: currentBanner === 2 ? "block" : "none" }}
        />
        <Image
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-gray-100"
          src={banner3}
          alt=""
          style={{ display: currentBanner === 3 ? "block" : "none" }}
        />
        <Image
          className="lg:w-full lg:h-screen  sm: h-[700px] bg-gray-100"
          src={banner4}
          alt=""
          style={{ display: currentBanner === 4 ? "block" : "none" }}
        />
      </div>
    </div>
  );
};

export default Banner;
