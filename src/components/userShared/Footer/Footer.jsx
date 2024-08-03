import React from "react";
import Image from "next/image";
import footerImg from "@/app/assests/icons/HomeLogo.jpg";
import facebookLogo from "@/app/assests/icons/facebook_logo.png";
import instagramLogo from "@/app/assests/icons/instagram_logo.png";
import twitterLogo from "@/app/assests/icons/twitter_logo.png";
import youtubeLogo from "@/app/assests/icons/youtube_logo.png";

const Footer = () => {
  return (
    <div>
        <hr className=" border border-gray-200" />
        <div className="flex flex-col md:flex-row justify-between items-center py-20 px-5">
        {/*^^^ about us section ^^^ */}
        <div
          style={{ fontFamily: "Lora, serif" }}
          className="text-lg text-gray-500 flex-1 mb-5 md:mb-0 md:text-left flex flex-col items-center md:items-start p-5"
        >
          <span className="text-xl uppercase text-black">About Us</span>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet, eu alia admodum volup tua cu hend,
            rerit tinci dunt nec cu, per an vidit corpora. Nec home delectus ne.
          </p>
          <span>Phone: +998 000 87 65</span>
          <span>Location: West Virginia, USA</span>
        </div>

        {/*^^^ image section ^^^ */}
        <div className="flex-1 flex justify-center mb-5 md:mb-0 p-5">
          <Image className="bg-gray-200" src={footerImg} alt="Footer Image" width={200} height={100} />
        </div>

        {/*^^^ follow us section ^^^ */}
        <div className="text-center leading-[100px] flex-1 p-5">
          <span className="text-xl uppercase">Follow Us</span>
          <div className="flex justify-center items-center mt-3 gap-4">
            <a href="#" aria-label="Facebook">
              <Image src={facebookLogo} width={30} alt="Facebook logo" />
            </a>
            <a href="#" aria-label="Instagram">
              <Image src={instagramLogo} width={30} alt="Instagram logo" />
            </a>
            <a href="#" aria-label="Twitter">
              <Image src={twitterLogo} width={30} alt="Twitter logo" />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src={youtubeLogo} width={30} alt="YouTube logo" />
            </a>
          </div>
          <span className="text-sm text-gray-500 mt-2">Wedding Day</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
