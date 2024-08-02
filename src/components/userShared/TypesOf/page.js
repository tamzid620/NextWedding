import React from "react";
import Image from "next/image";
import img1 from "@/app/assests/images/h9-feautured-img-0a.jpg";
import img2 from "@/app/assests/images/h9-feautured-img-1a.jpg";
import img3 from "@/app/assests/images/h9-feautured-img-2a.jpg";
import img4 from "@/app/assests/images/h9-feautured-img-3a.jpg";
import "@/components/userShared/TypesOf/TypeOf.css";

const TypeOf = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 my-28">
        
        {/* img1 section  */}
       <div className="relative -mt-[40px] ">
          <Image className="relative shadow-lg shadow-gray-500 bg-gray-200 " height={400} src={img1} alt="" />
          <div className="absolute top-0 bg-black opacity-0 w-full h-[400px] uppercase text-white img1title hover:opacity-60 hover:transition hover:duration-500">
            <h2 className="pt-[300px] ps-5">
              <span className="text-xs">Photography</span> <br />
              <span style={{ fontFamily: 'Lora, serif' }} className="text-3xl">Long Veil</span>
            </h2>
            <div className="relative">
              <hr className="border border-white mt-2 w-full" />
            </div>
          </div>
        </div>

        {/* img2 section  */}
        <div className="relative -mb-[40px]">
          <Image className="relative shadow-md shadow-gray-500 bg-gray-200" height={400} src={img2} alt="" />
          <div className="absolute top-0 bg-black opacity-0 w-full h-[400px] uppercase text-white img1title hover:opacity-60 hover:transition hover:duration-500">
            <h2 className="pt-[300px] ps-5">
              <span className="text-sm">Photography</span> <br />
              <span style={{ fontFamily: 'Lora, serif' }} className="text-3xl">Preparation</span>
            </h2>
            <div className="relative">
              <hr className="border border-white mt-2 w-full" />
            </div>
          </div>
        </div>

        {/* img3 section  */}
        <div className="relative md:-mt-[40px]">
          <Image className="relative shadow-md shadow-gray-500 bg-gray-200" height={400} src={img3} alt="" />
          <div className="absolute top-0 bg-black opacity-0 w-full h-[400px] uppercase text-white img1title hover:opacity-60 hover:transition hover:duration-500">
            <h2 className="pt-[300px] ps-5">
              <span className="text-sm">Photography</span> <br />
              <span style={{ fontFamily: 'Lora, serif' }} className="text-3xl">Photo Book</span>
            </h2>
            <div className="relative">
              <hr className="border border-white mt-2 w-full" />
            </div>
          </div>
        </div>

        {/* img4 section  */}
        <div className="relative">
          <Image className="relative shadow-md shadow-gray-500 bg-gray-200" height={400} src={img4} alt="" />
          <div className="absolute top-0 bg-black opacity-0 w-full h-[400px] uppercase text-white img1title hover:opacity-60 hover:transition hover:duration-500">
            <h2 className="pt-[300px] ps-5">
              <span className="text-sm">Photography</span> <br />
              <span style={{ fontFamily: 'Lora, serif' }} className="text-3xl">Cute Cake</span>
            </h2>
            <div className="relative">
              <hr className="border border-white mt-2 w-full" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TypeOf;
